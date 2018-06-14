# People

The people API enables you to list, create, update, delete and query the staff registered against your company. You must be authenticated as an administrator to perform the `creation`, `update`, `deletion`, `find by reference` and `block time for person`.

## Create Person

The API enables an admin to create a person. The following parameters listed below are supported.

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
            <td>Name of the staff</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
            <td>description</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>email address of the staff</td>
        </tr>
        <tr>
            <td>phone_prefix</td>
            <td>string</td>
            <td>phone prefix e.g. 44</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>string</td>
            <td>phone number of the staff</td>
        </tr>
        <tr>
            <td>ical_link</td>
            <td>string</td>
            <td>Calendar link</td>
        </tr>
        <tr>
            <td>never_booked</td>
            <td>boolean</td>
            <td>mark staff as never being booked</td>
        </tr>
        <tr>
            <td>notify</td>
            <td>boolean</td>
            <td>true/false - default is true</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>string</td>
            <td>external reference for staff</td>
        </tr>
        <tr>
            <td>all_staff</td>
            <td>boolean</td>
            <td>True when creating an Admin that will be able to see other staff schedules, false otherwise</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/people</pre>  

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
    "name": "Test Staff",
    "description": "Test description"
    "email": "test@test.com",
    "phone_prefix": "44",
    "phone": "07912345678",
    "reference": "123400",
    "notify": false
  }'
  ```
</pre>
        </div>
        </div>
        </div>  

Above is an example cURL call for creating a new person.

## Update Person

You can update information of a person. The parameters stated below are supported. You must be authenticated as an administrator to make this call.

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
            <td>Name of the staff</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
            <td>description</td>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>email address of the staff</td>
        </tr>
        <tr>
            <td>phone_prefix</td>
            <td>string</td>
            <td>phone prefix e.g. 44</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>string</td>
            <td>phone number of the staff</td>
        </tr>
        <tr>
            <td>ical_link</td>
            <td>string</td>
            <td>Calendar link</td>
        </tr>
        <tr>
            <td>never_booked</td>
            <td>boolean</td>
            <td>mark staff as never being booked</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>string</td>
            <td>external reference for staff</td>
        </tr>
        <tr>
            <td>client_queue_id</td>
            <td>integer</td>
            <td>Queue ID the staff belongs to - only if the queue feature is enabled</td>
        </tr>
        <tr>
            <td>queuing_disabled</td>
            <td>boolean</td>
            <td>true/false - only if queue feature is enabled</td>
        </tr>
    </tbody>
</table>

<pre>PUT /api/v1/admin/{company_id}/people/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
    "name": "Test Staff 1",
    "description": "Test description 1"
    "email": "test@test.com",
    "phone_prefix": "44",
    "phone": "07912345678",
    "reference": "123400"
  }'
  ```
</pre>
        </div>
        </div>
        </div>  

## List People

There are two different ways of listing people. The first method is using the admin end-point and the second method is using the public end-point. The admin method of listing will return more data compared to the public.

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
        <tr>
            <td>include_disabled</td>
            <td>boolean</td>
            <td>true/false - true by default </td>
        </tr>
    </tbody>
</table>


