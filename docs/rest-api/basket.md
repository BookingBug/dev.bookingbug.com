# Basket

The basket method is the process which enables end-users to make a booking (appointment). The basket acts like a shopping cart where a typical user flow consist of the following:

1. Add items to the basket
2. View full basket or view an item in a basket 
3. Remove an item from the basket
4. Checkout to complete the booking. 

This section will explain how you can add services/events to the basket and checkout.

## Add Item

To be able to add items to the basket we need to check the avalibility for a service or an event, which was explained [here](docs/rest-api/availability).

### Parameters
<table class="pure-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
    
        <tbody>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>service ID</td>
            </tr>
            <tr>
                <td>member_id</td>
                <td>integer</td>
                <td>The members (client) ID the booking is being made against</td>
            </tr>
            <tr>
                <td>event_id</td>
                <td>integer</td>
                <td>The underlying Bookable 'event ID' - that descripbes this bookable service combination</td>
            </tr>
            <tr>
                <td>event_chain_id</td>
                <td>integer</td>
                <td>Event chain ID</td>
            </tr>
            <tr>
                <td>date</td>
                <td>string</td>
                <td>ISO date (YYYY-MM-DD) </td>
            </tr>
            <tr>
                <td>time</td>
                <td>string</td>
                <td>The time of booking in minutes, e.g 10am, 600 minutes </td>
            </tr>
        </tbody>
    </table>

Below is an example of adding a service to the basket. In the header response we will get back an `Auth-Token`. The returned auth token will be used in subsequent basket requests.

<pre>POST /api/v1/{company_id}/basket/add_item</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
        <li><a href="#tab-3">Header Response</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
  -d '{"service_id": "104748", "date": "2017-02-01", "time": "630"}'
"https://{host}.bookingbug.com/api/v1/{company_id}/basket/add_item"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "company_id": 50666,
  "total_price": 0,
  "total_due_price": 0,
  "_embedded": {
    "items": [
      {
        "event_id": 1091849,
        "person_id": 30550,
        "resource_id": 43048,
        "service_id": 104748,
        "num_book": 1,
        "person_name": "Emma",
        "resource_name": "Consultation Room 2",
        "service_name": "Medical Consultation",
        "status": 4,
        "id": "5c733ffc20bc6b24",
        "date": "2017-02-01",
        "time": 630,
        "duration": 45,
        "_embedded": {},
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24"
          },
          "attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach/"
          },
          "add_attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach"
          },
          "del_attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach/"
          },
          "resource": {
            "href": "https://uk.bookingbug.com/api/v1/50666/resources/43048"
          },
          "person": {
            "href": "https://uk.bookingbug.com/api/v1/50666/people/30550"
          },
          "service": {
            "href": "https://uk.bookingbug.com/api/v1/50666/services/104748"
          },
          "company": {
            "href": "https://uk.bookingbug.com/api/v1/company/50666"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket"
    },
    "checkout": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/checkout{?member_id,take_from_wallet}",
      "templated": true
    },
    "items": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket{?id}",
      "templated": true
    },
    "add_item": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}"
    }
  }
}
  ```
</pre>
        </div>
        <div id="tab-3" class="tab__content">
<pre>
```
...
Auth-Token: Boq2lgDNQLAFTmiJQaABRA
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 1511
...
```
</pre>
        </div>
        </div>
        </div>

The `member_id` is optional at `add_item` stage but is required upon checkout. 

### Adding an event

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
  -d '{"event_id": "104748", "event_chain_id": "3432423"}'
"https://{host}.bookingbug.com/api/v1/{company_id}/basket/add_item"
  ```
</pre>
        </div>
        </div>
        </div>

If a space is taken or trying to book the space again, the API will give you the following error. 

<pre>
{
	"status": 409,
	"message": "NoSpaceLeftError",
	"error": "No Space Left",
	"data": {
	"service_id": 104748,
	"name": "Medical Consultation"
	}
}
</pre>

## View Basket

You can view the basket using this method. Notice we are passing in the same `Auth-Token` retervied from the `add_item` in the header here. The response will be identical to the one we get when adding to basket. 

