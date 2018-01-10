# Authentication

To authenticate with the API, you will require an auth token along with the App-Id and App-Key. This can be obtained by a `POST` request with an administrator's email and password to the login endpoint.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Node.js</a></li>
        <li><a href="#tab-3">Ruby</a></li>
        <li><a href="#tab-4">PHP</a></li>
        <li><a href="#tab-5">Go</a></li>
        <li><a href="#tab-6">Swift</a></li>
        <li><a href="#tab-7">Java</a></li>
        <li><a href="#tab-8">Sample Response Data</a></li>
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST -H "App-Key: {app-key}" -H "App-Id: {app-id}" -H "Cache-Control: no-cache" -H "Content-Type: application/json" -d '{ "email": "{email}", "password": "{password}" }' "https://{host}.bookingbug.com/api/v1/login"
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
var request = require("request");

var options = { method: 'POST',
  url: 'https://<host>.bookingbug.com/api/v1/login',
  headers:
   { 'cache-control': 'no-cache',
     'app-id': '<app-key>',
     'app-key': '<app-id>',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: { email: '<admin-email>', password: '<admin-password>' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```
</pre>
        </div>
        <div id="tab-3" class="tab__content">
<pre>
```
require 'uri'
require 'net/http'

url = URI("https://<host>.bookingbug.com/api/v1/login")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'multipart/form-data; boundary=---011000010111000001101001'
request["app-key"] = '<app-key>'
request["app-id"] = '<app-id>'
request["cache-control"] = 'no-cache'
request.body = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<admin-email>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n<admin-password>\r\n-----011000010111000001101001--"

response = http.request(request)
puts response.read_body
```
</pre>
        </div>
        <div id="tab-4" class="tab__content">
<pre>
```
<?php

$request = new HttpRequest();
$request->setUrl('https://<host>.bookingbug.com/api/v1/login');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'app-id' => '<app-id>',
  'app-key' => '<app-key>',
  'content-type' => 'multipart/form-data; boundary=---011000010111000001101001'
));

$request->setBody('-----011000010111000001101001
Content-Disposition: form-data; name="email"

<admin-email>
-----011000010111000001101001
Content-Disposition: form-data; name="password"

<admin-password>
-----011000010111000001101001--');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</pre>
        </div>
        <div id="tab-5" class="tab__content">
<pre>
```
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<host>.bookingbug.com/api/v1/login"

  payload := strings.NewReader("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<admin-email>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n<admin-password>\r\n-----011000010111000001101001--")

  req, _ := http.NewRequest("POST", url, payload)

  req.Header.Add("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  req.Header.Add("app-key", "<app-key>")
  req.Header.Add("app-id", "<app-id>")
  req.Header.Add("cache-control", "no-cache")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(res)
  fmt.Println(string(body))

}
```
</pre>
        </div>
        <div id="tab-6" class="tab__content">
<pre>
```
import Foundation

let headers = [
  "content-type": "multipart/form-data; boundary=---011000010111000001101001",
  "app-key": "<app-key>",
  "app-id": "<app-id>",
  "cache-control": "no-cache"
]
let parameters = [
  [
    "name": "email",
    "value": "<admin-email>"
  ],
  [
    "name": "password",
    "value": "<admin-password>"
  ]
]

let boundary = "---011000010111000001101001"

var body = ""
var error: NSError? = nil
for param in parameters {
  let paramName = param["name"]!
  body += "--\(boundary)\r\n"
  body += "Content-Disposition:form-data; name=\"\(paramName)\""
  if let filename = param["fileName"] {
    let contentType = param["content-type"]!
    let fileContent = String(contentsOfFile: filename, encoding: NSUTF8StringEncoding, error: &error)
    if (error != nil) {
      println(error)
    }
    body += "; filename=\"\(filename)\"\r\n"
    body += "Content-Type: \(contentType)\r\n\r\n"
    body += fileContent!
  } else if let paramValue = param["value"] {
    body += "\r\n\r\n\(paramValue)"
  }
}

var request = NSMutableURLRequest(URL: NSURL(string: "https://<host>.bookingbug.com/api/v1/login")!,
                                        cachePolicy: .UseProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.HTTPMethod = "POST"
request.allHTTPHeaderFields = headers
request.HTTPBody = postData

let session = NSURLSession.sharedSession()
let dataTask = session.dataTaskWithRequest(request, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    println(error)
  } else {
    let httpResponse = response as? NSHTTPURLResponse
    println(httpResponse)
  }
})

dataTask.resume()
```
</pre>
        </div>
        <div id="tab-7" class="tab__content">
<pre>
```
HttpResponse<String> response = Unirest.post("https://<host>.bookingbug.com/api/v1/login")
  .header("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .header("app-key", "<app-key>")
  .header("app-id", "<app-id>")
  .header("cache-control", "no-cache")
  .body("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<admin-email>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n<admin-password>\r\n-----011000010111000001101001--")
  .asString();
```
</pre>
        </div>
        <div id="tab-8" class="tab__content">
<pre>
```
{
  "email": "<admin-email>",
  "auth_token": "<auth-token>",
  "company_id": <company-id>,
  "path": "https://<host>.bookingbug.com/api/v1",
  "_embedded": {
    "members": [],
    "administrators": [
      {
        "name": "<name>",
        "email": "<admin-email>",
        "role": "owner",
        "company_id": <company-id>,
        "company_name": "<company-name>",
        "_links": {
          "self": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>"
          },
          "edit": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>/edit"
          },
          "company": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/company"
          },
          "login": {
            "href": "https://<host>.bookingbug.com/api/v1/login/admin/<company-id>"
          },
          "base_login": {
            "href": "https://<host>.bookingbug.com/api/v1/login/admin"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/login/<company-id>"
    },
    "administrator": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>",
      "templated": true
    }
  }
}
```
</pre>
        </div>
    </div>
</div>

The Auth-Token is generated when the login end-point is executed and can be found in the body response. This is then required in the header for every call made using the admin end-points.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c1d4330701034bffb1fd)


## Parent/Child Authentication

If you have a parent/child setup the authentication is slightly different. The login endpoint needs to know
which company you're logging in against and for that you'll need to pass in the company ID. See below an example cURL call.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d
  '{
    "email": "{email}",
    "password": "{password}",
    "id": {company_id}
  }' "https://{host}.bookingbug.com/api/v1/login"
  ```
</pre>
        </div>
    </div>
</div>

## Admin Authentication

To authenticate as an administrator you can call the admin login end-point.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d
  '{
    "email": "{email}",
    "password": "{password}"
  }' "https://{host}.bookingbug.com/api/v1/login/admin/{company_id}"
  ```
</pre>
        </div>
    </div>
</div>

For every admin endpoint you must authenticate or if you have already authenticated you must pass the `Auth-Token` in the header, otherwise you will get back a `401` error in the response.

<pre>
  {
  "error": "401 Unauthorized"
  }
</pre>

## Logout

If you need to logout the authenticated user you can do this by calling the logout API.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
  "https://{host}.bookingbug.com/api/v1/login"
  ```
</pre>
        </div>
    </div>
</div>

The `Auth-Token` in the headers must be the same auth-token from the login call. Once executed this will invalidate the auth-token and kill the session, logging the current user out.
