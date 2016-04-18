# Single Sign-on via the API
There are two implementation types for SSO. Either BookingBug acts as the SSO server, or BookingBug acts as the Client.

## BookingBug as the Server
When BookingBug is the server you'll integrate with BookingBugs current SSO implementation. This implementation method supports SSO for two member types, Administrators, and Clients (Consumers). This method allows you to generate tokens to authenticate against the JavaScript SDK or use the REST API as a new/existing client or as an existing Administrator. 
The high-level BookingBug process is as follows.

BookingBug configures an SSO account which generates the Administrators/Clients SSO credentials. We'll send the over the credentials you'll need to do the encryption. 

Once you've received these details, generate an SSO sign in token using the below code examples

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">Ruby</a></li>
        <li><a href="#tab-2">Java</a></li>
        <li><a href="#tab-3">C#</a></li>
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
#!/usr/bin/env ruby

require 'rubygems'
require 'ezcrypto'
require 'json'
require 'cgi'
require 'time'

module BookingBug
  class TokenGenerator
    attr_accessor :data
    attr_accessor :options

    BOOKINGBUG_COMPANY_ID = "{Your Company ID or Affiliate ID}"
    BOOKINGBUG_SECURE_KEY = "{Your Secure Key}"

    def initialize(options = {})
      options.merge!({:expires => (Time.now + 3600).iso8601})
      key = EzCrypto::Key.with_password BOOKINGBUG_COMPANY_ID, BOOKINGBUG_SECURE_KEY
      @data = key.encrypt64(options.to_json).gsub(/\n/,'')
      @data = CGI.escape(@data)
    end

    def to_s
      @data
    end

    def decrypt
      key = EzCrypto::Key.with_password BOOKINGBUG_COMPANY_ID, BOOKINGBUG_SECURE_KEY
      key.decrypt64(CGI.unescape(@data))
    end
  end
end

token = BookingBug::TokenGenerator.new({
  'first_name' => 'John',
  'email' => 'smith@example.com',
  'last_name' => 'Smith',
  'mobile' => '0123456789'
})

puts token.to_s
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
package com.bookingbug;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.text.SimpleDateFormat;

import javax.crypto.Cipher;
import javax.crypto.CipherOutputStream;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.net.URLCodec;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.json.simple.JSONObject;


/**
 * Singleton class for creating a BookingBug SSO Token. See {@link #main(String[])} for usage example.
 * Requires commons-codec library {@link http://commons.apache.org/codec/}.
 */
public class TokenGenerator {
  private static final String COMPANY_ID = "{Your Company ID or Affiliate ID}";
  private static final String SECURE_KEY = "{Your Secure Key}";
  private static final byte[] INIT_VECTOR = "OpenSSL for Ruby".getBytes();  
  private SecretKeySpec secretKeySpec;
  private IvParameterSpec ivSpec;
  private URLCodec urlCodec = new URLCodec("ASCII");
  private Base64 base64 = new Base64();
  private static TokenGenerator INSTANCE = new TokenGenerator();

  public static TokenGenerator getInstance() {
    if (INSTANCE == null) {
      INSTANCE = new TokenGenerator();
    }
    return INSTANCE;
  }

  private TokenGenerator() {
    String salted = SECURE_KEY + COMPANY_ID;
    byte[] hash = DigestUtils.sha(salted);
    byte[] saltedHash = new byte[16];
    System.arraycopy(hash, 0, saltedHash, 0, 16);

    secretKeySpec = new SecretKeySpec(saltedHash, "AES");
    ivSpec = new IvParameterSpec(INIT_VECTOR);
  }

