# Admin Bookings

The REST API enables the administrator to administer bookings for their company/business. As an administrator you can retrieve all bookings made against your company, create new bookings on behalf of your customers or even cancel/amend bookings if required.

## List Bookings

You can list all the bookings/appointment or filter from the below parameters to achieve your desired results.

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
                <td>integer</td>
                <td>company ID</td>
            </tr>
            <tr>
                <td>start_date</td>
                <td>string</td>
                <td>Start date to search bookings from (ISO-8601 - YYYY-MM-DD) </td>
            </tr>
            <tr>
                <td>end_date</td>
                <td>string</td>
                <td>End date to search bookings from (ISO-8601 - YYYY-MM-DD) </td>
            </tr>
            <tr>
                <td>include_cancelled</td>
                <td>boolean</td>
                <td>true/false</td>
            </tr>
            <tr>
                <td>event_id</td>
                <td>integer</td>
                <td> search bookings by event id </td>
            </tr>
            <tr>
                <td>category_id</td>
                <td>integer</td>
                <td>Search bookings by category id </td>
            </tr>
            <tr>
                <td>start_time</td>
                <td>string</td>
                <td> Start time. 24 hour clock. Format HH:mm. Start date is required </td>
            </tr>
            <tr>
                <td>modified_since</td>
                <td>string</td>
                <td> Only include bookings created after this datetime. Format YYYY-MM-DDTHH:mm:ss </td>
            </tr>
            <tr>
                <td>created_since</td>
                <td>integer</td>
                <td> Only include bookings created after this datetime. Format YYYY-MM-DDTHH:mm:ss </td>
            </tr>
            <tr>
                <td>email</td>
                <td>string</td>
                <td> Only include bookings created with this e-mail address </td>
            </tr>
            <tr>
                <td>page</td>
                <td>integer</td>
                <td> 1 (page number for to filter through pagination) </td>
            </tr>
            <tr>
                <td>per_page</td>
                <td>integer</td>
                <td>100 (number of results to return per page) </td>
            </tr>
            <tr>
                <td>client_id</td>
                <td>integer</td>
                <td> Client id </td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td> Person id</td>
            </tr>
        </tbody>
    </table>


<pre>GET /api/v1/admin/{company_id}/bookings</pre>

<pre>GET /api/v1/admin/{company_id}/bookings/id</pre>

