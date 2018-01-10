# Resources

The resource API enables you to list, create, update and delete the resources against your company. You must be authenticated as an administrator to perform the `creation`, `update`, `delete` and `block time for resource`.

## Create Resource

The API enables an admin to create a resource. The following parameters listed below are supported.

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
            <td>name</td>
            <td>string</td>
            <td>Name of the resource</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
            <td>description for resource</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>email address of the resource</td>
        </tr>
        <tr>
            <td>disbaled</td>
            <td>boolean</td>
            <td>true/false - false by default</td>
        </tr>
        <tr>
            <td>price</td>
            <td>integer</td>
            <td>Price for resource to be booked</td>
        </tr>
        <tr>
            <td>position</td>
            <td>integer</td>
            <td>Position of resource</td>
        </tr>
        <tr>
            <td>never_booked</td>
            <td>boolean</td>
            <td>mark resource as never being booked</td>
        </tr>
        <tr>
            <td>count</td>
            <td>integer</td>
            <td>Count</td>
        </tr>
        <tr>
            <td>max_book</td>
            <td>integer</td>
            <td>Maximum times resource can be booked</td>
        </tr>
        <tr>
            <td>api_ref</td>
            <td>string</td>
            <td>External reference for resource</td>
        </tr>
        <tr>
            <td>address[address1]</td>
            <td>string</td>
            <td>Address line 1</td>
        </tr>
        <tr>
            <td>address[address2]</td>
            <td>string</td>
            <td>Address line 2</td>
        </tr>
        <tr>
            <td>address[address3]</td>
            <td>string</td>
            <td>Address line 3</td>
        </tr>
        <tr>
            <td>address[address4]</td>
            <td>string</td>
            <td>Address line 4</td>
        </tr>
        <tr>
            <td>address[address5]</td>
            <td>string</td>
            <td>Address line 5</td>
        </tr>
        <tr>
            <td>address[postcode]</td>
            <td>string</td>
            <td>Postcode</td>
        </tr>
        <tr>
            <td>address[country]</td>
            <td>string</td>
            <td>Country e.g. United Kingdom</td>
        </tr>
        <tr>
            <td>address_id</td>
            <td>integer</td>
            <td>Address ID</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/resources</pre>  

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
    "name": "Consultation room 1",
    "description": "Consultation room 1",
    "email": "room1@email.com",
    "disabled": false,
    "price": 35,
    "never_booked": false,
    "max_book": 1,
    "api_ref": "roomSR1",
    "address": {
        "address1": "Pet Store",
        "address2": "123 Some Street",
        "address3": "Address line 3",
        "address4": "London",
        "postcode": "E12 8YH",
        "country": "United Kingdom"
    }
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources"
  ```
</pre>
        </div>
        </div>
        </div>  

Above is an example cURL call for creating a new resource with an address. When adding an address whilst creating a new resource, you'll need to find the `address_id` in the response and make another API call to the address end-point to view the address or alternatively you can grab the address link in the response.

## Update Resource

You can update information of a resource. The parameters stated above can be used. You must be authenticated as an administrator to make this call.

<pre>PUT /api/v1/admin/{company_id}/resources/{id}</pre>

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
  -d '{
    "name": "Consultation room 1",
    "description": "Consultation room 1",
    "email": "room1@email.com",
    "disabled": false,
    "price": 35,
    "never_booked": false,
    "max_book": 1,
    "api_ref": "roomSR12",
    "address": {
        "address1": "Pet Store",
        "address2": "123 Some Street",
        "address3": "Address line 3",
        "address4": "London",
        "postcode": "E12 8YH",
        "country": "United Kingdom"
    }
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/{id}"
  ```
</pre>
        </div>
        </div>
        </div>  

## List Resources

There are two different ways of listing resources. The first method is using the admin end-point and the second method is using the public end-point. The admin method of listing will return more data compared to the public.

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
            <td>page</td>
            <td>integer</td>
            <td>1</td>
        </tr>
        <tr>
            <td>per_page</td>
            <td>integer</td>
            <td>300</td>
        </tr>
    </tbody>
</table>


<pre>GET /api/v1/admin/{company_id}/resources</pre>
<pre>GET /api/v1/{company_id}/resources</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Admin Sample Response Data</a></li>
        <li><a href="#tab-3">Public Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}"
  -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resource?page=1&per_page=50"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "total_entries": 1,
    "_embedded": {
        "resources": [
            {
                "id": 13,
                "name": "Consultation room 1",
                "description": "Consultation room",
                "type": "resource",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "email": "room1@email.com",
                "order": 13,
                "address_id": 6,
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/13"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/items?resource_id=13"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/resource_images/13"
                    },
                    "address": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/addresses/6"
                    },
                    "edit": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/13/edit"
                    },
                    "block": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/13/block"
                    },
                    "schedule": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/48351{?start_date,end_date}",
                        "templated": true
                    },
                    "enabled_services": [],
                    "enabled_people": []
                },
                "schedule_id": 48351,
                "service_ids": [],
                "person_ids": []
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources"
        },
        "new": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/new",
            "templated": true
        }
    }
}
```
</pre>
        </div>
        <div id="tab-3" class="tab__content">
<pre>
```
{
    "total_entries": 1,
    "_embedded": {
        "resources": [
            {
                "id": 13,
                "name": "Consultation room 1",
                "description": "Consultation room",
                "type": "resource",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "email": "room1@email.com",
                "order": 13,
                "address_id": 6,
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/resources/13"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/items?resource_id=13"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/resource_images/13"
                    },
                    "address": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/addresses/6"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/resources"
        }
    }
}
```
</pre>
        </div>
        </div>
        </div>

The above is an admin cURL call for listing all resources 50 per page.

## Read Resource

The resource read method enables you to view a particular resource's information. Once again there are two different ways, the admin and the public.

<pre>GET /api/v1/admin/{company_id}/resources/{id}</pre>
<pre>GET /api/v1/{company_id}/resources/{id}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

Above is an example admin cURL call for reading a resource.

## Delete Resource

You can delete a resource using the API method below.

<pre>DELETE /api/v1/admin/{company_id}/resources/{id}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resources/{id}"
  ```
</pre>
        </div>
        </div>
        </div>

## Block time for resource

You can block a time slot for a resource in their calendar. The following parameters are required `start_time` and `end_time`.

<pre>PUT /api/v1/admin/{company_id}/resources/{id}/block</pre>

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
  -d '{
  	"start_time": "2017-09-07T11:00:00",
	"end_time": "2017-09-07T12:00:00"
  }'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/resource/{id}/block"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "id": 22,
    "datetime": "2017-09-07T12:00:00+01:00",
    "end_datetime": "2017-09-07T13:00:00+01:00",
    "full_describe": "Person - Staff One",
    "status": 3,
    "spaces_booked": 0,
    "spaces_reserved": 0,
    "spaces_blocked": 1,
    "num_spaces": 1,
    "spaces_wait": 0,
    "person_id": 15288,
    "duration": 60,
    "duration_span": 3600,
    "company_id": 37004,
    "_links": {
        "self": {
            "href": "https://host.bookingbug.com/api/v1/admin/37004/slots/22"
        },
        "person": {
            "href": "https://host.bookingbug.com/api/v1/admin/37004/resource/15288"
        },
        "bookings": {
            "href": "https://host.bookingbug.com/api/v1/admin/37004/bookings?slot_id=22"
        },
        "booking_details": {
            "href": "https://host.bookingbug.com/api/v1/admin/37004/booking_details/?slot_id=22"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>

Above is an example admin cURL call blocking time for a given staff from 11am to 12pm on 7th September 2017.
