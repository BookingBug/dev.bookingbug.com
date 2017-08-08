# Members

Members in Bookingbug is refered to as clients (your consumers). There are two types of clients.

1. Contact 
2. Member 

The contact type is like a guest, and does not need an account. The member has an account, where they can login to view their upcoming/past bookings, edit personal details and view invoices. A member needs to authenticate to access thier account. 

## Authenticate Member

The authentication process is the same as explained under the [Authentication](docs/rest-api/authentication) section. Auth Token must be supplied to all subsequent member API calls.

## View Member

Once authenticated you can view the members details with the following method.

<pre> GET /api/v1/{company_id}/members/{member_id} </pre>

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
  -H "Auth-Token: {auth-token}"
"https://{host}.bookingbug.com/api/v1/{company_id}/members/{member_id}"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "id": 3016159,
  "name": "Test Member",
  "first_name": "Test",
  "last_name": "Member",
  "comp_ref": "",
  "client_type": "Member",
  "email": "t.member@test.com",
  "address1": "",
  "address2": "",
  "address3": "",
  "address4": "",
  "address5": "",
  "postcode": "",
  "country": "United Kingdom",
  "phone": "",
  "phone_prefix": "44",
  "mobile": "",
  "mobile_prefix": "44",
  "auth_token": "{auth-token}",
  "path": "https://uk.bookingbug.com/api/v1",
  "company_id": 50579,
  "has_active_wallet": false,
  "default_company_id": 50666,
  "has_wallet": false,
  "answers": [],
  "_embedded": {
    "bookings": []
  },
  ...
  }
   }
  ```
</pre>
        </div>
        </div>
        </div>

## Edit Member

Members can update their personal details. The following parameters are available.

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
                <td>first name of the member</td>
            </tr>
            <tr>
                <td>last_name</td>
                <td>string</td>
                <td>Last name of the member</td>
            </tr>
            <tr>
                <td>email</td>
                <td>string</td>
                <td>email address of the member</td>
            </tr>
            <tr>
                <td>mobile</td>
                <td>string</td>
                <td>Mobile number of the member</td>
            </tr>
            <tr>
                <td>address1</td>
                <td>string</td>
                <td>address line 1 </td>
            </tr>
            <tr>
                <td>address2</td>
                <td>string</td>
                <td>address line 2 </td>
            </tr>
            <tr>
                <td>address3</td>
                <td>string</td>
                <td>address line 3 </td>
            </tr>
            <tr>
                <td>address4</td>
                <td>string</td>
                <td>address line 4 </td>
            </tr>
            <tr>
                <td>address5</td>
                <td>string</td>
                <td>address line 5 </td>
            </tr>
            <tr>
                <td>postcode</td>
                <td>string</td>
                <td>Postcode</td>
            </tr>
            <tr>
                <td>counrty</td>
                <td>string</td>
                <td>Country </td>
            </tr>
        </tbody>
    </table>

<pre> PUT /api/v1/{company_id}/members/{member_id} </pre>

Below is a cURL call updating first and last name of a member. 

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Auth-token: {auth-token}"
  -H "Cache-Control: no-cache"
  -d '{
  "first_name": "Bookingbug", 
  "last_name": "User"
  }'
"https://{host}.bookingbug.com/api/v1/{company_id}/members/{member_id}"
  ```
</pre>
        </div>
        </div>
        </div>

## View Bookings

A member can view thier bookings using the following API method.

<pre>GET /api/vi/{company_id}/members/{member_id}/bookings</pre>

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
                <td>Company ID the member belongs to</td>
            </tr>
            <tr>
                <td>member_id</td>
                <td>string</td>
                <td>Authenticated member ID</td>
            </tr>
            <tr>
                <td>start_date</td>
                <td>string</td>
                <td>Start date to filter the booking from</td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>End date to filter the booking</td>
            </tr>
            <tr>
                <td>include_cancelled</td>
                <td>string</td>
                <td>include_cancelled=yes, include cancelled bookings</td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td>page number to display</td>
            </tr>
            <tr>
                <td>per_page</td>
                <td>integer</td>
                <td>Number of bookings to display per page</td>
            </tr>
        </tbody>
    </table>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Auth-Token: {auth-token}"
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/{company_id}/members/{member_id}/bookings?per_page=50&page=1"
  ```
</pre>
        </div>
        </div>
        </div>