Below is a cURL example on how to retrieve bookings for a given date range and also includes any cancelled bookings. This is an admin API call so you'll need to authenticate and provide the auth-token in the header. If no parameters are appended all bookings will be returned.

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings?start_date=2017-02-27&end_date=2017-03-01&include_cancelled=true"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "total_entries": 191,
    "_embedded": {
        "bookings": [
            {
                "id": 11242802,
                "full_describe": "Microchipping with Test Person  - Consultation Room 1 at Pet Store UK",
                "resource_name": "Consultation Room 1",
                "person_name": "Test Person ",
                "service_name": "Microchipping",
                "resource_id": 43049,
                "member_id": 2897097,
                "client_name": "Jamie Oliver",
                "client_email": "test@outlook.com",
                "client_phone": "",
                "client_mobile": "+44 (0)7989 898989",
                "service_id": 104747,
                "datetime": "2016-07-23T03:30:00+02:00",
                "end_datetime": "2016-07-23T04:00:00+02:00",
                "duration": 30,
                "duration_span": 1800,
                "listed_duration": 30,
                "on_waitlist": false,
                "company_id": 50666,
                "attended": true,
                "booking_updated": "2016-07-21T00:29:59Z",
                "updated_at": "2016-07-20T16:26:37Z",
                "created_at": "2016-07-20T16:26:37Z",
                "client_id": 2897097,
                "person_id": 30553,
                "price": 1500,
                "paid": 0,
                "quantity": 1,
                "is_cancelled": false,
                "multi_status": {},
                "purchase_id": 9732356,
                "purchase_ref": "6obUAooI__TVdBQVOTczMjM1Ng%3D%3D",
                "notes": {
                    "public": [],
                    "private": []
                },
                "channel": "Client",
                "status": 4,
                "_embedded": {
                    "client": {
                        "first_name": "Jamie",
                        "last_name": "Oliver",
                        "wallet_amount": 15,
                        "email": "test@outlook.com",
                        "address1": "",
                        "address2": "",
                        "address3": "",
                        "address4": "",
                        "address5": "",
                        "postcode": "",
                        "country": "United Kingdom",
                        "phone": "",
                        "mobile": "7989898989",
                        "id": 2897097,
                        "member_type": 1,
                        "reference": "",
                        "files": [],
                        "deleted": false,
                        "phone_prefix": "44",
                        "mobile_prefix": "44",
                        "default_company_id": 50666,
                        "q": {},
                        "join_date": "2016-07-11",
                        "time_zone": "Africa/Cairo",
                        "answers": [],
                        "_links": {
                            "self": {
                                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
                            },
                            "bookings": {
                                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings{/id}?client_id=2897097{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
                                "templated": true
                            },
                            "pre_paid_bookings": {
                                "href": "https://{host}.bookingbug.com/api/v1/50666/members/2897097/pre_paid_bookings{?include_invalid,event_id}",
                                "templated": true
                            },
                            "questions": {
                                "href": "https://{host}.bookingbug.com/api/v1/50666/client_details"
                            },
                            "edit": {
                                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097/edit"
                            },
                            "interactions": {
                                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/auditlog/interactions/2897097",
                                "templated": true
                            }
                        }
                    },
                    "answers": []
                },
                "slot_id": 14804598,
                "settings": {},
                "slot_settings": {},
                "answers_summary": [],
                "survey_answers_summary": [],
                "questions": {},
                "min_cancellation_time": "2016-07-22T10:30:00+10:00",
                "mobile": "+44 (0)7989 898989",
                "_links": {
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/11242802?locale=en"
                    },
                    "client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
                    },
                    "comms": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/11242802/comms"
                    },
                    "check_in": {
                        "href": "https://{host}.bookingbug.com/api/v1/bookings/11242802/check_in"
                    },
                    "questions": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/questions?detail_group_id=32705"
                    },
                    "edit": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/11242802/edit{?locale}",
                        "templated": true
                    },
                    "cancel": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/11242802/cancel{?notify,cancel_reason}",
                        "templated": true
                    },
                    "address": {
                        "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
                    },
                    "person": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/people/30553"
                    },
                    "resource": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/resources/43049"
                    },
                    "service": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services/104747"
                    }
                }
            }
  ```
</pre>
        </div>
        </div>
        </div>

## List Child Bookings

If you have a parent/child company setup, you can list bookings by calling the parent company ID by appending `children=true`

<pre>GET /api/v1/admin/{parent_company_id}/bookings?children=true</pre>

Example use-case could be that it is necessary to search for all bookings by a client across all of the companies. This would be achieved using this API call:

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
  'https://{host}.bookingbug.com/api/v1/admin/37003/bookings?children=true&email=client123@company.co.uk' \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'auth-token: {auth-token}}' \
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
    "total_entries": 2,
    "include_cancelled": false,
    "_embedded": {
        "bookings": [
            {
                "id": 355,
                "full_describe": "Queens - Private Bday party - (Chld) 37014",
                "resource_name": "My Resource",
                "service_name": "Service 1",
                "resource_id": 24,
                "member_id": 102,
                "client_name": "John Smith",
                "client_email": "client123@company.co.uk",
                "client_phone": "",
                "client_mobile": "+44 (0)7933 439175",
                "service_id": 48457,
                "datetime": "2018-04-25T18:00:00+01:00",
                "end_datetime": "2018-04-25T22:00:00+01:00",
                "duration": 240,
                "duration_span": 14400,
                "listed_duration": 240,
                "on_waitlist": false,
                "company_id": 37014,
                "company_name": "PZ EVENTS (Chld) 37014",
                "attended": true,
                "booking_updated": "2018-04-25T10:09:38Z",
                "updated_at": "2018-04-25T10:09:19Z",
                "created_at": "2018-04-24T08:56:58Z",
                "client_id": 102,
                "price": 0,
                "paid": 0,
                "quantity": 1,
                "is_cancelled": false,
                "multi_status": {},
                "purchase_id": 323,
                "purchase_ref": "IjT1Kdns-VjzFozfMzIz",
                "event_chain_id": 39,
                "notes": {
                    "public": [],
                    "private": []
                },
                "channel": "Client",
                "status": 4,
                "_embedded": {
                    "client": {
                        "first_name": "John",
                        "last_name": "Smith",
                        "email": "client123@company.co.uk",
                        "address1": "33c Daneshill Road",
                        "address2": "West End",
                        "address3": "Leicester",
                        "address4": "Leicestershire",
                        "postcode": "LE36AN",
                        "country": "United Kingdom",
                        "mobile": "7933439175",
                        "id": 102,
                        "member_type": 1,
                        "reference": "test_customer",
                        "files": [],
                        "deleted": false,
                        "phone_prefix": "44",
                        "mobile_prefix": "44",
                        "default_company_id": 37019,
                        "q": {},
                        "join_date": "2018-04-24",
                        "time_zone": "Europe/London",
                        "locale": "en",
                        "answers": [],
                        "_links": {
                            "self": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/client/102"
                            },
                            "bookings": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/bookings{/id}?client_id=102{&embed,start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id,children,status,category_id,created_since,email,purchase_id}",
                                "templated": true
                            },
                            "pre_paid_bookings": {
                                "href": "https://apidemo.bookingbug.com/api/v1/37014/members/102/pre_paid_bookings{?include_invalid,event_id}",
                                "templated": true
                            },
                            "questions": {
                                "href": "https://apidemo.bookingbug.com/api/v1/37014/client_details"
                            },
                            "edit": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/client/102/edit"
                            },
                            "interactions": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/auditlog/interactions/102",
                                "templated": true
                            }
                        }
                    },
                    "answers": [
                        {
                            "id": 310,
                            "value": "TI4AAKG",
                            "price": 0,
                            "question_id": 1,
                            "admin_only": false,
                            "important": false,
                            "_embedded": {
                                "question": {
                                    "id": 1,
                                    "name": "Car/Bike Registration Number",
                                    "required": true,
                                    "important": false,
                                    "admin_only": false,
                                    "applies_to": 0,
                                    "ask_member": true,
                                    "detail_type": "text_field",
                                    "help_text": "Please fill in your Car Registration Number here",
                                    "settings": {},
                                    "price": 0,
                                    "price_per_booking": false,
                                    "outcome": false,
                                    "_links": {
                                        "self": {
                                            "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/1"
                                        }
                                    }
                                }
                            },
                            "question_text": "Car/Bike Registration Number",
                            "outcome": false,
                            "company_id": 37003,
                            "_links": {
                                "self": {
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/answers/310"
                                },
                                "question": {
                                    "title": "Car/Bike Registration Number",
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/1"
                                }
                            }
                        },
                        {
                            "id": 311,
                            "value": "Mac",
                            "price": 0,
                            "question_id": 39,
                            "admin_only": false,
                            "important": false,
                            "_embedded": {
                                "question": {
                                    "id": 39,
                                    "name": "Operating System",
                                    "required": true,
                                    "important": false,
                                    "admin_only": false,
                                    "applies_to": 0,
                                    "ask_member": true,
                                    "detail_type": "select",
                                    "options": [
                                        {
                                            "name": "Linux",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 24
                                        },
                                        {
                                            "name": "Windows",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 25
                                        },
                                        {
                                            "name": "Mac",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 26
                                        }
                                    ],
                                    "settings": {},
                                    "price": 0,
                                    "price_per_booking": false,
                                    "outcome": false,
                                    "_links": {
                                        "self": {
                                            "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/39"
                                        }
                                    }
                                }
                            },
                            "question_text": "Operating System",
                            "outcome": false,
                            "company_id": 37003,
                            "_links": {
                                "self": {
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/answers/311"
                                },
                                "question": {
                                    "title": "Operating System",
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/39"
                                }
                            }
                        }
                    ]
                },
                "slot_id": 742,
                "settings": {
                    "obfuscated_id": "4mCUoi-rLyRNYZ0T",
                    "who_updated": "member",
                    "alternate_mobile": "+44 (0)7854 015802"
                },
                "slot_settings": {},
                "answers_summary": [
                    {
                        "question_id": 1,
                        "name": "Car/Bike Registration Number",
                        "answer": "TI4AAKG"
                    },
                    {
                        "question_id": 39,
                        "name": "Operating System",
                        "answer": "Mac"
                    }
                ],
                "survey_answers_summary": [],
                "questions": {
                    "1": {
                        "answer": "TI4AAKG",
                        "name": "Car/Bike Registration Number"
                    },
                    "39": {
                        "answer": "Mac",
                        "name": "Operating System"
                    }
                },
                "min_cancellation_time": "2018-04-20T18:00:00+01:00",
                "mobile": "+44 (0)7933 439175",
                "booked_by": "Attendee Thirty",
                "booked_by_email": "pattendee+at30@bookingbug.com",
                "_links": {
                    "self": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/bookings/355?locale=en"
                    },
                    "client": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/client/102"
                    },
                    "comms": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/bookings/355/comms"
                    },
                    "check_in": {
                        "href": "https://apidemo.bookingbug.com/api/v1/bookings/355/check_in"
                    },
                    "event_groups": {
                        "title": "Group 1",
                        "href": "https://apidemo.bookingbug.com/api/v1/37014/event_groups/48457"
                    },
                    "event_chain": {
                        "title": "Queens - Private Bday party",
                        "href": "https://apidemo.bookingbug.com/api/v1/37014/event_chains/39{?member_level_id,embed}",
                        "templated": true
                    },
                    "edit": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/bookings/355/edit{?locale}",
                        "templated": true
                    },
                    "cancel": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/bookings/355/cancel{?notify,cancel_reason}",
                        "templated": true
                    },
                    "address": {
                        "href": "https://apidemo.bookingbug.com/api/v1/37014/addresses/13"
                    },
                    "resource": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/resources/24"
                    },
                    "slot": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/slots/742"
                    },
                    "service": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/services/48457"
                    },
                    "company": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37014/company"
                    }
                }
            },
            {
                "id": 364,
                "full_describe": "Residential Mortgage Appointment - 2y Fixed with Banker29 at Bank (Chld) 37019",
                "person_name": "Banker29",
                "service_name": "Residential Mortgage Appointment - 2y Fixed",
                "member_id": 102,
                "client_name": "John Smith",
                "client_email": "client123@company.co.uk",
                "client_phone": "",
                "client_mobile": "+44 (0)7933 439175",
                "service_id": 48429,
                "datetime": "2018-04-25T14:00:00+01:00",
                "end_datetime": "2018-04-25T15:00:00+01:00",
                "duration": 60,
                "duration_span": 3600,
                "listed_duration": 60,
                "on_waitlist": false,
                "company_id": 37019,
                "company_name": "Bank (Chld) 37019",
                "attended": false,
                "booking_updated": "2018-04-25T10:11:12Z",
                "updated_at": "2018-04-25T10:11:12Z",
                "created_at": "2018-04-25T09:40:24Z",
                "client_id": 102,
                "person_id": 15382,
                "price": 0,
                "paid": 0,
                "quantity": 1,
                "is_cancelled": false,
                "multi_status": {},
                "purchase_id": 339,
                "purchase_ref": "X1V7z7BJ5fmEdNU7MzM5",
                "notes": {
                    "public": [],
                    "private": [
                        {
                            "id": 26,
                            "note": "This is a private note, that was entered from the GUI"
                        }
                    ]
                },
                "channel": "Client",
                "status": 4,
                "_embedded": {
                    "client": {
                        "first_name": "John",
                        "last_name": "Smith",
                        "email": "client123@company.co.uk",
                        "address1": "33c Daneshill Road",
                        "address2": "West End",
                        "address3": "Leicester",
                        "address4": "Leicestershire",
                        "postcode": "LE36AN",
                        "country": "United Kingdom",
                        "mobile": "7854015802",
                        "id": 102,
                        "member_type": 1,
                        "reference": "test_customer",
                        "files": [],
                        "deleted": false,
                        "phone_prefix": "44",
                        "mobile_prefix": "44",
                        "default_company_id": 37019,
                        "q": {},
                        "join_date": "2018-04-24",
                        "time_zone": "Europe/London",
                        "locale": "en",
                        "answers": [],
                        "_links": {
                            "self": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/client/102"
                            },
                            "bookings": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/bookings{/id}?client_id=102{&embed,start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id,children,status,category_id,created_since,email,purchase_id}",
                                "templated": true
                            },
                            "pre_paid_bookings": {
                                "href": "https://apidemo.bookingbug.com/api/v1/37019/members/102/pre_paid_bookings{?include_invalid,event_id}",
                                "templated": true
                            },
                            "questions": {
                                "href": "https://apidemo.bookingbug.com/api/v1/37019/client_details"
                            },
                            "edit": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/client/102/edit"
                            },
                            "interactions": {
                                "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/auditlog/interactions/102",
                                "templated": true
                            }
                        }
                    },
                    "answers": [
                        {
                            "id": 308,
                            "value": "AG09HBY",
                            "price": 0,
                            "question_id": 1,
                            "admin_only": false,
                            "important": false,
                            "_embedded": {
                                "question": {
                                    "id": 1,
                                    "name": "Car/Bike Registration Number",
                                    "required": true,
                                    "important": false,
                                    "admin_only": false,
                                    "applies_to": 0,
                                    "ask_member": true,
                                    "detail_type": "text_field",
                                    "help_text": "Please fill in your Car Registration Number here",
                                    "settings": {},
                                    "price": 0,
                                    "price_per_booking": false,
                                    "outcome": false,
                                    "_links": {
                                        "self": {
                                            "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/1"
                                        }
                                    }
                                }
                            },
                            "question_text": "Car/Bike Registration Number",
                            "outcome": false,
                            "company_id": 37003,
                            "_links": {
                                "self": {
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/answers/308"
                                },
                                "question": {
                                    "title": "Car/Bike Registration Number",
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/1"
                                }
                            }
                        },
                        {
                            "id": 309,
                            "value": "Mac",
                            "price": 0,
                            "question_id": 39,
                            "admin_only": false,
                            "important": false,
                            "_embedded": {
                                "question": {
                                    "id": 39,
                                    "name": "Operating System",
                                    "required": true,
                                    "important": false,
                                    "admin_only": false,
                                    "applies_to": 0,
                                    "ask_member": true,
                                    "detail_type": "select",
                                    "options": [
                                        {
                                            "name": "Linux",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 24
                                        },
                                        {
                                            "name": "Windows",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 25
                                        },
                                        {
                                            "name": "Mac",
                                            "price": 0,
                                            "is_default": false,
                                            "id": 26
                                        }
                                    ],
                                    "settings": {},
                                    "price": 0,
                                    "price_per_booking": false,
                                    "outcome": false,
                                    "_links": {
                                        "self": {
                                            "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/39"
                                        }
                                    }
                                }
                            },
                            "question_text": "Operating System",
                            "outcome": false,
                            "company_id": 37003,
                            "_links": {
                                "self": {
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/answers/309"
                                },
                                "question": {
                                    "title": "Operating System",
                                    "href": "https://apidemo.bookingbug.com/api/v1/37003/questions/39"
                                }
                            }
                        }
                    ]
                },
                "slot_id": 751,
                "settings": {
                    "resource": -1,
                    "person": -1,
                    "earliest_time": "2018-04-25T10:00:00.000Z",
                    "child_clients": [],
                    "obfuscated_id": "Qcss0VtfKEDKXA0v",
                    "who_updated": "member",
                    "alternate_mobile": "+44 (0)7933 439175"
                },
                "slot_settings": {},
                "answers_summary": [
                    {
                        "question_id": 1,
                        "name": "Car/Bike Registration Number",
                        "answer": "AG09HBY"
                    },
                    {
                        "question_id": 39,
                        "name": "Operating System",
                        "answer": "Mac"
                    }
                ],
                "survey_answers_summary": [],
                "questions": {
                    "1": {
                        "answer": "AG09HBY",
                        "name": "Car/Bike Registration Number"
                    },
                    "39": {
                        "answer": "Mac",
                        "name": "Operating System"
                    }
                },
                "private_note": "This is a private note, that was entered from the GUI",
                "min_cancellation_time": "2018-04-24T14:00:00+01:00",
                "mobile": "+44 (0)7933 439175",
                "booked_by": "John Smith",
                "booked_by_email": "client123@company.co.uk",
                "_links": {
                    "self": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/bookings/364?locale=en"
                    },
                    "client": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/client/102"
                    },
                    "comms": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/bookings/364/comms"
                    },
                    "check_in": {
                        "href": "https://apidemo.bookingbug.com/api/v1/bookings/364/check_in"
                    },
                    "questions": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/questions?detail_group_id=18529"
                    },
                    "edit": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/bookings/364/edit{?locale}",
                        "templated": true
                    },
                    "cancel": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/bookings/364/cancel{?notify,cancel_reason}",
                        "templated": true
                    },
                    "address": {
                        "href": "https://apidemo.bookingbug.com/api/v1/37019/addresses/16"
                    },
                    "person": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/people/15382"
                    },
                    "slot": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/slots/751"
                    },
                    "service": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/services/48429"
                    },
                    "company": {
                        "href": "https://apidemo.bookingbug.com/api/v1/admin/37019/company"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://apidemo.bookingbug.com/api/v1/admin/37003/bookings?page=1&per_page=30&include_cancelled=false&locale=en&children=true&email=pzhuravlenko%40yahoo.co.uk"
        }
    }
}
  ```
