# Service Booking
There are two main types of booking that can be done through via the BookingBug platform. These are split into service bookings and event bookings. In this section we will be looking at service bookings.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the REST API it is important to plan out your user flow. Below is a UML Diagram of our standard user flow. Each stage has an action that the user carries out and each stage requires certain API calls.

<img src='https://g.gravizo.com/g?
@startuml;
actor User;
participant "Store Locator" as A;
participant "List Stores" as B;
participant "List Service" as C;
participant "List Available Slots" as D;
participant "Collect User Details" as E;
participant "Confirmation" as F;
User -> A: Start;
activate A;
A -> B: Enter Location;
activate B;
B -> C: Choose Store;
activate C;
C -> D: Choose Service;
activate D;
D -> E: Choose Slot;
activate E;
E -> F: Enter Details;
activate F;
@enduml;
'>

## API Authentication
To make API calls, you will need an `App-Key` and `App-ID`. You will also need an `Auth-Token`to make a booking which can be acquired by logging in as an admin using the API.

[find out how to obtain your API keys here](docs/rest-api/api-keys)

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
curl -X POST -H "App-Key: <app-key>" -H "App-Id: <app-id>" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" -F "email=<admin-email>" -F "password=<admin-password>" "https://<host>.bookingbug.com/api/v1/login"
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

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c1d4330701034bffb1fd)

We will be looking at these stages of the user flow and which API calls to make at each stage.

- Store Locator
- List Stores
- List Service
- List Available Slots
- Collect User Details
- Confirmation

Now that we are Authenticated with the API we can make a request for the company object. This returns the company information and each end point available for that company.

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
curl -X GET -H "App-Id: <app-id>" -H "App-Key: <app-key>" -H "Auth-Token: <auth-token>" -H "Cache-Control: no-cache" "https://<host>.bookingbug.com/api/v1/admin/<company-id>/company"
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
var request = require("request");

var options = { method: 'GET',
  url: 'https://<host>.bookingbug.com/api/v1/admin/<company-id>/company',
  headers: 
   { 'cache-control': 'no-cache',
     'auth-token': '<auth-token>',
     'app-key': '<app-key>',
     'app-id': '<app-id>' } };

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

url = URI("https://<host>.bookingbug.com/api/v1/admin/<company-id>/company")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["app-id"] = '<app-id>'
request["app-key"] = '<app-key>'
request["auth-token"] = '<auth-token>'
request["cache-control"] = 'no-cache'

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
$request->setUrl('https://<host>.bookingbug.com/api/v1/admin/<company-id>/company');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'auth-token' => '<auth-token>',
  'app-key' => '<app-key>',
  'app-id' => '<app-id>'
));

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
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<host>.bookingbug.com/api/v1/admin/<company-id>/company"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("app-id", "<app-id>")
  req.Header.Add("app-key", "<app-key>")
  req.Header.Add("auth-token", "<auth-token>")
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
  "app-id": "<app-id>",
  "app-key": "<app-key>",
  "auth-token": "<auth-token>",
  "cache-control": "no-cache",
]

