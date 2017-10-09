# Queuing

The Bookingbug queue system is a poweful and robust solution built for your walk-in clients. It allows them to check in for a service and join a digital queue, eliminating the guess work and constant questioning on when will they be served next. For more infomation about the queue feature please read more [here](https://www.bookingbug.co.uk/queuing).

Before we dive into the APIs for the queue let's take a look at a typical use case example. 

Our famous Pet Store offers many services such as pet grooming, microchipping and walk-in health check. Customers can bring in their pets for a 30 minutes health check. There is only one staff at the pet store who will carry out this service. Customers report at the recepition desk, details of the customer are taken and joined the digital queue. 

This section is aimed for managining the queue via the APIs. You must be an administrator to perform all actions listed below. 

## Listing queues

You can list the queues configured against your Bookingbug company.

<pre>GET /api/v1/admin/{company_id}/client_queues</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "_embedded": {
        "client_queues": [
            {
                "id": 1,
                "name": "Queue 1",
                "priority": 1,
                "length": 4,
                "wait_time": 14520,
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/1"
                    },
                    "company": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/company"
                    },
                    "services": [
                        {
                            "title": "Pet Health Check",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
                        }
                    ],
                    "people": [
                        {
                            "title": "Staff Two",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289"
                        }
                    ],
                    "queuers": {
                        "href": "https://{host}.bookingbug.com/api/v1/queuers/1"
                    }
                }
            },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>

Looking at the sample response we can tell which services and people are also configured for the queue. 
<b>Note:</b> You can have multiple queues but only one is supported in the front-end at present. 

## Read queue 

You can read a particular queue's information by passing in it's queue ID. 

<pre>GET /api/v1/admin/{company_id}/client_queues/{id}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/{id}"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "_embedded": {
        "client_queues": [
            {
                "id": 1,
                "name": "Queue 1",
                "priority": 1,
                "length": 4,
                "wait_time": 14520,
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/1"
                    },
                    "company": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/company"
                    },
                    "services": [
                        {
                            "title": "Pet Health Check",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
                        }
                    ],
                    "people": [
                        {
                            "title": "Staff Two",
                            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289"
                        }
                    ],
                    "queuers": {
                        "href": "https://{host}.bookingbug.com/api/v1/queuers/1"
                    }
                }
            }
  ```
</pre>
        </div>
        </div>
        </div>

## Queuers 

The default live queue (queuers) is where all the action happens. The API method below will show you all your customers (queuers) being served or in the queue in the queue.

<pre>GET /api/v1/admin/{company_id}/queuers</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "_embedded": {
        "queuers": [
            {
                "id": 6,
                "first_name": "Philip",
                "last_name": "Duncan",
                "mobile": "7440118875",
                "mobile_prefix": "44",
                "email": "",
                "locale": "en",
                "service_id": 48324,
                "ticket_number": 616,
                "position": 0,
                "pusher_channel": "DS8JN4ViV_e9wRloMDAxMTY=",
                "due": "2017-10-03T13:57:36+01:00",
                "space_id": 16,
                "service_name": "Service Two",
                "created_at": "2017-09-06T17:37:39+01:00",
                "long_id": "DS8JN4ViV_e9wRloMDAxMTY%3D",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6"
                    },
                    "service": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48324"
                    },
                    "space": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/spaces/16"
                    },
                    "client_queue": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/1"
                    },
                    "finish_serving": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6/finish_serving"
                    },
                    "return_to_queue": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6/return_to_queue/{?position,first,last,service_id}",
                        "templated": true
                    },
                    "person": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289"
                    },
                    "booking": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/16{?locale}",
                        "templated": true
                    },
                    "client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/9"
                    }
                },
                "person_id": 15289,
                "client_queue_id": 1,
                "multi_status": {
                    "checked_in": "2017-09-06T16:37:39+00:00",
                    "being_seen": "2017-10-03T12:58:11+00:00"
                },
                "person_name": "Staff Two",
                "start": "2017-10-03T13:55:00+01:00",
                "duration": 60,
                "client_id": 9,
                "notes": "Dolores anim occaecat et atque"
            },
            {
                "id": 7,
                "first_name": "David",
                "last_name": "Bell",
                "mobile": "",
                "mobile_prefix": "44",
                "email": "",
                "locale": "en",
                "service_id": 48323,
                "ticket_number": 454,
                "position": 1,
                "pusher_channel": "Z93Qjv6Y7wqg_p7MMDAxNDE=",
                "due": "2017-10-03T16:18:06+01:00",
                "space_id": 41,
                "service_name": "Pet Health Check",
                "created_at": "2017-10-03T10:54:37+01:00",
                "long_id": "Z93Qjv6Y7wqg_p7MMDAxNDE%3D",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/7"
                    },
                    "service": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48323"
                    },
                    "space": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/spaces/41"
                    },
                    "client_queue": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/1"
                    },
                    "start_serving": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/start_serving?queuer_id=7{&person_id}",
                        "templated": true
                    },
                    "booking": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/41{?locale}",
                        "templated": true
                    },
                    "client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/16"
                    }
                },
                "client_queue_id": 1,
                "multi_status": {
                    "checked_in": "2017-10-03T09:54:37+00:00"
                },
                "duration": 60,
                "client_id": 16
            },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers"
        }
    }
}         
  ```
