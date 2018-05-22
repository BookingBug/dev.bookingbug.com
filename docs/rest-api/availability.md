# Availability

This section will outline how you can use the REST API to get the available slots for a bookable item (Services & Events). Below we will explain each of these endpoints in more detail.

## Day

The Day end-point will load a list of bookable event items for a particular date.


#### Parameters

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
                <td>date</td>
                <td>string</td>
                <td>Date in ISO-8601</td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td>pagination &page=50, will show 50 reults per page</td>
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
  curl -X GET \
   https://{host}.bookingbug.com/api/v1/company_id/day?date={date} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
        </div>
        </div>

## Day Data

The Day Data gets data for a range of days. This end-point retrieves a set of day date for a bookable service items. Bookable items in BookingBug are a service with either or both of a Resource and a Person. These are combined into a single EventID.

#### Parameters

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
                <td>event_id</td>
                <td>integer</td>
                <td>The underlying Bookable 'event ID' - that descripbes this bookable service combination</td>
            </tr>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>The ID of service - so you can find all time slots that match a specific service</td>
            </tr>
            <tr>
                <td>date</td>
                <td>string</td>
                <td>Date in ISO-8601</td>
            </tr>
            <tr>
                <td>edate</td>
                <td>integer</td>
                <td>
End Date in ISO-8601</td>
            </tr>
            <tr>
                <td>month</td>
                <td>integer</td>
                <td>
A Month in MMYY format - returns an exact month</td>
            </tr>
            <tr>
                <td>cal_month</td>
                <td>string</td>
                <td>
A Month in MMYY format - returns a 6 week month for a calendar</td>
            </tr>
            <tr>
                <td>year</td>
                <td>string</td>
                <td>
A Year in YYYY </td>
            </tr>
            <tr>
                <td>week</td>
                <td>string</td>
                <td>
A Week of the year in WWYY format</td>
            </tr>
            <tr>
                <td>week_start</td>
                <td>integer</td>
                <td>
Which day the week starts on 0=Sunday, 1=Monday</td>
            </tr>
            <tr>
                <td>num_resources</td>
                <td>integer</td>
                <td>
Additional resources/rooms to block out with this booking</td>
            </tr>

        </tbody>
    </table>

The cURL below is an example that will return back all available slots for a given service, start date and an end date.

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
    https://{host}.bookingbug.com/api/v1/company_id/day_data?service_id=xxx&date=2016-13-12&edate=2016-20-12
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
  "_embedded": {
    "day_data": [
      {
        "_embedded": {
          "day_data": []
        },
        "days": [
          {
            "spaces": 78,
            "date": "2017-01-16"
          },
          {
            "spaces": 102,
            "date": "2017-01-17"
          },
          {
            "spaces": 102,
            "date": "2017-01-18"
          },
          ...
                  ],
        "service_id": 104747,
        "name": "Microchipping",
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/day_data?service_id=104747"
          }
        }
      },
      ...
      }
  ```
</pre>
        </div>
        </div>
        </div>

**Note:** We recommend that you use shorter date range for better performance.

## Time Data

Time Data end-point gets available time slots for events for a date. You can also combine the date with any of the listed parameters below to filter the results.

#### Parameters

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
                <td>event_id</td>
                <td>integer</td>
                <td>The underlying Bookable 'event ID' - that descripbes this bookable service combination</td>
            </tr>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>The ID of service - so you can find all time slots that match a specific service</td>
            </tr>
            <tr>
                <td>resource_ids</td>
                <td>string</td>
                <td>
The IDs of resources - so you can find all time slots that match specific resources (list should be separated by commas)</td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>
The ID of person - so you can find all time slots that match a specific person</td>
            </tr>
            <tr>
                <td>group_id</td>
                <td>integer</td>
                <td>
The ID of a service group - so you can find all time slots that match a specific price group</td>
            </tr>
            <tr>
                <td>location</td>
                <td>string</td>
                <td>
Comma seperated address in the order of (AddressLine1, AddressLine2, Town, State/County, Postcode, Country)</td>
            </tr>
            <tr>
                <td>date</td>
                <td>string</td>
                <td>
The date in ISO-8601 (YYYY-MM-DD) </td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>
The date in ISO-8601 (YYYY-MM-DD) - optional </td>
            </tr>
            <tr>
                <td>duration</td>
                <td>integer</td>
                <td>
Duration of the appointment in minutes</td>
            </tr>
            <tr>
                <td>num_resources</td>
                <td>integer</td>
                <td>
Additional resources/rooms to block out with this booking</td>
            </tr>

        </tbody>
    </table>

The cURL call below will list all available time slots for a particular date and for a particular staff (person). You can even pass in the service_id if you need the availability for a particular service. 

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
    https://{host}.bookingbug.com/api/v1/company_id/time_data?date={date}&person_id={person_id} \
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
  "_embedded": {
    "events": [
      {
        "times": [
          {
            "time": 540,
            "avail": 1,
            "price": 3000,
            "datetime": "2017-01-16T09:00:00+00:00"
          },
          {
            "time": 550,
            "avail": 1,
            "price": 3000,
            "datetime": "2017-01-16T09:10:00+00:00"
          },
          {
            "time": 560,
            "avail": 1,
            "price": 3000,
            "datetime": "2017-01-16T09:20:00+00:00"
          },
          ...
        ],
        "name": "Emma",
        "date": "2017-01-16",
        "event_id": 1091849,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/time_data?event_id=1091849&date=2017-01-16&single=true&num_resources=1&time_zone=Europe%2FLondon"
          }
        }
      },
      ...
      }
  ```
</pre>
         </div>
        </div>
        </div>

**Note:** We recommend that you use shorter date range for better performance.