var request = NSMutableURLRequest(URL: NSURL(string: "https://<host>.bookingbug.com/api/v1/admin/<company-id>/company")!,
                                        cachePolicy: .UseProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.HTTPMethod = "GET"
request.allHTTPHeaderFields = headers

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
HttpResponse<String> response = Unirest.get("https://<host>.bookingbug.com/api/v1/admin/<company-id>/company")
  .header("app-id", "<app-id>")
  .header("app-key", "<app-key>")
  .header("auth-token", "<auth-token>")
  .header("cache-control", "no-cache")
  .asString();
```
</pre>
        </div>
        <div id="tab-8" class="tab__content">
<pre>
```
{
  "id": <company-id>,
  "name": "<company-name>",
  "description": "",
  "address_id": <address-id>,
  "website": "",
  "numeric_widget_id": <numeric-widget-id>,
  "currency_code": "GBP",
  "timezone": "Europe/London",
  "country_code": "gb",
  "live": true,
  "_embedded": {
    "settings": {
      "has_services": true,
      "has_events": true,
      "has_classes": true,
      "payment_tax": 0,
      "currency": "GBP",
      "requires_login": false,
      "has_wallets": false,
      "_links": {
        "self": {
          "href": "https://<host>.bookingbug.com/api/v1/<company-id>/settings"
        }
      }
    }
  },
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/company/<company-id>"
    },
    "settings": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/settings"
    },
    "services": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services"
    },
    "categories": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/categories{/id}",
      "templated": true
    },
    "address": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/addresses/<address-id>"
    },
    "addresses": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/addresses"
    },
    "book": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
      "templated": true
    },
    "named_categories": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/named_categories"
    },
    "resources": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/resources"
    },
    "people": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/people"
    },
    "clinics": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/clinics{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id,person_id}",
      "templated": true
    },
    "events": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/events{?start_date,end_date,page,per_page,resource_id,person_id,event_group_id,event_chain_id,summary,member_level_id,embed,include_non_bookable}",
      "templated": true
    },
    "event_chains": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/event_chains"
    },
    "event_groups": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/event_groups"
    },
    "client_details": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/client_details"
    },
    "packages": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/packages"
    },
    "bulk_purchases": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/bulk_purchases"
    },
    "checkout": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/basket/checkout{?member_id,take_from_wallet}"
    },
    "total": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/purchase_totals/{total_id}",
      "templated": true
    },
    "login": {
      "href": "https://<host>.bookingbug.com/api/v1/login/<company-id>"
    },
    "client": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client{?page,per_page}",
      "templated": true
    },
    "client_by_email": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/client/find_by_email/{email}",
      "templated": true
    },
    "booking_text": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/booking_text"
    },
    "basket": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/basket"
    },
    "days": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/day_data{?month,week,date,edate,location,service_id,event_id,person_id,resource_id}",
      "templated": true
    },
    "times": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/time_data{?service_id,event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone}",
      "templated": true
    },
    "email_password_reset": {
      "href": "https://<host>.bookingbug.com/api/v1/login/<company-id>/email_password_reset"
    },
    "facebook_login": {
      "href": "https://<host>.bookingbug.com/api/v1/login/<company-id>/facebook"
    },
    "new_person": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/people/new{?signup}",
      "templated": true
    },
    "new_resource": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/resources/new",
      "templated": true
    },
    "schedules": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/schedules{?start_date,end_date,page,per_page}",
      "templated": true
    },
    "new_schedule": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/schedules/new",
      "templated": true
    },
    "administrators": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators"
    },
    "new_administrator": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/new",
      "templated": true
    },
    "slots": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/slots{?start_date,end_date,date,resource_id,service_id,person_id,page,per_page}",
      "templated": true
    },
    "new_event_chain": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/event_chains/new",
      "templated": true
    },
    "new_event_group": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/event_groups/new",
      "templated": true
    },
    "calendar_events": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/calendar_events{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id}",
      "templated": true
    },
    "new_service": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/new",
      "templated": true
    },
    "bookings": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/bookings{/id}{?start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,client_id,filter_by_fields,order_by,order_by_reverse}",
      "templated": true
    },
    "queuers": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/queuers{?client_queue_ids}",
      "templated": true
    },
    "client_queues": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client_queues"
    },
    "new_queuer": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/queuers/new",
      "templated": true
    },
    "pusher": {
      "href": "https://<host>.bookingbug.com/api/v1/push/<company-id>/pusher.json"
    },
    "external_bookings": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/external_bookings"
    }
  }
}
```
</pre>
        </div>
    </div>
</div>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/eab0485e5c9fb3054f64)

## Store Locator
The first call you will need to make to the API is to `GET https://<host>.bookingbug.com/api/v1/admin/<company-id>/addresses` to retrieve the company object. This shows the parent company and a list of child companies.

## List Stores
With the list of companies now available, your user can choose which store they want to make the service booking with. Find the store you want to use in the list to access the specific 'company-id' you need to use.

## List Services
Once your user has chosen a location then you can list the services available at that location. This can be done with `GET https://<host>.bookingbug.com/api/v1/admin/<company-id>/services` method. This will return the service object. 

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
curl -X GET -H "App-Id: <app-id>" -H "App-Key: <app-key>" -H "Auth-Token: <auth-token>" -H "Cache-Control: no-cache" "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services"
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
var request = require("request");

var options = { method: 'GET',
  url: 'https://<host>.bookingbug.com/api/v1/admin/<company-id>/services',
  headers: 
   { 'cache-control': 'no-cache',
     'auth-token': '<auth-token>',
     'app-key': '<app-key>',
     'app-id': '<app-id>' } };

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

url = URI("https://<host>.bookingbug.com/api/v1/admin/<company-id>/services")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["app-id"] = '<app-id>'
request["app-key"] = '<app-key>'
request["auth-token"] = '<auth-token>'
request["cache-control"] = 'no-cache'

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
$request->setUrl('https://<host>.bookingbug.com/api/v1/admin/<company-id>/services');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'auth-token' => '<auth-token>',
  'app-key' => '<app-key>',
  'app-id' => '<app-id>'
));

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
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("app-id", "<app-id>")
  req.Header.Add("app-key", "<app-key>")
  req.Header.Add("auth-token", "<auth-token>")
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
  "app-id": "<app-id>",
  "app-key": "<app-key>",
  "auth-token": "<auth-token>",
  "cache-control": "no-cache"
]