<pre> GET /api/v1/{company_id}/basket </pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: Boq2lgDNQLAFTmiJQaABRA"
"https://{host}.bookingbug.com/api/v1/{company_id}/basket"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "company_id": 50666,
  "total_price": 0,
  "total_due_price": 0,
  "_embedded": {
    "items": [
      {
        "event_id": 1091849,
        "person_id": 30550,
        "resource_id": 43048,
        "service_id": 104748,
        "num_book": 1,
        "person_name": "Emma",
        "resource_name": "Consultation Room 2",
        "service_name": "Medical Consultation",
        "status": 4,
        "id": "5c733ffc20bc6b24",
        "date": "2017-02-01",
        "time": 630,
        "duration": 45,
        "_embedded": {},
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24"
          },
          "attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach/"
          },
          "add_attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach"
          },
          "del_attachment": {
            "href": "https://uk.bookingbug.com/api/v1/50666/basket/5c733ffc20bc6b24/attach/"
          },
          "resource": {
            "href": "https://uk.bookingbug.com/api/v1/50666/resources/43048"
          },
          "person": {
            "href": "https://uk.bookingbug.com/api/v1/50666/people/30550"
          },
          "service": {
            "href": "https://uk.bookingbug.com/api/v1/50666/services/104748"
          },
          "company": {
            "href": "https://uk.bookingbug.com/api/v1/company/50666"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket"
    },
    "checkout": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/checkout{?member_id,take_from_wallet}",
      "templated": true
    },
    "items": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket{?id}",
      "templated": true
    },
    "add_item": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## View Basket Item

If you have more than one items in your basket you can view the basket item. Each item has a basket ID. 

<pre> GET /api/v1/{company_id}/basket/{id} </pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: Boq2lgDNQLAFTmiJQaABRA"
"https://{host}.bookingbug.com/api/v1/{company_id}/basket/5c733ffc20bc6b24"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "event_id": 1091849,
  "person_id": 30550,
  "resource_id": 43048,
  "service_id": 104748,
  "num_book": 1,
  "person_name": "Emma",
  "resource_name": "Consultation Room 2",
  "service_name": "Medical Consultation",
  "status": 4,
  "id": "5c733ffc20bc6b24",
  "date": "2017-02-01",
  "time": 630,
  "duration": 45,
  "_embedded": {},
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/05b620502ca56322"
    },
    "attachment": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/05b620502ca56322/attach/"
    },
    "add_attachment": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/05b620502ca56322/attach"
    },
    "del_attachment": {
      "href": "https://uk.bookingbug.com/api/v1/50666/basket/05b620502ca56322/attach/"
    },
    "resource": {
      "href": "https://uk.bookingbug.com/api/v1/50666/resources/43048"
    },
    "person": {
      "href": "https://uk.bookingbug.com/api/v1/50666/people/30550"
    },
    "service": {
      "href": "https://uk.bookingbug.com/api/v1/50666/services/104748"
    },
    "company": {
      "href": "https://uk.bookingbug.com/api/v1/company/50666"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## Delete Basket Item

You can delete an item from the basket. Basket item ID is required with `DELETE` method.

<pre> DELETE /api/v1/{company_id}/basket/{id} </pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: Boq2lgDNQLAFTmiJQaABRA"
"https://{host}.bookingbug.com/api/v1/{company_id}/basket/5c733ffc20bc6b24"
  ```
</pre>
        </div>

## Checkout

To complete the booking you must checkout the basket before the basket session expires. When an item is added to the basket session it temporarily reserves the space.  

<table class="pure-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
    
        <tbody>
            <tr>
                <td>member_id</td>
                <td>integer</td>
                <td>member ID</td>
            </tr>
            <tr>
                <td>take_from_wallet</td>
                <td>boolean</td>
                <td>Use money stored in wallet (true/false)</td>
            </tr>
            <tr>
                <td>email</td>
                <td>string</td>
                <td>Customer email</td>
            </tr>
            <tr>
                <td>reference</td>
                <td>string</td>
                <td>A custom reference for the booking invoice</td>
            </tr>
            <tr>
                <td>no_notifications</td>
                <td>boolean</td>
                <td>Determines whether or not to send notifications to Customers & Admins </td>
            </tr>
        </tbody>
    </table>

<pre> POST /api/v1/{company_id}/basket/checkout </pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: Boq2lgDNQLAFTmiJQaABRA" 
  -d '{"member_id": "232323", "take_from_wallet": "false"}'
"https://{host}.bookingbug.com/api/v1/{company_id}/basket/checkout"
  ```
</pre>
        </div>

## Using Wallets

Wallets enable your customers to credit their account with real or virtual currency which they can then use to pay for bookings.  To use wallets, you must have online payments setup.

for more information about setting wallets up see [this guide](http://feedback.bookingbug.com/hc/en-gb/articles/204119572-How-to-setup-wallet-credit-that-my-customers-can-buy-)

for more information regarding setting up payments you can take a look at our [payment guides](http://feedback.bookingbug.com/hc/en-gb/sections/201679355-Payments)