</pre>
        </div>
        </div>
        </div>

Looking at the sample response from the queuers API we can determine the `position` of a customer in the queue, their `ticket_number` and a lot more. The `position: 0` means the customer is currently being served and `position: 1` is next on the queue and so on. 

## Add client to queue

The API enables you to add your walk-in clients to the queue. 

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
            <td>service_id</td>
            <td>integer</td>
            <td>The service ID</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/queuers</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
  -d '{
  "first_name":"Peter",
  "last_name":"James",
  "service_id":48323
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers"
  ```
</pre>
        </div>
        </div>

## Read queuer

You can read individual queuer's information that are currently in the queue. 

<pre>GET /api/v1/admin/{company_id}/queuers/{id}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/{id}"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "id": 6,
    "first_name": "Philip",
    "last_name": "Duncan",
    "mobile": "7440118875",
    "mobile_prefix": "44",
    "email": "",
    "locale": "en",
    "service_id": 48324,
    "ticket_number": 616,
    "position": 0,
    "pusher_channel": "DS8JN4ViV_e9wRloMDAxMTY=",
    "due": "2017-10-03T13:57:36+01:00",
    "space_id": 16,
    "service_name": "Service Two",
    "created_at": "2017-09-06T17:37:39+01:00",
    "long_id": "DS8JN4ViV_e9wRloMDAxMTY%3D",
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6"
        },
        "service": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/48324"
        },
        "space": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/spaces/16"
        },
        "client_queue": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client_queues/1"
        },
        "finish_serving": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6/finish_serving"
        },
        "return_to_queue": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/6/return_to_queue/{?position,first,last,service_id}",
            "templated": true
        },
        "person": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/15289"
        },
        "booking": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/16{?locale}",
            "templated": true
        },
        "client": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/client/9"
        }
    },
    "person_id": 15289,
    "client_queue_id": 1,
    "multi_status": {
        "checked_in": "2017-09-06T16:37:39+00:00",
        "being_seen": "2017-10-03T12:58:11+00:00"
    },
    "person_name": "Staff Two",
    "start": "2017-10-03T13:55:00+01:00",
    "duration": 60,
    "client_id": 9,
    "notes": "Does not have all his paperwork"
}       
  ```
</pre>
        </div>
        </div>
        </div>

## Finish serving a client 

The staff/agent can finish serving the client once they are done. The API method below is an example of how to achieve this. You'll need the queuers ID, which can be obtained from the above read queuers method.

<pre>POST /api/v1/admin/{company_id}/queuers/{id}/finish_serving</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/{id}/finish_serving"
  ```
</pre>
        </div>
        </div>

## Serve next client

The API enables you to server the next client in the queue. This end-point takes in two parameters, which are `queuers_id` and `person_id`. The next client in the queue would be the one with the `position: 1`. 

<pre>POST /api/v1/admin/{company_id}/queuers/start_serving</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
  -d '{
  "queuers_id": 10, 
  "person_id": 12345
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/start_serving"
  ```
</pre>
        </div>
        </div>

## Leave queue

You can delete a client from the queue if they wish/decide to leave. 

<pre>DELETE /api/v1/admin/{company_id}/queuers/{id}</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Auth-Token: {auth-token}" 
  -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/queuers/{id}"
  ```
</pre>
        </div>
        </div>

# Staff actions 

The staff/agent have few actions that they can take, below is a list of the actions.

- End Shift - Will no longer be serving clients in the queue
- Take a break - Take break for given duration
- Mark themself as busy - Mark themself as busy for a given duration 
- End break/become available 

## Staff on break 

Mark the staff to go a break for a given duration. During this duration the staff will not be serving any clients in the queue. 

### Paremeters

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
            <td>status</td>
            <td>integer</td>
            <td>0 = not on shift or shift ended
			1 = currently on shift/ available
			2 = currently on break
			4 = busy
		</td>
        </tr>
        <tr>
            <td>estimate_duration</td>
            <td>integer</td>
            <td>number of minutes e.g. 15, 30, 45, 60</td>
        </tr>
    </tbody>
</table>


<pre>PUT /api/v1/admin/{company_id}/people/{id}/attendance</pre>

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
  "status": 2
  "estimate_duration": 15
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id}/attendance"
  ```
</pre>
        </div>
        </div>

## End staff shift

A staff shift can be ended. This will make them unavailable.

<pre>PUT /api/v1/admin/{company_id}/people/{id}/attendance</pre>

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
  "status": 0
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id}/attendance"
  ```
</pre>
        </div>
        </div>

## Mark staff as free

You can mark the staff as free/available. 

<pre>PUT /api/v1/admin/{company_id}/people/{id}/attendance</pre>

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
  "status": 1
}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/people/{id}/attendance"
  ```
</pre>
        </div>
        </div>