var request = NSMutableURLRequest(URL: NSURL(string: "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services")!,
                                        cachePolicy: .UseProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.HTTPMethod = "GET"
request.allHTTPHeaderFields = headers

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
HttpResponse<String> response = Unirest.get("https://<host>.bookingbug.com/api/v1/admin/<company-id>/services")
  .header("app-id", "<app-id>")
  .header("app-key", "<app-key>")
  .header("auth-token", "<auth-token>")
  .header("cache-control", "no-cache")
  .asString();
```
</pre>
        </div>
        <div id="tab-8" class="tab__content">
<pre>
```
{
  "total_entries": 3,
  "_embedded": {
    "services": [
      {
        "id": <service-id>,
        "name": "Example Service",
        "durations": [
          60
        ],
        "prices": [
          0
        ],
        "detail_group_id": <detail-group-id>,
        "booking_time_step": 60,
        "is_event_group": false,
        "type": "service",
        "deleted": false,
        "company_id": <company-id>,
        "duration_unit": "minute",
        "min_advance_period": 0,
        "max_advance_period": 5184000,
        "min_cancel_period": 86400,
        "booking_type_public": "booking",
        "min_bookings": 1,
        "max_bookings": 1,
        "order": <service-id>,
        "child_level_service": true,
        "_links": {
          "self": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>"
          },
          "items": {
            "href": "https://eu1.bookingbug.com/api/v1/admin/<company-id>/items?service_id=<service-id>"
          },
          "questions": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/questions?detail_group_id=18750"
          },
          "days": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/day_data?service_id=<service-id>{&month,week,date,edate,location,event_id,person_id,resource_id}",
            "templated": true
          },
          "times": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/time_data?service_id=<service-id>{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone}",
            "templated": true
          },
          "book": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/basket/add_item?service_id=<service-id>{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
            "templated": true
          },
          "all_children": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/services/<service-id>/all_children"
          },
          "company": {
            "href": "https://eu1.bookingbug.com/api/v1/company/<company-id>"
          },
          "edit": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>/edit"
          },
          "new_booking": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>/new_booking"
          }
        },
        "disabled": false,
        "queuing_disabled": true
      },
      {
        "id": <service-id>,
        "name": "Example Service",
        "durations": [
          60
        ],
        "prices": [
          0
        ],
        "detail_group_id": <detail-group-id>,
        "booking_time_step": 60,
        "is_event_group": false,
        "type": "service",
        "deleted": false,
        "company_id": <company-id>,
        "duration_unit": "minute",
        "min_advance_period": 0,
        "max_advance_period": 5184000,
        "min_cancel_period": 86400,
        "booking_type_public": "booking",
        "min_bookings": 1,
        "max_bookings": 1,
        "order": <service-id>,
        "child_level_service": true,
        "_links": {
          "self": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>"
          },
          "items": {
            "href": "https://eu1.bookingbug.com/api/v1/admin/<company-id>/items?service_id=<service-id>"
          },
          "questions": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/questions?detail_group_id=18750"
          },
          "days": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/day_data?service_id=<service-id>{&month,week,date,edate,location,event_id,person_id,resource_id}",
            "templated": true
          },
          "times": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/time_data?service_id=<service-id>{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone}",
            "templated": true
          },
          "book": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/basket/add_item?service_id=<service-id>{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
            "templated": true
          },
          "all_children": {
            "href": "https://eu1.bookingbug.com/api/v1/<company-id>/services/<service-id>/all_children"
          },
          "company": {
            "href": "https://eu1.bookingbug.com/api/v1/company/<company-id>"
          },
          "edit": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>/edit"
          },
          "new_booking": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/<service-id>/new_booking"
          }
        },
        "disabled": false,
        "queuing_disabled": true
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services"
    },
    "new": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/services/new",
      "templated": true
    }
  }
}
```
</pre>
        </div>
    </div>
</div>

## List Available Slots
Listing the available slots uses the `GET https://<host>.bookingbug.com/api/v1/<company_id>/services/time_data` API method. You can then pass in different parameters such as your time frame on the end of the API call for example `https://<host>.bookingbug.com/api/v1/<company_id>/services?service_id=<service_id>&date=YYYY-MM-DD&end_date=YYYY-MM-DD&duration=60`
You can also pass in a `person_id` or a `resource_id`to receive information about the staff and resources linked to the services, respectively.