</pre>
        </div>
        </div>
        </div>

## New Booking

You can create a new booking/appointment in the Bookingbug platform on behalf of the customer or if bookings are only created by an administrator.

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
                <td>integer</td>
                <td>Company id</td>
            </tr>
            <tr>
                <td>datetime</td>
                <td>string</td>
                <td> date & time for booking (2017-03-09T15:43:37.494Z) </td>
            </tr>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>Service id </td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td> Person id</td>
            </tr>
            <tr>
                <td>member_id</td>
                <td>integer</td>
                <td> Member id </td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td> Resource id</td>
            </tr>
            <tr>
                <td>client[first_name]</td>
                <td>string</td>
                <td> Client's first name</td>
            </tr>
            <tr>
                <td>client[last_name]</td>
                <td>string</td>
                <td> Client's last name</td>
            </tr>
            <tr>
                <td>client[email]</td>
                <td>string</td>
                <td> Client's email</td>
            </tr>
            <tr>
                <td>client[mobile_prefix]</td>
                <td>string</td>
                <td> Mobile prefix</td>
            </tr>
            <tr>
                <td>client[mobile]</td>
                <td>string</td>
                <td> Client's Mobile</td>
            </tr>
            <tr>
                <td>client[phone_prefix]</td>
                <td>string</td>
                <td> Phone prefix</td>
            </tr>
            <tr>
                <td>client[phone]</td>
                <td>string</td>
                <td> Client's phone</td>
            </tr>
            <tr>
                <td>client[client_type]</td>
                <td>integer</td>
                <td> Client's type</td>
            </tr>
            <tr>
                <td>client[address1]</td>
                <td>string</td>
                <td> Client's address line 1</td>
            </tr>
            <tr>
                <td>client[address2]</td>
                <td>string</td>
                <td> Client's address line 2</td>
            </tr>
            <tr>
                <td>client[address3]</td>
                <td>string</td>
                <td> Client's address line 3</td>
            </tr>
            <tr>
                <td>client[address4]</td>
                <td>string</td>
                <td> Client's address line 4</td>
            </tr>
            <tr>
                <td>client[address5]</td>
                <td>string</td>
                <td> Client's address line 5</td>
            </tr>
            <tr>
                <td>client[postcode]</td>
                <td>string</td>
                <td> Client's postcode</td>
            </tr>
            <tr>
                <td>client[country]</td>
                <td>string</td>
                <td> Client's country</td>
            </tr>
            <tr>
                <td>notifications</td>
                <td>boolean</td>
                <td> Send email to customer/admin (true/false) </td>
            </tr>
        </tbody>
    </table>

