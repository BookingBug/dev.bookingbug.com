# Listing Items 

The REST API enables you to list items you've configured in your Bookingbug platform. These items are visible to your end-users, enabling them to select from the various services you provide as a business. 

## Example
Assume you're a owner of a Pet store offering in-store serivces that can be booked online. 

<table class="pure-table">
        <thead>
            <tr>
                <th>Services</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Staff</th>
                <th>Price</th>
            </tr>
        </thead>
    
        <tbody>
            <tr>
                <td>Nutrition Consultation</td>
                <td>45 mins</td>
                <td>Consultation rooms 1 &amp; 2</td>
                <td>only Barry and Kate can provide this service</td>
                <td>FREE</td>
            </tr>
    
            <tr>
                <td>Pet Grooming</td>
                <td>1 hour</td>
                <td>Consultation room 2</td>
                <td>Luke and Ed</td>
                <td>£20</td>
            </tr>
    
            <tr>
                <td>Microchipping</td>
                <td>30 mins</td>
                <td>Consultation room 1</td>
                <td>Barry</td>
                <td>£15</td>
            </tr>
            <tr>
                <td>Medical Consultation</td>
                <td>45 mins</td>
                <td>Consultation room 3</td>
                <td>Everyone</td>
                <td>£30</td>
            </tr>
        </tbody>
    </table>

## Staff

You can list the staff (people) members configured for a company. These are people who will carry out the services.

<pre>GET /api/v1/{company_id}/people</pre>
<pre>GET /api/v1/{company_id}/people/{people_id}</pre>


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
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/people"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "_embedded": {
    "people": [
      {
        "id": 30465,
        "name": "Luke",
        "description": "",
        "type": "person",
        "deleted": false,
        "disabled": false,
        "company_id": 50579,
        "order": 30465,
        "phone_prefix": "44",
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50579/people/30465"
          },
          "items": {
            "href": "https://uk.bookingbug.com/api/v1/50579/items?person_id=30465"
          },
          "enabled_services": [
            {
              "title": "Pet Grooming",
              "href": "https://uk.bookingbug.com/api/v1/50579/services/104387"
            },
            {
              "title": "Medical Consultation",
              "href": "https://uk.bookingbug.com/api/v1/50579/services/104514"
            }
          ]
        }
      },
      ...
      ]
      ...
      }
  ```
</pre>
        </div>
        </div>
        </div>

## Service 

You can list the services configured for a company. As per our exampple above there are four services setup that the pet store provides.

<pre>GET /api/v1/{company_id}/services</pre>
<pre>GET /api/v1/{company_id}/services/{service_id}</pre>

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
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/services"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 4,
  "_embedded": {
    "services": [
      {
        "id": 104513,
        "name": "Microchipping",
        "description": "Microchipping",
        "durations": [
          30
        ],
        "prices": [
          1500
        ],
        "detail_group_id": 32705,
        "extra": {},
        "booking_time_step": 30,
        "is_event_group": false,
        "type": "service",
        "deleted": false,
        "company_id": 50579,
        "min_advance_period": 0,
        "max_advance_period": 5184000,
        "min_cancel_period": 86400,
        "booking_type_public": "booking",
        "booking_type_member": "booking",
        "min_bookings": 1,
        "max_bookings": 1,
        "spaces": 1,
        "order": 104513,
        "child_level_service": false,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50579/services/104513"
          },
          "items": {
            "href": "https://uk.bookingbug.com/api/v1/50579/items?service_id=104513"
          },
          "questions": {
            "href": "https://uk.bookingbug.com/api/v1/50579/questions?detail_group_id=32705"
          },
          "days": {
            "href": "https://uk.bookingbug.com/api/v1/50579/day_data?service_id=104513{&month,week,date,edate,location,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
            "templated": true
          },
          "times": {
            "href": "https://uk.bookingbug.com/api/v1/50579/time_data?service_id=104513{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
            "templated": true
          },
          "book": {
            "href": "https://uk.bookingbug.com/api/v1/50579/basket/add_item?service_id=104513{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
            "templated": true
          },
          "all_children": {
            "href": "https://uk.bookingbug.com/api/v1/50579/services/104513/all_children"
          },
          "company": {
            "href": "https://uk.bookingbug.com/api/v1/company/50579"
          }
        }
      },
      ...
      ]
      ...
      }
  ```
</pre>
        </div>
        </div>
        </div>

## Resource 

You can list resources configured for a company. Resources are physical bookable items such as meeting rooms, event halls, tennis courts etc. 

<pre>GET /api/v1/{company_id}/resources</pre>
<pre>GET /api/v1/{company_id}/resources/{resource_id}</pre>

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
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/services"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 2,
  "_embedded": {
    "resources": [
      {
        "id": 42987,
        "name": "Consultation Room 2",
        "description": "Consultation Room 2",
        "type": "resource",
        "deleted": false,
        "disabled": false,
        "company_id": 50579,
        "order": 42987,
        "address_id": 52328,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50579/resources/42987"
          },
          "items": {
            "href": "https://uk.bookingbug.com/api/v1/50579/items?resource_id=42987"
          },
          "address": {
            "href": "https://uk.bookingbug.com/api/v1/50579/addresses/52328"
          }
        }
      },
      ...
      ]
      ...
      }
  ```
</pre>
        </div>
        </div>
        </div>

## Client

You can list the clients (customers) registered against your company. Listing all clients requires `admin` permission.

<pre>GET /api/v1/admin/{company_id}/client</pre>
<pre>GET /api/v1/admin/{company_id}/client/{client_id}</pre>

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
  -H "Cache-Control: no-cache" -H "Auth-Token: {auth-token}"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 33,
  "_embedded": {
    "clients": [
      {
        "first_name": "Jamie",
        "last_name": "Oliver",
        "email": "j.oliver@test.com",
        "country": "United Kingdom",
        "id": 2897097,
        "member_type": 1,
        "reference": "",
        "files": [],
        "answers": [],
        "deleted": false,
        "phone_prefix": "44",
        "mobile_prefix": "44",
        "default_company_id": 50666,
        "q": {},
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/admin/50579/client/2897097"
          },
          "bookings": {
            "href": "https://uk.bookingbug.com/api/v1/admin/50579/bookings{/id}?client_id=2897097{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
            "templated": true
          },
          "pre_paid_bookings": {
            "href": "https://uk.bookingbug.com/api/v1/50579/members/2897097/pre_paid_bookings{?include_invalid,event_id}",
            "templated": true
          },
          "questions": {
            "href": "https://uk.bookingbug.com/api/v1/50579/client_details"
          },
          "edit": {
            "href": "https://uk.bookingbug.com/api/v1/admin/50579/client/2897097/edit"
          }
        }
      },
      ...
      ]
      ...
      }
  ```
</pre>
        </div>
        </div>
        </div>

### find by email

You can query the client end-point to find a particular customer with their email address.

<pre>GET /api/v1/{company_id}/client/find_by_email/{email}</pre>

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
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/client/find_by_email/j.oliver@test.com"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "first_name": "Jamie",
  "last_name": "Oliver",
  "email": "j.oliver@test.com",
  "country": "United Kingdom",
  "phone_prefix": "44",
  "mobile_prefix": "44",
  "id": 2897097,
  "answers": [],
  "deleted": false,
  "notifications": {},
  "client_type": "Member",
  "default_company_id": 50666,
  "reference": "",
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50579/client/2897097"
    },
    "questions": {
      "href": "https://uk.bookingbug.com/api/v1/50579/client_details"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>