# Shift Patterns

This guide will explain how to work with shift patterns and their purpose. Before understanding the shift patterns, it is useful to know the historical method of how schedules have been created via API.

## Schedule Rules (Legacy)

Historically via Bookingbug API's schedules were supported as part of configuration for a staff member as a business entity. This feature will eventually will be decommissioned and replaced by the Shift Patterns. The decommissioning will be announced well in advance in the future.

Legacy schedules were created and applied to a member of staff using this API call:

<pre>POST /api/v1/admin/{company_id}/people</pre>

In the example below we are creating a new staff member and assigning a schedule to it.

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
{
    "id": 15396,
    "name": "John Smith",
    "description": "This is a standard Johns Schedule",
    "type": "person",
    "extra": {},
    "deleted": false,
    "disabled": false,
    "company_id": 37019,
    "order": 15396,
    "phone_prefix": "44",
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/people/15396"
        },
        "items": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/items?person_id=15396"
        },
        "images": {
            "href": "https://{host}.bookingbug.com/api/v1/37019/media/person_images/15396"
        },
        "companies": [
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/company"
            }
        ],
        "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/people/15396/edit"
        },
        "attendance": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/people/15396/attendance"
        },
        "block": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/people/15396/block"
        },
        "cal": {
            "href": "http://{host}.bookingbug.com/ical/person/15396?calid=1405542703"
        },
        "schedule": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/schedules/48492{?start_date,end_date}",
            "templated": true
        },
        "enabled_services": [
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48429"
            },
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48430"
            },
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48432"
            },
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48446"
            },
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48447"
            },
            {
                "href": "https://{host}.bookingbug.com/api/v1/admin/37019/services/48448"
            }
        ],
        "enabled_resources": []
    },
    "_embedded": {},
    "email": "jsmith@example.com",
    "mobile": "",
    "queuing_disabled": true,
    "person_companies": [
        37019
    ],
    "never_booked": false,
    "resource_ids": [],
    "service_ids": [
        48429,
        48430,
        48432,
        48446,
        48447,
        48448
    ]
}
  ```
</pre>
        </div>
        </div>
        </div>

To verify the schedule creation, you may use these API endpoints:
List all of the schedules
<pre>GET /api/v1/admin/{company_id}/schedules</pre>
Read a particular schedule
<pre>GET /api/v1/admin/{company_id}/schedules/{schedule_id}</pre>

As per example above, it was possible to set the specific hours and days for a member of staff for heir schedule.

With a rise of mobility of staff in modern consumer world a new feature was developed to tackle flexible shift patterns for employees. Assuming a multiple branch/company setup, it is a best practice to create members of staff at the HQ / Parent branch and then configure in which branch/es a member of staff will operate in. After this has been decided the next challenge is to configure their shift patterns.

## Known Limitation

- If a shift pattern has been configured on a member of Staff, this shift pattern cannot be edited via Classic version of the GUI, only using Studio UI or via API using Shift Patterns.

Essentially there are 4 significant API endpoints for Shift Patterns. They are as follow:

- Admin Schedule
- Admin Shift Pattern
- Admin Shift Pattern Condition (Optional)
- Admin Shift

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
{
    "company_id": 37019,
    "day_schedule_id": null,
    "desc": null,
    "duration": 60,
    "id": 48494,
    "name": "Johns working Schedule - contractor",
    "rules": {},
    "schedule_type": 0,
    "style": 0,
    "uses_shift_patterns": false,
    "week_start": 0
}
  ```
</pre>
        </div>
        </div>
        </div>

After a shift pattern is configured for a staff (person) in the API response it is possible to see the href links for creation of shift pattern and shift pattern condition. This is only available for person business entity because staff are likely to move as opposed to moving resources or other business entities.

## Admin Shift Pattern

