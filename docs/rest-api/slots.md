# Slots

Slot is generally referred to a space in your business/company calendar, however in the REST API, slot end-point is used to check for a booked space. You can retrieve a list of booked slots. A range of date is required or just a single date. 

## List Slots

You can list all the booked slots for a company. You can filter the list with the parameters listed below.

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
                <td>integer</td>
                <td>company ID</td>
            </tr>
            <tr>
                <td>start_date</td>
                <td>string</td>
                <td>Start date to search slots from (ISO-8601 - YYYY-MM-DD), required if no single date</td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>End date to search slots from (ISO-8601 - YYYY-MM-DD), required if no single date</td>
            </tr>
            <tr>
                <td>date</td>
                <td>string</td>
                <td>Single date (ISO-8601 - YYYY-MM-DD), required if no start/end date</td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td>Optionally filter by a single resource id </td>
            </tr>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>Optionally filter by a single service id </td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>Optionally filter by a single person id </td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td> 1 (page number for to filter through pagination) </td>
            </tr>
            <tr>
                <td>per_page</td>
                <td>integer</td>
                <td>100 (number of results to return per page) </td>
            </tr>
        </tbody>
    </table>

<pre>GET /api/v1/admin/{company_id}/slots</pre>

Below is a cURL example on how to retrieve slots for given date. This is an admin API call so you'll need to authenticate and provide the auth-token in the headers. 

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots?date=2017-02-27 \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 1,
  "_embedded": {
    "slots": [
      {
        "id": 16938544,
        "datetime": "2017-02-27T17:00:00+00:00",
        "full_describe": "Swimming lessons",
        "status": 4,
        "spaces_booked": 1,
        "spaces_reserved": 0,
        "spaces_blocked": 0,
        "num_spaces": 50,
        "spaces_wait": 0,
        "session_id": 274101,
        "service_id": 107615,
        "duration": 60,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/admin/50666/slots/16938544"
          },
          "bookings": {
            "href": "https://uk.bookingbug.com/api/v1/admin/50666/bookings?slot_id=16938544"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/admin/50666/slots?date=2017-02-27&page=1&per_page=100"
    },
    "next": {
      "href": "https://uk.bookingbug.com/api/v1/admin/50666/slots?date=2017-02-27&page=0&per_page=100"
    },
    "previous": {
      "href": "https://uk.bookingbug.com/api/v1/admin/50666/slots?date=2017-02-27&page=0&per_page=100"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div> 

## Create Slot

You can block a slot in your calendar. The parameters below are supported. 

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
                <td>integer</td>
                <td>company ID</td>
            </tr>
            <tr>
                <td>start_time</td>
                <td>string</td>
                <td>Start time (example format: 2001-02-03T17:05:06), required</td>
            </tr>
            <tr>
                <td>end_time</td>
                <td>string</td>
                <td>End time (example format: 2001-02-03T17:05:06), required if not an all day booking</td>
            </tr>
            <tr>
                <td>allday</td>
                <td>string</td>
                <td>All day block - true/false</td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>Person ID</td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td>Resource ID </td>
            </tr>
        </tbody>
    </table>

<pre>POST /api/v1/admin/{company_id}/slots</pre>

Below is a cURL example on how to create a slot for given datetime and person (staff). This is an admin API call so you'll need to authenticate and provide the auth-token in the headers. 

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' 
  -d '{
      "start_time": "2017-09-07T11:00:00",
      "end_time": "2017-09-07T12:00:00",
      "person_id": 12434
}'
  ```
</pre>
        </div>

## Read Slot

You can read a slot. 

<pre>GET /api/v1/admin/{company_id}/slots/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>

## Update Slot

You can update a slot. `start_time` and `end_time` paramaters are required. Example format: 2001-02-03T17:05:06 

<pre>PUT /api/v1/admin/{company_id}/slots/{id}</pre>

Below is a cURL example on how to update a slot. This is an admin API call so you'll need to authenticate and provide the auth-token in the headers. 

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' 
  -d '{
      "start_time": "2017-09-07T11:00:00",
      "end_time": "2017-09-07T12:00:00",
      "person_id": 12434
}'
  ```
</pre>
        </div>

## Delete Slot

You can delete a slot. Deleting the slot will free up the space in the calendar. 

<pre>DELETE /api/v1/admin/{company_id}/slots/{id}</pre>

Below is a cURL example on how to delete (cancel) a slot. This is an admin API call so you'll need to authenticate and provide the auth-token in the headers. 

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>

