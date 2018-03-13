# Client

The client API enables you to list, create, update and query the clients (customers) registered against your company. You must be authenticated as an administrator to perform the API calls for client. Please note that the client API endpoint is a protected Business Entity and therefore only available via Admin API.

## Create Client

The API enables an admin to create a client (customer). The following parameters listed below are supported.

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
            <td>first_name</td>
            <td>string</td>
            <td>First Name of the client</td>
        </tr>
        <tr>
            <td>last_name</td>
            <td>string</td>
            <td>Last name of the client</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>email address of the client</td>
        </tr>
        <tr>
            <td>mobile_prefix</td>
            <td>string</td>
            <td>Mobile prefix e.g. +44</td>
        </tr>
        <tr>
            <td>mobile</td>
            <td>string</td>
            <td>Mobile number of the client</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>string</td>
            <td>Phone number of the client </td>
        </tr>
        <tr>
            <td>address1</td>
            <td>string</td>
            <td>Address line 1</td>
        </tr>
        <tr>
            <td>address2</td>
            <td>string</td>
            <td>Address line 2</td>
        </tr>
        <tr>
            <td>address3</td>
            <td>string</td>
            <td>Address line 3</td>
        </tr>
        <tr>
            <td>address4</td>
            <td>string</td>
            <td>Address line 4 </td>
        </tr>
        <tr>
            <td>address5</td>
            <td>string</td>
            <td>Address line 5</td>
        </tr>
        <tr>
            <td>postcode</td>
            <td>string</td>
            <td>Postcode </td>
        </tr>
        <tr>
            <td>country</td>
            <td>string</td>
            <td>Name of country e.g. United Kingdom</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>string</td>
            <td>Client's Reference e.g. external reference</td>
        </tr>
        <tr>
            <td>join_date</td>
            <td>string</td>
            <td>Client's joining date in ISO-8601 </td>
        </tr>
        <tr>
            <td>member_type</td>
            <td>integer</td>
            <td>Type of member e.g. 1 = contact 2= member</td>
        </tr>
        <tr>
            <td>send_email</td>
            <td>boolean</td>
            <td>true/false</td>
        </tr>
        <tr>
            <td>member_level_id</td>
            <td>integer</td>
            <td>Membership level id the client belongs to</td>
        </tr>
        <tr>
            <td>default_company_id</td>
            <td>integer</td>
            <td>The default company the client should belong to</td>
        </tr>
        <tr>
            <td>time_zone</td>
            <td>string</td>
            <td>Time zone of the client</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/client</pre>  

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
  -d '{
    "first_name": "Test Name",
    "last_name": "Test surname",
    "email": "test@test.com",
    "mobile_prefix": "+44",
    "mobile": "07912345678",
    "phone": "02032323232",
    "member_type": "2"
  }'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client"
  ```
</pre>
        </div>
        </div>
        </div>  

Above is an example cURL call creating a new client. If you would like to update the same client, the method will be `PUT` and you will need to append the client ID in the URL.

## List Clients

<pre>GET /api/v1/admin/{company_id}/client</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
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

Above is an example cURL call for listing all the clients. By default it will list 30 clients per page. You can use the `per_page` and `page` params for pagination.

## Read Client

<pre>GET /api/v1/admin/{company_id}/client/{client_id}</pre>   

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

The above cURL call is an example of reading a client.

## Delete Client

You can delete a client.

<pre>DELETE /api/v1/admin/{company_id}/client/{client_id}</pre>   

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

## Disable/Enable Client

You can disable/enable a client using the API. The following parameters listed below are supported. You only need to specify either the ID or the email of a client in the body payload.

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
            <td>Id</td>
            <td>integer</td>
            <td>Client ID</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>Client email</td>
        </tr>
        <tr>
            <td>disable</td>
            <td>boolean</td>
            <td>true/false</td>
        </tr>
        </tbody>
        </table>

<pre>PUT /api/v1/{company_id}/client/</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
  -d '{ "id": 123456, "disable": true}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client"
  ```
</pre>
        </div>
        </div>
        </div>

## Find by email

You can query the client end-point to find a particular customer with their email address. You must be authenticated as an administrator.

<pre>GET /api/v1/admin/{company_id}/client/find_by_email/{email}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/find_by_email/j.oliver@test.com"
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

### Find by reference

You can query the client end-point to find a particular customer with their reference. You must be authenticated as an administrator.

<pre>GET /api/v1/admin/{company_id}/client/find_by_ref/{reference}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/find_by_ref/123456"
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
