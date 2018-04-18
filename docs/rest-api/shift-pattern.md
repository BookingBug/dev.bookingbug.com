# Shift Patterns

## Schedule Rules (Legacy)

Historically via BB API's schedules were supported as part of configuration for a staff member as a business entity. This feature will eventually will be decommissioned and replaced by the Shift Patterns. The decommissioning will be announced well in advance in the future.

Legacy schedules were created and applied to a member of staff using this API call:

<pre>POST /api/v1/admin/{company_id}/people</pre>

In the example below we creating a new staff member and assigning it a schedule.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST \
  https://{host}.bookingbug.com/api/v1/admin/{company_id}/people \
  -H 'app-id: {app-id}' \
  -H 'auth-token: {auth-token}' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
 "name": "John Smith",
 "description": "This is a standard Johns Schedule",
 "email": "jsmith@example.com",
 "notify": false,
 "schedule": {
 "rules":{
 "2018-04-02": "0800-1700",
 "2018-04-03": "0800-1700",
 "2018-04-04": "0800-1700",
 "2018-04-05": "0800-1700",
 "2018-04-06": "0800-1700",
 "2018-04-07": "0800-1700",
 "2018-04-08": "0800-1700",
 "2018-04-09": "0800-1700",
 "2018-10-20": "0800-1700"
 },
 "style": 0
 }
}'
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
response needs to go here
  ```
</pre>
        </div>
        </div>
        </div>

This allows to set the specific hours and days for a member of staff.

With a rise of mobility of staff in modern consumer world a new feature was developed to tackle flexible shift patterns for employees. Assuming a multiple branch/company setup, it is a best practice to create members of staff at the HQ / Parent branch and then configure in which branch/es a member of staff will operate in. After this has been decided the next challenge is to configure their shift patterns.

## Known Limitation

- If a shift pattern has been configured on a member of Staff, this shift pattern cannot be edited via Classic version of the GUI, only using Studio UI or via API using Shift Patterns.

Essentially there are 4 significant API endpoints for Shift Patterns. They are as follow:

*=* Admin Schedule
*=* Admin Shift Pattern
*=* Admin Shift Pattern Condition (Optional)
*=* Admin Shift

It will be necessary to have an admin access to the BookingBug account and auth-token will be needed to run any of these API calls along with app-key and app-id or just app-id combination.

## Admin Schedule

This API endpoint will LIST all of the available schedules that exist on the BookingBug account. Should it be necessary to check a schedule in details, it is possible to Read a specific schedule. A schedule can contain many shift patterns. Collectively they determine the times that the service/person/resource associated with the schedule, is available. The schedule can be applied to 1 member of staff or many members of staff can have the same schedule.

### Parameters
<table class="pure-table">
    <thead>
        <tr>
            <th>Paramater</th>
            <th>Datatype</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>Name of the schedule</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
            <td>Description of the schedule for a member(s) of staff / Specific staff group. Describe the boundaries of this specific schedule and who it will be applied to.</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/schedules</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST \
  https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {App-key}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'auth-token: {auth-token}' \
  -d '{
    "name": "Johns working Schedule - contractor",
    "rules": {}
}'
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
response here
  ```
</pre>
        </div>
        </div>
        </div>

After a shift pattern is configured for a staff (person) in the API response it is possible to see the href links for creation of shift pattern and shift pattern condition. This is only available for person business entity because staff are likely to move as opposed to moving resources or other business entities.

## Admin Shift Pattern

This API endpoint is used to specify the exact working pattern for a member of staff. It is possible to configure the start date, end time, occurrence, exclusions and repeat count along with other parameters. As mentioned previously, a shift pattern can contain many shift patterns. A schedule in conjunction with a shift pattern determine the times that the service/person/resource associated with a schedule, is available.
The except_date attribute is an array of dates that the shifts will not occur on, cancelling out the recurrence pattern for that date. Common use-case example for this would be: public holidays when the banks are closed.
The end of the shift pattern is indicated by either the end_date or repeat_count (the number of days or weeks that the pattern runs for).

