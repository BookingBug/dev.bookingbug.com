# Listing Events

The REST API enables you to list bookable events and recurring events. This section of the guide will explain what is an event, event_chains and event group.

## Event group

Events can be grouped together using event group (category). This method will list all the groups you have configured in your company. For example an event called "Pilates" can be categorised as "Fitness".

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
        </tbody>
    </table>

<pre>GET /api/v1/{company_id}/event_groups</pre>
<pre>GET /api/v1/{company_id}/event_groups/{id}</pre>

The cURL call below will list all the event groups with pagination of 100 per page.

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
    "event_groups": [
      {
        "id": 107608,
        "name": "Fitness",
        "extra": {},
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50667/event_groups/107608"
          },
          "images": {
            "href": "https://uk.bookingbug.com/api/v1/50667/media/event_group_images/107608"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50667/event_groups{?page,per_page}",
      "templated": true
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## Event Chain

An event chain describes the events setup in your company. An event can have many occurrences, depending on if the event is setup as a single or regular (recurring). This method will list all of the event chains. The following parameters below can be appended.

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

The cURL call below will list all the events with pagination of 100 per page.

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

## Events

The events method will list all bookable events. The following parameters below can be appended to filter the bookable events. By default the events API will only list up to one months of bookable events.

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
                <td>start_date</td>
                <td>string</td>
                <td>Date in ISO-8601</td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>Date in ISO-8601</td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td>pagination</td>
            </tr>
            <tr>
                <td>per_page</td>
                <td>integer</td>
                <td>Number of events to show per page</td>
            </tr>
            <tr>
                <td>event_group_id</td>
                <td>integer</td>
                <td>Event group ID</td>
            </tr>
            <tr>
                <td>event_chain_id</td>
                <td>integer</td>
                <td>Event ID.</td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td>Filter events with resource ID</td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>Filter events with person ID</td>
            </tr>
            <tr>
                <td>include_non_bookable</td>
                <td>boolean</td>
                <td>lits events that are not bookable</td>
            </tr>
        </tbody>
    </table>

<pre>GET /api/v1/{company_id}/events</pre>
<pre>GET /api/v1/{company_id}/events/{id}</pre>

The cURL call below will list all bookable events from the 1st of Jan 2016 to the 10th of Jan 2016.

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
"https://{host}.bookingbug.com/api/v1/{company_id}/events?start_date=2016-01-01&end_date=2016-01-10"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 5,
  "_embedded": {
    "events": [
      {
        "id": 16427905,
        "updated_at": "2016-01-04T14:41:56Z",
        "datetime": "2016-01-06T14:00:00+00:00",
        "description": "My Recurring Event",
        "status": 4,
        "spaces_booked": 0,
        "spaces_reserved": 0,
        "spaces_blocked": 0,
        "spaces_held": 0,
        "num_spaces": 1,
        "spaces_wait": 0,
        "event_chain_id": 266575,
        "service_id": 107608,
        "duration": 60,
        "price": 0,
        "ticket_spaces": {},
        "units": "minute",
        "company_id": 50667,
        "bookable": true,
        "modified_date": "2016-01-04T14:41:56+00:00",
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50667/events/16427905{?embed}"
          },
          "event_group": {
            "href": "https://uk.bookingbug.com/api/v1/50667/event_groups/107608"
          },
          "event_chain": {
            "href": "https://uk.bookingbug.com/api/v1/50667/event_chains/266575{?member_level_id,embed}",
            "templated": true
          },
          "book": {
            "href": "https://uk.bookingbug.com/api/v1/50667/basket/add_item?event_id=16427905&event_chain_id=266575{&member_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
            "templated": true
          }
        }
      },
      ...
      ]
     },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50667/events?start_date=2016-01-01&end_date=2016-01-10&page=1&per_page=100"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

### Adding an event to the basket

Looking at the results from the events API we can add the events to the basket. Below is an example of adding an event. 

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