<pre>POST /api/v1/admin/{company_id}/bookings</pre>

Below is a cURL example on how to create a new admin bookings for a given datetime. This is an admin API call so you'll need to authenticate and provide the auth-token in the header.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST -H "App-id: {app-id}" -H "App-key: {app-key}" -H "Auth-Token: {auth-token}"
-H "Content-Type: application/json"
-H "Cache-Control: no-cache"
-d
'{
	"datetime": "2017-03-01T11:00:00",
	"service_id": 104747,
	"resource_id": 43049,
	"member_id": 2897097,
	"person_id": 30553,
	"notification": true
}' "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "id": 13543734,
  "full_describe": "Microchipping with Waqas  - Consultation Room 1 at Waqas Ahmad Child",
  "resource_name": "Consultation Room 1",
  "person_name": "Waqas ",
  "service_name": "Microchipping",
  "resource_id": 43049,
  "member_id": 2897097,
  "client_name": "Jamie Oliver",
  "client_email": "j.oliver@test.com",
  "client_phone": "",
  "client_mobile": "",
  "service_id": 104747,
  "datetime": "2017-03-17T13:00:00+02:00",
  "end_datetime": "2017-03-17T13:15:00+02:00",
  "duration": 15,
  "duration_span": 900,
  "listed_duration": 15,
  "on_waitlist": false,
  "company_id": 50666,
  "attended": true,
  "booking_updated": "2017-03-14T10:46:46Z",
  "updated_at": "2017-03-14T10:46:45Z",
  "created_at": "2017-03-14T10:46:45Z",
  "client_id": 2897097,
  "person_id": 30553,
  "price": 0,
  "paid": 0,
  "quantity": 1,
  "is_cancelled": false,
  "multi_status": {},
  "purchase_id": 11662786,
  "purchase_ref": "IPRrIU2ZneOMjoVOMTE2NjI3ODY%3D",
  "notes": {
    "public": [],
    "private": []
  },
  "channel": "Client",
  "status": 4,
  "_embedded": {
    "client": {
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
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
        },
        "bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings{/id}?client_id=2897097{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
          "templated": true
        },
        "pre_paid_bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/50666/members/2897097/pre_paid_bookings{?include_invalid,event_id}",
          "templated": true
        },
        "questions": {
          "href": "https://{host}.bookingbug.com/api/v1/50666/client_details"
        },
        "edit": {
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097/edit"
        }
      }
    },
    "answers": []
  },
  "slot_id": 17422631,
  "settings": {
    "appian_id": 2313,
    "session_id": 1302
  },
  "slot_settings": {},
  "answers_summary": [],
  "survey_answers_summary": [],
  "questions": {},
  "min_cancellation_time": "2017-03-16T11:00:00+00:00",
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734?locale=en"
    },
    "client": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
    },
    "check_in": {
      "href": "https://{host}.bookingbug.com/api/v1/bookings/13543734/check_in"
    },
    "questions": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/questions?detail_group_id=32705"
    },
    "edit": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/edit{?locale}",
      "templated": true
    },
    "cancel": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/cancel{?notify,cancel_reason}",
      "templated": true
    },
    "address": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
    },
    "person": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/people/30553"
    },
    "resource": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/resources/43049"
    },
    "service": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services/104747"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## New Booking With Client Creation