### Parameters
<table class="pure-table">
    <thead>
        <tr>
            <th>Paramater</th>
            <th>Datatype</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>start_date</td>
            <td>string</td>
            <td>ISO-8601 date (YYYY-MM-DD), example: 2018-11-25</td>
        </tr>
        <tr>
            <td>end_date</td>
            <td>string</td>
            <td>(End date is optional, duration can also be configured by repeat_count param) ISO-8601 date (YYYY-MM-DD)</td>
        </tr>
        <tr>
            <td>end_date</td>
            <td>string</td>
            <td>(End date is optional, duration can also be configured by repeat_count param) ISO-8601 date (YYYY-MM-DD)</td>
        </tr>
        <tr>
            <td>start_time</td>
            <td>string</td>
            <td>Start time of the shift, example: ‘10:00’</td>
        </tr>
        <tr>
            <td>end_time</td>
            <td>string</td>
            <td>End time of the shift, example: ‘18:00’</td>
        </tr>
        <tr>
            <td>frequency</td>
            <td>string</td>
            <td>Frequency of how often the shifts will occur. Options available are either 'daily' or 'weekly'. Daily is set to be the default.</td>
        </tr>
        <tr>
            <td>interval</td>
            <td>integer</td>
            <td>The duration between shift occurrences as a multiple of frequency.</td>
        </tr>
        <tr>
            <td>repeat_count</td>
            <td>integer</td>
            <td>The number of shift occurrences.</td>
        </tr>
        <tr>
            <td>by_day</td>
            <td>array</td>
            <td>The days of the week a weekly shift pattern occurs on.</td>
        </tr>
        <tr>
            <td>except_date</td>
            <td>array</td>
            <td>List of dates where the shift pattern does not apply.</td>
        </tr>
        <tr>
            <td>shift_pattern_condition_id</td>
            <td>integer</td>
            <td>(Optional) Enter the id of the Shift Pattern Condition which will apply colour and companies to which this shift pattern will apply to.</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{parent_company_id}/schedules/{schedule_id}/shift_patterns</pre>

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST \
https://{host}.bookingbug.com/api/v1/admin/{parent_company_id}/schedules/{schedule_id}/shift_patterns \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Auth-Token: {auth-token}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
 "start_date": "2018-04-01",
 "start_time": "09:00",
 "end_time": "18:00",
 "frequency": "weekly",
 "interval": 1,
 "repeat_count": 52,
 "by_day": [ "Monday", "Tuesday", “Wednesday”, “Thursday”, “Friday” ],
 "except_date": [ "2018-04-05", "2018-04-09" ],
 "shift_pattern_condition_id": 2
}'
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
response here
  ```
</pre>
        </div>
        </div>
        </div>

## Admin Shift

This API endpoint is useful for looking up the occurrences of shift patterns during the specified date range. Editing of the shift pattern can either be done against the actual shift pattern or by editing the shifts directly, but deleting a shift will remove that date occurrence from the shift pattern. This API endpoint is useful for seeing which members of staff are working which shifts given a specific date range.

<pre>GET /api/v1/admin/{company_id}/schedules/{schedule_id}/shifts?start_date=2018-04-01&end_date=2018-04-14</pre>


### Parameters
<table class="pure-table">
    <thead>
        <tr>
            <th>Paramater</th>
            <th>Datatype</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>start_date</td>
            <td>string</td>
            <td>Start Date in ISO-8601</td>
        </tr>
        <tr>
            <td>end_date</td>
            <td>string</td>
            <td>End Date in ISO-8601</td>
        </tr>
    </tbody>
</table>

Show me all shifts for the next 2 weeks from today (10/04/2018) example:

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
'https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/{schedule_id}/shifts?start_date=2018-04-01&end_date=2018-04-14' \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Auth-Token: {auth-token}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
Output here
  ```
</pre>
        </div>
        </div>
        </div>