  private void encrypt(InputStream in, OutputStream out) throws Exception {
    try {
      byte[] buf = new byte[1024];
      
      Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
      cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivSpec);
      
      out = new CipherOutputStream(out, cipher);
      
      int numRead = 0;
      while ((numRead = in.read(buf)) >= 0) {
        out.write(buf, 0, numRead);
      }
      out.close();
    } catch (InvalidKeyException e) {
      e.printStackTrace();
    } catch (NoSuchAlgorithmException e) {
      e.printStackTrace();
    } catch (NoSuchPaddingException e) {
      e.printStackTrace();
    } catch (InvalidAlgorithmParameterException e) {
      e.printStackTrace();
    } catch (java.io.IOException e) {
      e.printStackTrace();
    }
  }

  public String create(JSONObject json) throws Exception {
    Date expires = DateUtils.addHours(new Date(), 1);
    json.put("expires", new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(expires));
    byte[] data = json.toString().getBytes();

    ByteArrayOutputStream out = new ByteArrayOutputStream();
    for (int i = 0; i < 16; i++) {
      data[i] ^= INIT_VECTOR[i];
    }
    encrypt(new ByteArrayInputStream(data), out);

    String token = new String(urlCodec.encode(base64.encode(out.toByteArray())));
    return token;
  }    

  public static void main(String[] args) {
    try {
      JSONObject jsonObj = new JSONObject();
      jsonObj.put("first_name", "John");
      jsonObj.put("last_name", "Smith");
      jsonObj.put("email", "smith@example.com");
      jsonObj.put("mobile", "0123456789");
      
      System.out.println( TokenGenerator.getInstance().create(jsonObj) );

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```
</pre>
        </div>
        <div id="tab-3" class="tab__content">
<pre>
```
namespace BookingBug {
  public class TokenGenerator {
    public static string create(JsonObject data) { 
      string CompanyId = "{Your Company ID or Affiliate ID}";
      string SecureKey = "{Your Secure Key}";        
      string initVector = "OpenSSL for Ruby"; // DO NOT CHANGE

      string expires = DateTime.UtcNow.AddHours(1).ToString("yyyy-MM-ddTHH:mm:ssZ");
      data["expires"] = expires;

      byte[] initVectorBytes = Encoding.UTF8.GetBytes(initVector);
      byte[] keyBytesLong;
      using( SHA1CryptoServiceProvider sha = new SHA1CryptoServiceProvider() ) {
        keyBytesLong = sha.ComputeHash( Encoding.UTF8.GetBytes( SecureKey + CompanyId ) );
      }
      byte[] keyBytes = new byte[16];
      Array.Copy(keyBytesLong, keyBytes, 16);

      byte[] textBytes = Encoding.UTF8.GetBytes(data.ToString());
      for (int i = 0; i < 16; i++) {
        textBytes[i] ^= initVectorBytes[i];
      }

      // Encrypt the string to an array of bytes
      byte[] encrypted = encryptStringToBytes_AES(textBytes, keyBytes, initVectorBytes);
      string encoded = Convert.ToBase64String(encrypted); 
      return HttpUtility.UrlEncode(encoded);
    }

    static byte[] encryptStringToBytes_AES(byte[] textBytes, byte[] Key, byte[] IV) {
      // Declare the stream used to encrypt to an in memory
      // array of bytes and the RijndaelManaged object
      // used to encrypt the data.
      using( MemoryStream msEncrypt = new MemoryStream() )
      using( RijndaelManaged aesAlg = new RijndaelManaged() )
      {
        // Provide the RijndaelManaged object with the specified key and IV.
        aesAlg.Mode = CipherMode.CBC;
        aesAlg.Padding = PaddingMode.PKCS7;
        aesAlg.KeySize = 128;
        aesAlg.BlockSize = 128;
        aesAlg.Key = Key;
        aesAlg.IV = IV;
        // Create an encrytor to perform the stream transform.
        ICryptoTransform encryptor = aesAlg.CreateEncryptor();

        // Create the streams used for encryption.
        using( CryptoStream csEncrypt = new CryptoStream( msEncrypt, encryptor, CryptoStreamMode.Write ) ) {
          csEncrypt.Write( textBytes, 0, textBytes.Length );
          csEncrypt.FlushFinalBlock();
        }

        byte[] encrypted = msEncrypt.ToArray(); 
        // Return the encrypted bytes from the memory stream.
        return encrypted;
      }
    }   
  }
}

class MainClass
{
    static void Main(string[] args)
    {
        JsonObject jsonObject = new JsonObject();
        jsonObject["first_name"] = "John";
        jsonObject["last_name"] = "Smith";
        jsonObject["email"] = "smith@example.com";
        jsonObject["mobile"] = "0123456789";
        System.Console.WriteLine(BookingBug.TokenGenerator.create(jsonObject));
    }
}
```
</pre>
        </div>
    </div>
</div>

With this token you've generated, you can:
- initialize the 'Client Booking Journey' and 'Manage My Appointments' interfaces by passing this token into the angular directive or as a URL param when you initialize these interfaces.
- or use the login API to get an Auth-Token that allows you to use the API as that Administrator or Client

## BookingBug as the client
The second option is for BookingBug to integrate with your SSO server. We are open to integrating to any standard SSO protocols including LDAP, OAuth, and OpenID or integrating with a custom SSO mechanism.

## Alternatives to SSO
SSO products(for example Oracle SSO) software that remembers forms and automatically signs in when it recognizes a web form. Put the interface behind an another form of authentication, so people can not see the page unless they've signed in.
Remember me checkboxes on login forms. The user will only have to log in once and on that device.