You can create a new booking/appointment and create the client. The cURL call example below creates a new booking and a new client. All the listed client parameters above are supported.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST -H "App-id: {app-id}" -H "App-key: {app-key}" -H "Auth-Token: {auth-token}"
-H "Content-Type: application/json"
-H "Cache-Control: no-cache"
-d
'{
  "service_id": 48323,
  "datetime": "2017-12-09T13:30:00+03:00",
  "client":{
    "first_name":"Bookingbug",
    "last_name":"Client",
    "email":"booking@email.com"
  }
}' "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings"
  ```
</pre>
        </div>
        </div>
        </div>

## Update Booking

You can update a booking if required. A booking can be moved to a new date/time (if available) or can be moved to a different staff/resource.

<pre>PUT /api/v1/admin/{company_id}/bookings/id</pre>

Below is a cURL example on how to update an existing booking to a new datetime. This is an admin API call so you'll need to authenticate and provide the auth-token in the header.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X PUT -H "App-id: {app-id}" -H "App-key: {app-key}" -H "Auth-token: {auth-token}"
-H "Content-Type: application/json"
-H "Cache-Control: no-cache"
-d
'{
	"datetime": "2017-03-02T11:00:00"
}' "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/{booking_id}"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "id": 13543734,
  "full_describe": "Microchipping with Waqas  - Consultation Room 1 at Waqas Ahmad Child",
  "resource_name": "Consultation Room 1",
  "person_name": "Waqas ",
  "service_name": "Microchipping",
  "resource_id": 43049,
  "member_id": 2897097,
  "client_name": "Jamie Oliver",
  "client_email": "j.oliver@test.com",
  "client_phone": "",
  "client_mobile": "",
  "service_id": 104747,
  "datetime": "2017-03-17T13:00:00+02:00",
  "end_datetime": "2017-03-17T13:15:00+02:00",
  "duration": 15,
  "duration_span": 900,
  "listed_duration": 15,
  "on_waitlist": false,
  "company_id": 50666,
  "attended": true,
  "booking_updated": "2017-03-14T10:46:46Z",
  "updated_at": "2017-03-14T10:46:45Z",
  "created_at": "2017-03-14T10:46:45Z",
  "client_id": 2897097,
  "person_id": 30553,
  "price": 0,
  "paid": 0,
  "quantity": 1,
  "is_cancelled": false,
  "multi_status": {},
  "purchase_id": 11662786,
  "purchase_ref": "IPRrIU2ZneOMjoVOMTE2NjI3ODY%3D",
  "notes": {
    "public": [],
    "private": []
  },
  "channel": "Client",
  "status": 4,
  "_embedded": {
    "client": {
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
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
        },
        "bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings{/id}?client_id=2897097{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
          "templated": true
        },
        "pre_paid_bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/50666/members/2897097/pre_paid_bookings{?include_invalid,event_id}",
          "templated": true
        },
        "questions": {
          "href": "https://{host}.bookingbug.com/api/v1/50666/client_details"
        },
        "edit": {
          "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097/edit"
        }
      }
    },
    "answers": []
  },
  "slot_id": 17422631,
  "settings": {
    "appian_id": 2313,
    "session_id": 1302
  },
  "slot_settings": {},
  "answers_summary": [],
  "survey_answers_summary": [],
  "questions": {},
  "min_cancellation_time": "2017-03-16T11:00:00+00:00",
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734?locale=en"
    },
    "client": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/2897097"
    },
    "check_in": {
      "href": "https://{host}.bookingbug.com/api/v1/bookings/13543734/check_in"
    },
    "questions": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/questions?detail_group_id=32705"
    },
    "edit": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/edit{?locale}",
      "templated": true
    },
    "cancel": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/cancel{?notify,cancel_reason}",
      "templated": true
    },
    "address": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
    },
    "person": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/people/30553"
    },
    "resource": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/resources/43049"
    },
    "service": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services/104747"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

## Cancel Booking

Cancel a booking using the admin booking end-point. When cancelling a booking you can supply cancellation reason with `"cancel_reason": "string"` and notify the user/admin with `"notify": true` parameter.

<pre>POST /api/v1/admin/{company_id}/bookings/{id}/cancel</pre>

Below is an example of cancelling a booking.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X POST -H "App-id: {app-id}" -H "App-key: {app-key}" -H "Auth-Token: {auth-token}"
-H "Content-Type: application/json"
-H "Cache-Control: no-cache"
-d
'{
	"notify": true,
	"cancel_reason": "Private Reason - Datatype = String"
}' "https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/{booking_id}/cancel"
  ```
</pre>
        </div>
        </div>
        </div>

## Add Private Note

Insert private notes directly on a booking. Private notes are only visible to administrator and not customers.

<pre>PUT /api/v1/admin/{company_id}/bookings/{id}/private_notes</pre>

To update an existing private note
<pre>PUT /api/v1/admin/{company_id}/bookings/{id}/private_notes/{id}</pre>

Below is an example of adding a private note on a booking.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X PUT -H "App-id: {app-id}" -H "App-key: {app-key}" -H "Auth-Token: {auth-token}"
-H "Content-Type: application/json"
-H "Cache-Control: no-cache"
-d
	'{
		"note": "This is a private note"
	}'
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings/{booking_id}/private_notes"
  ```
</pre>

        </div>
        <div id="tab-2" class="tab__content">
<pre>
Status 200 OK

```
{
"id": 13543734,
...

"notes": {
	"public": [],
	"private": [
	{
		"id": 1234567,
		"note": "This is a private note"
	}]
},
...
}
```
</pre>
        </div>
        </div>
        </div>