## Collect User Details
You will need to query the event chain end point to pull in the full details regarding the event As per the below code example

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
curl -X GET -H "App-Id: <app-id>" -H "App-Key: <app-key>" -H "Auth-Token: <auth-token>" -H "Cache-Control: no-cache" "https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>"
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
var request = require("request");

var options = { method: 'GET',
  url: 'https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>',
  headers: 
   { 'cache-control': 'no-cache',
     'auth-token': '<auth-token>',
     'app-key': '<app-key>',
     'app-id': '<app-id>' } };

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

url = URI("https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["app-id"] = '<app-id>'
request["app-key"] = '<app-key>'
request["auth-token"] = '<auth-token>'
request["cache-control"] = 'no-cache'

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
$request->setUrl('https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'auth-token' => '<auth-token>',
  'app-key' => '<app-key>',
  'app-id' => '<app-id>'
));

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
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("app-id", "<app-id>")
  req.Header.Add("app-key", "<app-key>")
  req.Header.Add("auth-token", "<auth-token>")
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
  "app-id": "<app-id>",
  "app-key": "<app-key>",
  "auth-token": "<auth-token>",
  "cache-control": "no-cache"
]

var request = NSMutableURLRequest(URL: NSURL(string: "https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>")!,
                                        cachePolicy: .UseProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.HTTPMethod = "GET"
request.allHTTPHeaderFields = headers

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
HttpResponse<String> response = Unirest.get("https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>")
  .header("app-id", "<app-id>")
  .header("app-key", "<app-key>")
  .header("auth-token", "<auth-token>")
  .header("cache-control", "no-cache")
  .asString();
```
</pre>
        </div>
        <div id="tab-8" class="tab__content">
<pre>
```
{
  "id": <event-chain-id>,
  "name": "Sample Event",
  "description": "",
  "duration": 120,
  "group": "Course Group 1",
  "time": "2000-01-01T15:00:00+00:00",
  "long_description": "",
  "capacity_view": 3,
  "start_date": "2016-07-20",
  "end_date": "2016-07-20",
  "spaces": 1,
  "price": 0,
  "max_num_bookings": 1,
  "min_advance_time": "2016-07-08T10:50:01+00:00",
  "min_advance": 0,
  "min_advance_unit": "day",
  "min_cancel": 5,
  "min_cancel_unit": "day",
  "ticket_type": "multi_space",
  "email_per_ticket": false,
  "questions_per_ticket": false,
  "course": false,
  "recurrence_type": "",
  "company_id": <company-id>,
  "_embedded": {
    "questions": {
      "company_id": <company-id>,
      "questions": [],
      "_links": {
        "self": {
          "href": "/<company-id>/questions?detail_group_id=<detail-group-id>"
        }
      }
    }
  },
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>"
    },
    "questions": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/questions?detail_group_id=<detail-group-id>"
    },
    "events": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/events?event_chain_id=<event-chain-id>{&start_date,end_date,page,per_page,resource_id,person_id,event_group_id,summary,member_level_id,embed,include_non_bookable}"
    },
    "event_group": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/event_groups/<event-groups-id>"
    }
  }
}
```
</pre>
        </div>
    </div>
</div>


Within that response you are given the end point for the questions related to your event `https://<host>.bookingbug.com/api/v1/<company-id>/questions?detail_group_id=<detail-group-id>`. This returns the questions that relate to that particular event. For example, if we were to be creating a booking appointment for a financial event, then at this point we could ask if the user has a standard or business account or if they have already started the process of finding a mortgage with other financial providers.

In response you will get a object back with an array of questions
```
{
  "company_id": <company-id>,
  "questions": [<questions-array>],
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/questions?detail_group_id=<detail-group-id>"
    }
  }
}
```

Next you want to either create a new client or retrieve an existing client. In the response from get company `https://<host>.bookingbug.com/api/v1/<company-id>/company` you will find endpoints for working with the companies clients.

### GET existing clients
```
"client": {
  "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client{?page,per_page}",
  "templated": true
}
```

Find client by email
```
"client_by_email": {
  "href": "https://<host>.bookingbug.com/api/v1/<company-id>/client/find_by_email/{email}",
  "templated": true
}
```

### POST Client
You can also create or edit a user using `POST https://<host>.bookingbug.com/api/v1/<company_id>/client` Pass in the client's information (`first_name`, `last_name`, `email`) in the body of your API call and this will either create or update a client's information depending on what information you entered.

The following entries can be posted to the client end point.

```
  "first_name": "<first-name>",
  "last_name": "<last-name>",
  "email": "<email>",
  "country": "United Kingdom",
  "files": [],
  "answers": [],
  "phone_prefix": "44",
  "mobile_prefix": "44",
```

