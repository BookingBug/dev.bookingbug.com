# Event Chains

An event chain describes the events setup in your company. An event can have many occurrences, depending on if the event is setup as a single or regular (recurring). This method will list all of the event chains. 

## List Event Chains

The following parameters below are supported for both the public and admin end-points. 

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
                <td>company_id</td>
                <td>string</td>
                <td>company ID</td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td>page number in pagination</td>
            </tr>
            <tr>
                <td>per_page</td>
                <td>integer</td>
                <td>number of results to show per page</td>
            </tr>
            <tr>
                <td>start_date</td>
                <td>string</td>
                <td>Start Date in ISO-8601 - show chains beginning after this date </td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>End Date in ISO-8601 - show chains ending after this date </td>
            </tr>
            <tr>
                <td>include_disabled</td>
                <td>boolean</td>
                <td>true to include disabled event chains. For admin end-point only</td>
            </tr>
            <tr>
                <td>include_deleted</td>
                <td>boolean</td>
                <td>true to include deleted event chains. For admin end-point only</td>
            </tr>
        </tbody>
    </table>

<pre>GET /api/v1/{company_id}/event_chains</pre>
<pre>GET /api/v1/admin/{company_id}/event_chains</pre>

The cURL call below is a public end-point that will list all the event chains in a company. You can limit the number of event chains to display using the `per_page` parameter.  

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
"https://{host}.bookingbug.com/api/v1/{company_id}/event_chains?page=1&per_page=100"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 1,
  "_embedded": {
    "event_chains": [
      {
        "id": 266575,
        "updated_at": "2016-01-04T14:41:56Z",
        "name": "My Recurring Event",
        "description": "",
        "duration": 60,
        "group": "Fitness",
        "time": "2000-01-01T14:00:00+00:00",
        "long_description": "",
        "capacity_view": 3,
        "start_date": "2016-01-02",
        "spaces": 1,
        "price": 0,
        "max_num_bookings": 1,
        "max_advance_time": "2016-05-31T09:39:34+01:00",
        "min_advance_time": "2016-01-31T09:39:34+00:00",
        "min_advance": 0,
        "min_advance_unit": "day",
        "min_cancel": 2,
        "min_cancel_unit": "day",
        "ticket_type": "multi_space",
        "email_per_ticket": false,
        "questions_per_ticket": false,
        "extra": {},
        "course": false,
        "recurrence_type": "WEEK",
        "company_id": 50667,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50667/event_chains/266575?embed="
          },
          "questions": {
            "href": "https://uk.bookingbug.com/api/v1/50667/questions?detail_group_id=32705"
          },
          "events": {
            "href": "https://uk.bookingbug.com/api/v1/50667/events?event_chain_id=266575{&start_date,end_date,page,per_page,resource_id,person_id,event_group_id,summary,member_level_id,embed,include_non_bookable,modified_since}",
            "templated": true
          },
          "event_group": {
            "href": "https://uk.bookingbug.com/api/v1/50667/event_groups/107608"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50667/event_chains?start_date=2017-01-30&end_date=2017-02-28&page=1&per_page=100"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## Read Event Chain

You can read an indiviual event chain. The cURL example below is a public read. The admin read will show extra information.

<pre>GET /api/v1/{company_id}/event_chains/{id}</pre>
<pre>GET /api/v1/admin/{company_id}/event_chains/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/event_chains/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

## Create Event Chain

You can create a new event chain. The parameters below are supported and you'll need to be authenticated as an administrator to create an event chain. 

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
                <td>name (Required)</td>
                <td>string</td>
                <td>Name of event chain</td>
            </tr>
            <tr>
                <td>description</td>
                <td>string</td>
                <td>Short description</td>
            </tr>
            <tr>
                <td>long_description</td>
                <td>string</td>
                <td>Long description</td>
            </tr>
            <tr>
                <td>spaces</td>
                <td>integer</td>
                <td>Number of spaces event has </td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td>Resource ID</td>
            </tr>
            <tr>
                <td>event_group_id (Required)</td>
                <td>integer</td>
                <td>Event group ID</td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>Person ID</td>
            </tr>
            <tr>
                <td>duration</td>
                <td>integer</td>
                <td>Duration e.g. 60</td>
            </tr>
            <tr>
                <td>datetime</td>
                <td>string</td>
                <td>Date and time in ISO8601 format</td>
            </tr>
            <tr>
                <td>price</td>
                <td>integer</td>
                <td>Price of event</td>
            </tr>
            <tr>
                <td>ticket_type</td>
                <td>string</td>
                <td>e.g multi_space</td>
            </tr>
            <tr>
                <td>address_id (Required)</td>
                <td>integer</td>
                <td>Address ID</td>
            </tr>
            <tr>
                <td>reference</td>
                <td>integer</td>
                <td>Your reference for event</td>
            </tr>
        </tbody>
    </table>

<pre>POST /api/v1/admin/{company_id}/event_chains</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" -H "Cache-Control: no-cache"
  -d'{
    "name": "My Event",
	"description": "some desc",
	"long_description": "some long desc",
	"duration": 60,
	"event_group_id": 6,
	"datetime": "2017-11-04T11:00:00+00:00",
	"spaces": 10,
	"price": 110,
	"address_id": 11

}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/event_chains"
  ```
</pre>
        </div>
        </div>
        </div>

The cURL example above will create a new event chain, which is 60 minutes in duration and will cost £110 and only ten spaces are available. 

## Update Event Chain

You can update an event chain. The same parameters listed above are supported. You must be authenticated as an administrator to perform this call. 

<pre>PUT /api/v1/admin/{company_id}/event_chains/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" -H "Cache-Control: no-cache"
  -d'{
    "name": "My Event",
	"event_group_id": 6,
	"address_id": 11,
	"reference": "ABC123"
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/event_chains/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

The cURL example above updates an event chain. The following three parameters are required `name`, `event_group_id` and `address_id`

### Delete Event Chain

You can delete an event chain. You must be authenticated as an administrator. 

<pre>DELETE /api/v1/admin/{company_id}/event_chains/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/event_chains/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

### Find by reference 

You can query the event chains end-point to find a particular event chain with their reference. You must be authenticated as an administrator.

<pre>GET /api/v1/admin/{company_id}/event_chains/find_by_ref/{reference}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {token-token}"
  -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/event_chains/find_by_ref/abc123"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "id": 10,
    "updated_at": "2017-12-01T11:12:29Z",
    "name": "Single event",
    "duration": 120,
    "group": "Single Event",
    "time": "2017-12-04T11:00:00+00:00",
    "capacity_view": 3,
    "start_date": "2017-12-04",
    "end_date": "2017-12-04",
    "spaces": 10,
    "price": 0,
    "max_num_bookings": 1,
    "min_advance_time": "2017-12-01T11:13:48+00:00",
    "min_advance": 0,
    "min_advance_unit": "day",
    "min_cancel": 5,
    "min_cancel_unit": "day",
    "ticket_type": "multi_space",
    "email_per_ticket": false,
    "questions_per_ticket": false,
    "course": false,
    "recurrence_type": "",
    "company_id": 37008,
    "_embedded": {
        "questions": {
            "company_id": 37008,
            "questions": [],
            "_links": {
                "self": {
                    "href": "https://apidemo.bookingbug.com/api/v1/37008/questions?detail_group_id=18528"
                }
            }
        }
    },
    "_links": {
        "self": {
            "href": "https://apidemo.bookingbug.com/api/v1/admin/37008/event_chains/10"
        },
        "questions": {
            "href": "https://apidemo.bookingbug.com/api/v1/37008/questions?detail_group_id=18528"
        },
        "address": {
            "href": "https://apidemo.bookingbug.com/api/v1/37008/addresses/6"
        },
        "events": {
            "href": "https://apidemo.bookingbug.com/api/v1/admin/37008/event_chains/10/events"
        },
        "event_group": {
            "href": "https://apidemo.bookingbug.com/api/v1/37008/event_groups/48371"
        },
        "edit": {
            "href": "https://apidemo.bookingbug.com/api/v1/admin/37008/event_chains/10/edit"
        },
        "new_booking": {
            "href": "https://apidemo.bookingbug.com/api/v1/admin/37008/event_chains/10/new_booking"
        }
    },
    "reference": "ABC123",
    "deleted": false,
    "template": false,
    "disabled": false
}
  ```
</pre>
        </div>
        </div>
        </div>