<pre>GET /api/v1/admin/{company_id}/people</pre>
<pre>GET /api/v1/{company_id}/people</pre>

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
  curl -X GET \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people?page=1&per_page=50&include_disabled=false \
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
    "total_entries": 2,
    "_embedded": {
        "people": [
            {
                "id": 15288,
                "name": "Staff One",
                "type": "person",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "order": 15288,
                "phone_prefix": "44",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/items?person_id=15288"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/15288"
                    },
                    "companies": [
                        {
                            "title": "Company Name",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/company"
                        }
                    ],
                    "edit": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/edit"
                    },
                    "attendance": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/attendance"
                    },
                    "block": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/block"
                    },
                    "cal": {
                        "href": "http://{host}.bookingbug.com/ical/person/15288?calid=4060413678"
                    },
                    "overlay_cal": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/cal/5"
                    },
                    "schedule": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/48315{?start_date,end_date}",
                        "templated": true
                    },
                    "enabled_services": [
                        {
                            "title": "Service One",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
                        },
                        {
                            "title": "Service Two",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48324"
                        }
                    ],
                    "enabled_resources": []
                },
                "_embedded": {},
                "email": "staffone@test.com",
                "mobile": "",
                "queuing_disabled": true,
                "person_companies": [
                    {company_id}
                ],
                "ical_link": ""
            },
            {
                "id": 15289,
                "name": "Staff Two",
                "type": "person",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "order": 15289,
                "phone_prefix": "44",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/items?person_id=15289"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/15289"
                    },
                    "companies": [
                        {
                            "title": "Company Name",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/company"
                        }
                    ],
                    "edit": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289/edit"
                    },
                    "attendance": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289/attendance"
                    },
                    "block": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289/block"
                    },
                    "cal": {
                        "href": "http://{host}.bookingbug.com/ical/person/15289?calid=9739617323"
                    },
                    "overlay_cal": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/cal/6"
                    },
                    "schedule": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/48316{?start_date,end_date}",
                        "templated": true
                    },
                    "enabled_services": [
                        {
                            "title": "Service One",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
                        },
                        {
                            "title": "Service Two",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48324"
                        }
                    ],
                    "enabled_resources": []
                },
                "_embedded": {},
                "email": "stafftwo@test.com",
                "mobile": "",
                "queuing_disabled": true,
                "person_companies": [
                    {company_id}
                ],
                "ical_link": ""
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people?page=1&per_page=300"
        },
        "new": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/new{?signup}",
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
    "total_entries": 2,
    "_embedded": {
        "people": [
            {
                "id": 15288,
                "name": "Staff One",
                "type": "person",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "order": 15288,
                "phone_prefix": "44",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/people/15288"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/items?person_id=15288"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/15288"
                    }
                }
            },
            {
                "id": 15289,
                "name": "Staff Two",
                "type": "person",
                "deleted": false,
                "disabled": false,
                "company_id": {company_id},
                "order": 15289,
                "phone_prefix": "44",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/people/15289"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/items?person_id=15289"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/15289"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/people"
        }
    }
}
```
</pre>
        </div>
        </div>
        </div>

Above is an example admin cURL call for listing all the staff, 50 per page and only those which are active.

## Read Person

The person read method enables you to view a particular staff's information. Once again there are two different ways, the admin and the public.

<pre>GET /api/v1/admin/{company_id}/people/{id}</pre>
<pre>GET /api/v1/{company_id}/people/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        </div>
        </div>

Above is an example admin cURL call for viewing a person.

## Delete Person

You can delete a person using the API method below.

<pre>DELETE /api/v1/admin/{company_id}/people/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        </div>
        </div>

## Find by reference

You can query the people end-point to find a particular staff with their reference. You must be authenticated as an administrator.

<pre>GET /api/v1/admin/{company_id}/people/find_by_ref/{reference}</pre>

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
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/find_by_ref/{ref} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {token-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "id": 15288,
    "name": "Staff One",
    "type": "person",
    "deleted": false,
    "disabled": false,
    "company_id": {company_id},
    "order": 15288,
    "phone_prefix": "44",
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288"
        },
        "items": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/items?person_id=15288"
        },
        "images": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/15288"
        },
        "companies": [
            {
                "title": "Company Name",
                "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/company"
            }
        ],
        "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/edit"
        },
        "attendance": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/attendance"
        },
        "block": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288/block"
        },
        "cal": {
            "href": "http://{host}.bookingbug.com/ical/person/15288?calid=4060413678"
        },
        "overlay_cal": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/cal/5"
        },
        "schedule": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/48315{?start_date,end_date}",
            "templated": true
        },
        "enabled_services": [
            {
                "title": "Service One",
                "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
            },
            {
                "title": "Service Two",
                "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48324"
            }
        ],
        "enabled_resources": []
    },
    "_embedded": {},
    "email": "staffone@test.com",
    "mobile": "",
    "queuing_disabled": true,
    "reference": "123456",
    "person_companies": [
        {company_id}
    ],
    "ical_link": ""
}
  ```
</pre>
        </div>
        </div>
        </div>

## Block time for person

You can block a time slot for a person in their calendar. The following parameters are required `start_time` and `end_time`.

<pre>PUT /api/v1/admin/{company_id}/people/{id}/block</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X PUT \
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id}/block \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {token-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
  	"start_time": "2017-09-07T11:00:00",
	"end_time": "2017-09-07T12:00:00"
  }'
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
    "company_id": {company_id},
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/slots/22"
        },
        "person": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15288"
        },
        "bookings": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings?slot_id=22"
        },
        "booking_details": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/booking_details/?slot_id=22"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>

Above is an example admin cURL call blocking time for a given staff from 11am to 12pm on 7th September 2017.

## Read image for person

You can read a person's image. The image must be uploaded first from the backend. Once done this can be grabbed via the API using the method below. Alternatively you can list or read a person and you'll find the image link within the response.

<pre>GET /api/v1/{company_id}/media/person_images/{person_id}</pre>

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
   https://{host}.bookingbug.com/api/v1/{company_id}/media/person_images/{person_id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {token-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "_embedded": {
        "images": [
            {
                "id": 3,
                "company_id": {company_id},
                "name": "20171012-29566-1uk09jn.png",
                "image_file_name": "20171012-29566-1uk09jn.png",
                "foreign_key": {person_id},
                "url": "{URL OF IMAGE HOSTED}",
                "_links": {
                    "self": {
                        "href": "/{company_id}/media/person_images/{person_id}/3"
                    }
                }
            }
        ]
    }
}
  ```
</pre>
        </div>
        </div>
        </div>