This API endpoint is used to specify the exact working pattern for a member of staff. As mentioned previously, a schedule can contain many shift patterns. A schedule in conjunction with a shift pattern determine the availability (the time) for a service/person/resource that is associated with a schedule.
The except_date attribute is an array of dates that the shifts will not occur on, cancelling out the recurrence pattern for that date. Common use-case example for this would be: public holidays when the banks are closed. The end of the shift pattern is indicated by either the end_date or repeat_count (the number of days or weeks that the pattern runs for).

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
            <td>(Optional) Duration can also be configured by repeat_count param using format ISO-8601 example date (YYYY-MM-DD)</td>
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
 "by_day": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
 "except_date": [ "2018-04-07", "2018-04-28" ]
}'
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "id": 11,
    "company_id": 37019,
    "schedule_id": 48494,
    "start_date": "2018-05-01",
    "end_date": "2019-04-29",
    "start_time": "09:00",
    "end_time": "18:00",
    "frequency": "weekly",
    "interval": 1,
    "repeat_count": 52,
    "by_day": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ],
    "except_date": [
        "2018-05-07",
        "2018-04-28"
    ],
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
        },
        "schedule": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37019/schedules/48494?start_date=2018-05-01&end_date=2019-04-29"
        },
        "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11/edit"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>

## Admin Shift Pattern Condition (Optional)

It is possible to limit the amount of companies in which the shift pattern can be used in. If a member of staff is configured to work in 2 branches / companies out of 4, for example, Branch “A” - Mon- Tues and Branch “B” Wed-Friday, then using the companies parameter, it is possible to apply this restriction. Additionally, this API endpoint will allow to set the colour in the schedule editor in Studio version of the BookingBug interface. Additionally, For example:

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
            <td>Name of the Admin Shift Pattern Condition</td>
        </tr>
        <tr>
            <td>color</td>
            <td>string</td>
            <td>Available colours are: "red", "blue", "orange", "indigo", "yellow", "violet", "olive", "salmon", "sienna", "crimson", "gold", "orchid", "peru", "teal", "purple", "tomato", "lime", "royalblue" Or it is also possible to specify the colours in Hexadecimal, for example for Red use: "#ff0000"</td>
        </tr>
        <tr>
            <td>company_ids</td>
            <td>array</td>
            <td>(Optional) It is possible to specify an array of company id’s similar to this example: [37005, 37014]</td>
        </tr>
    </tbody>
</table>

<pre>POST /api/v1/admin/{company_id}/schedules/{schedule_id}/shift_pattern_conditions</pre>

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
https://{host}.bookingbug.com/api/v1/admin/{company_id}/schedules/{schedule_id}/shift_pattern_conditions \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Auth-Token: {auth-token}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '  {
    "name": "Johns Shift Pattern Condition",
    "color": "royalblue",
    "company_ids": [37005]
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
curl -X GET \
  'https://{host}.bookingbug.com/api/v1/admin/37019/schedules/48494/shifts?start_date=2018-05-01&end_date=2018-05-14' \
  -H 'App-key: {app-key}' \
  -H 'Cache-Control: no-cache' \
  -H 'app-id: {app-id}' \
  -H 'auth-token: {auth-token}}' \
  -H 'content-type: application/json' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "_embedded": {
        "shifts": [
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-01",
                "start": "2018-05-01T09:00",
                "end": "2018-05-01T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-01-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-02",
                "start": "2018-05-02T09:00",
                "end": "2018-05-02T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-02-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-03",
                "start": "2018-05-03T09:00",
                "end": "2018-05-03T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-03-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-04",
                "start": "2018-05-04T09:00",
                "end": "2018-05-04T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-04-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-08",
                "start": "2018-05-08T09:00",
                "end": "2018-05-08T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-08-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-09",
                "start": "2018-05-09T09:00",
                "end": "2018-05-09T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-09-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-10",
                "start": "2018-05-10T09:00",
                "end": "2018-05-10T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-10-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-11",
                "start": "2018-05-11T09:00",
                "end": "2018-05-11T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-11-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            },
            {
                "shift_pattern_id": 11,
                "company_id": 37019,
                "schedule_id": 48494,
                "date": "2018-05-14",
                "start": "2018-05-14T09:00",
                "end": "2018-05-14T18:00",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts/2018-05-14-11"
                    },
                    "shift_pattern": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shift_patterns/11"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/37003/schedules/48494/shifts"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>
