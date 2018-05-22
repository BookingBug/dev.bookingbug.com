# Services

The API enables you to create a service. You must be an administrator to create, update and delete a services. The parameters listed below are supported.

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
            <td>Name of the service</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>string</td>
            <td>Reference</td>
        </tr>
        <tr>
            <td>duration</td>
            <td>integer</td>
            <td>Duration of service in minutes e.g. 60</td>
        </tr>
        <tr>
            <td>spaces</td>
            <td>integer</td>
            <td>Number of spaces this service has e.g. 1</td>
        </tr>
    </tbody>
</table>

## Create service

<pre>POST /api/v1/admin/{company_id}/services</pre>  

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
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/services \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
    "name": "Test Service",
    "reference": "TS001",
    "duration": "60",
    "spaces": "1"
  }'
  ```
</pre>
        </div>
        </div>
        </div>  

Above is an example cURL call for creating a new service.

## List services

You can list services configured in your company in your bookingbug account. There are two different ways of listing services. The first way is using the public API end-point and the second way is using the admin API end-point. The difference is that using the admin method will retun the disabled and deleted services. This also applies for when reading a service using the admin method.

<pre>GET /api/v1/{company_id}/services</pre>
<pre>GET /api/v1/admin/{company_id}/services</pre>

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
   https://{host}.bookingbug.com/api/v1/{company_id}/services \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "total_entries": 15,
    "_embedded": {
        "services": [
            {
                "id": 115219,
                "name": "Car Wash",
                "description": "Car Wash + Wax",
                "durations": [
                    60
                ],
                "prices": [
                    2000
                ],
                "detail_group_id": 35847,
                "listed_durations": [],
                "extra": {
                    "brand_event": "Nike"
                },
                "booking_time_step": 60,
                "is_event_group": false,
                "type": "service",
                "deleted": false,
                "queuing_disabled": true,
                "company_id": {company_id},
                "duration_unit": "minute",
                "min_advance_period": 0,
                "max_advance_period": 5184000,
                "min_cancel_period": 86400,
                "booking_type_public": "booking",
                "booking_type_member": "booking",
                "min_bookings": 1,
                "max_bookings": 1,
                "groups": [],
                "order": 115219,
                "child_level_service": true,
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/services/115219"
                    },
                    "items": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/items?service_id=115219"
                    },
                    "images": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/service_images/115219"
                    },
                    "questions": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/questions?detail_group_id=35847"
                    },
                    "days": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/day_data?service_id=115219{&month,week,date,edate,location,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
                        "templated": true
                    },
                    "times": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/time_data?service_id=115219{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id,people_ids,is_admin}",
                        "templated": true
                    },
                    "book": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/basket/add_item?service_id=115219{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
                        "templated": true
                    },
                    "all_children": {
                        "href": "https://{host}.bookingbug.com/api/v1/{company_id}/services/115219/all_children"
                    },
                    "company": {
                        "href": "https://{host}.bookingbug.com/api/v1/company/{company_id}"
                    }
                }
            },
            ...
}            

```
</pre>

        </div>
        </div>

The example cURL call above is listing all services using the public end-point.

## List Child Services

If you have a parent/child company setup, you can list services by calling the parent company ID by appending `children=true`

<pre>GET /api/v1/admin/{parent_company_id}/services?children=true</pre>

## Read service

The service read method enables you to view a particular service. Once again there are two different ways, the admin and the public.

<pre>GET /api/v1/{company_id}/services/{id}</pre>
<pre>GET /api/v1/admin/{company_id}/services/{id}</pre>

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
   https://{host}.bookingbug.com/api/v1/{company_id}/services/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        </div>
        </div>

The example cURL call above is reading a particular service using the public end-point.

## Update service

You can update the service. The parameters stated below are supported. You must be authenticated as an administrator to make this call.

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
            <td>Name of the service</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>string</td>
            <td>Reference</td>
        </tr>
        <tr>
            <td>duration</td>
            <td>integer</td>
            <td>Duration of service in minutes e.g. 60</td>
        </tr>
        <tr>
            <td>spaces</td>
            <td>integer</td>
            <td>Number of spaces this service has e.g. 1</td>
        </tr>
    </tbody>
</table>

<pre>PUT /api/v1/admin/{company_id}/services/{id}</pre>

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
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/{id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
    "name": "Test Service",
    "reference": "TS001",
    "duration": "60",
    "spaces": "1"
  }'
  ```
</pre>
        </div>
        </div>
        </div>  

## Delete service

You can delete a service. You must be authenticated as an administrator.

<pre>DELETE /api/v1/admin/{company_id}/services/{id}</pre>

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
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/{id} \
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

The example cURL call above is for deleting a service.

## Find by reference

You can query the service end-point to find a particular service with their reference. You must be authenticated as an administrator.

<pre>GET /api/v1/admin/{company_id}/services/find_by_ref/{reference}</pre>

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
   https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/find_by_ref/TA123456 \
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
    "id": 104747,
    "name": "Microchipping",
    "description": "Microchipping",
    "durations": [
        30,
        60,
        90,
        120,
        150,
        180,
        210,
        240,
        270,
        300
    ],
    "prices": [
        1500,
        3000,
        4500,
        6000,
        7500,
        9000,
        10500,
        12000,
        13500,
        15000
    ],
    "detail_group_id": 32705,
    "listed_durations": [],
    "extra": {
        "info": "test",
        "brand_event": "Adidas"
    },
    "booking_time_step": 15,
    "is_event_group": false,
    "api_ref": "TA123456",
    "type": "service",
    "deleted": false,
    "queuing_disabled": true,
    "company_id": {company_id},
    "duration_unit": "minute",
    "min_advance_period": 0,
    "max_advance_period": 5184000,
    "min_cancel_period": 86400,
    "booking_type_public": "booking",
    "booking_type_member": "booking",
    "min_bookings": 1,
    "max_bookings": 10,
    "groups": [],
    "spaces": 1,
    "order": 104747,
    "child_level_service": true,
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/104747"
        },
        "items": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/items?service_id=104747"
        },
        "images": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/media/service_images/104747"
        },
        "questions": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/questions?detail_group_id=32705"
        },
        "days": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/day_data?service_id=104747{&month,week,date,edate,location,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
            "templated": true
        },
        "times": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/time_data?service_id=104747{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id,people_ids,is_admin}",
            "templated": true
        },
        "book": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/basket/add_item?service_id=104747{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
            "templated": true
        },
        "all_children": {
            "href": "https://{host}.bookingbug.com/api/v1/{company_id}/services/104747/all_children"
        },
        "company": {
            "href": "https://{host}.bookingbug.com/api/v1/company/{company_id}"
        },
        "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/104747/edit"
        },
        "new_booking": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/{company_id}/services/104747/new_booking"
        }
    },
    "disabled": false,
    "reference": "TA123456",
    "pre_time": 0,
    "post_time": 0
}
  ```
</pre>
        </div>
        </div>
        </div>

The example cURL call above is to find a service by reference.