If you've asked the user questions then at this point you want to pass those in to the POST client end point

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
curl -X POST -H "App-Id: <app-id>" -H "App-Key: <app-key>" -H "Auth-Token: <auth-token>" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" -F "first_name=<first-name>" -F "last_name=<last-name>" -F "email=<email>" "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client"
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
var request = require("request");

var options = { method: 'POST',
  url: 'https://<host>.bookingbug.com/api/v1/admin/<company-id>/client',
  headers: 
   { 'cache-control': 'no-cache',
     'auth-token': '<auth-token>',
     'app-key': '<app-key>',
     'app-id': '<app-id>',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: 
   { first_name: '<first-name>',
     last_name: '<last-name>',
     email: '<email>' } };

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

url = URI("https://<host>.bookingbug.com/api/v1/admin/<company-id>/client")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'multipart/form-data; boundary=---011000010111000001101001'
request["app-id"] = '<app-id>'
request["app-key"] = '<app-key>'
request["auth-token"] = '<auth-token>'
request["cache-control"] = 'no-cache'
request.body = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"first_name\"\r\n\r\n<first-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"last_name\"\r\n\r\n<last-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<email>\r\n-----011000010111000001101001--"

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
$request->setUrl('https://<host>.bookingbug.com/api/v1/admin/<company-id>/client');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'auth-token' => '<auth-token>',
  'app-key' => '<app-key>',
  'app-id' => '<app-id>',
  'content-type' => 'multipart/form-data; boundary=---011000010111000001101001'
));

$request->setBody('-----011000010111000001101001
Content-Disposition: form-data; name="first_name"

<first-name>
-----011000010111000001101001
Content-Disposition: form-data; name="last_name"

<last-name>
-----011000010111000001101001
Content-Disposition: form-data; name="email"

<email>
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

  url := "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client"

  payload := strings.NewReader("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"first_name\"\r\n\r\n<first-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"last_name\"\r\n\r\n<<last-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<email>\r\n-----011000010111000001101001--")

  req, _ := http.NewRequest("POST", url, payload)

  req.Header.Add("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  req.Header.Add("app-id", "<app-id>")
  req.Header.Add("app-key", "<app-key>")
  req.Header.Add("auth-token", "<auth-token>")
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
  "app-id": "<app-id>",
  "app-key": "<app-key>",
  "auth-token": "<auth-token>",
  "cache-control": "no-cache"
]
let parameters = [
  [
    "name": "first_name",
    "value": "<first-name>"
  ],
  [
    "name": "last_name",
    "value": "<last-name>"
  ],
  [
    "name": "email",
    "value": "<email>"
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

var request = NSMutableURLRequest(URL: NSURL(string: "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client")!,
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
HttpResponse<String> response = Unirest.post("https://<host>.bookingbug.com/api/v1/admin/<company-id>/client")
  .header("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .header("app-id", "<app-id>")
  .header("app-key", "<app-key>")
  .header("auth-token", "<auth-token>")
  .header("cache-control", "no-cache")
  .body("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"first_name\"\r\n\r\n<first-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"last_name\"\r\n\r\n<last-name>\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n<email>\r\n-----011000010111000001101001--")
  .asString();
```
</pre>
        </div>
        <div id="tab-8" class="tab__content">
<pre>
```
{
  "first_name": "<first-name>",
  "last_name": "<last-name>",
  "email": "<email>",
  "country": "United Kingdom",
  "id": <member-id>,
  "member_type": 2,
  "files": [],
  "answers": [],
  "deleted": false,
  "phone_prefix": "44",
  "mobile_prefix": "44",
  "q": {},
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client/29229"
    },
    "bookings": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/bookings{/id}?client_id=29229{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse}",
      "templated": true
    },
    "pre_paid_bookings": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/members/29229/pre_paid_bookings{?include_invalid,event_id}",
      "templated": true
    },
    "questions": {
      "href": "https://<host>.bookingbug.com/api/v1/<company-id>/client_details"
    },
    "edit": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/client/29229/edit"
    }
  }
}
```
</pre>
        </div>
    </div>
</div>

## Confirmation
Once you have gathered the required information to create an event booking, you can add the item to their basket. This is achieved with a post request to the book endpoint

```
https://<host>.bookingbug.com/api/v1/<company-id>/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}
```

You will need to pass the required information about the event into the body of the API call. Once you are ready to put the booking through the system you will need to call

```
https://<host>.bookingbug.com/api/v1/<company-id>/basket/checkout{?member_id,take_from_wallet}
```

> `member_id = client_id`
