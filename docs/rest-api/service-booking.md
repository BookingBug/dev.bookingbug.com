# Service Booking
There are two main types of booking that can be done through via the BookingBug platform. These are split into service bookings and event bookings. In this section we will be looking at service bookings.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the REST API it is important to plan out your user flow. Below is a UML Diagram of our standard user flow. Each stage has an action that the user carries out and each stage requires certain API calls.

<img src='http://g.gravizo.com/g?
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
Once your user has chosen a location then you can list the services available at that location. This can be done with `GET https://<host>.bookingbug.com/api/v1/<company_id>/services` method. This will return the service object. 

## List Available Slots
Listing the available slots uses the `GET https://<host>.bookingbug.com/api/v1/<company_id>/services/time_data` API method. You can then pass in different parameters such as your time frame on the end of the API call for example `https://<host>.bookingbug.com/api/v1/<company_id>/services?service_id=<service_id>&date=YYYY-MM-DD&end_date=YYYY-MM-DD&duration=60`
You can also pass in a `person_id` or a `resource_id`to receive information about the staff and resources linked to the services, respectively.

## Collect User Details
This is the point where your user would enter their details before booking the appointment. You will need two API calls at this stage.

The First call is `GET https://<host>.bookingbug.com/api/v1/<company_id>/services?service_id=<service_id>/questions` This returns the questions that relate to that particular service. For example, if we were to be creating a booking appointment for financial services, then at this point we could ask if the user has a standard or business account or if they have already started the process of finding a mortgage with other financial providers.

The Second call is `GET https://<host>.bookingbug.com/api/v1/<company_id>/client_details` As well as returning the 'member_id' that you will need to create a booking, this also returns the default client details you may need to collect, such as age, first name, last name, email, phone number, etc.

You can also create or edit a user using `POST https://<host>.bookingbug.com/api/v1/<company_id>/client` Pass in the client's information (first_name, last_name, email, etc.) in the body of your API call and this will either create or update a client's information depending on what information you entered.

## Creating the Booking
Once you have gathered to required information to create a service booking, you can add the item to their basket. This is achieved with `POST https://<host>.bookingbug.com/api/v1/<company_id>/basket/add_item?service_id=<service_id>` You will need to enter the required information about the service into the body of the API call.

To check if the item was successfully added to the basket, you can call `GET https://<host>.bookingbug.com/api/v1/<company_id>/basket`

Once you are ready to put the booking through the system you will need to call `POST https://<host>.bookingbug.com/api/v1/<company_id>/basket/checkout` This will need the service information and the client information entered in the body to be successful. Once this is done, your booking is complete.
