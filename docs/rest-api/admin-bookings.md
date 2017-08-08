# Admin Bookings

The REST API enables the administrator to administer bookings for their company/business. As an administrator you can retrieve all bookings made against your company, create new bookings on behalf of your customers or even cancel/amend bookings if requried. 

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
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: {auth-token}"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/bookings?start_date=2017-02-27&end_date=2017-03-01&include_cancelled=true"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_entries": 1,
  "_embedded": {
    "bookings": [
      {
        "id": 13244892,
        "full_describe": "Swimming lessons at Waqas Ahmad Child",
        "service_name": "Tennis Course",
        "member_id": 3056937,
        "client_name": "Test Gladden",
        "client_email": "test@bookingbug.com",
        "client_phone": "",
        "client_mobile": "+44 (0)1234 5678910",
        "service_id": 107615,
        "datetime": "2017-02-27T17:00:00+00:00",
        "end_datetime": "2017-02-27T18:00:00+00:00",
        "duration": 60,
        "duration_span": 3600,
        "listed_duration": 60,
        "on_waitlist": false,
        "company_id": 50666,
        "attended": true,
        "booking_updated": "2017-02-11T01:32:59Z",
        "updated_at": "2017-02-10T16:48:00Z",
        "created_at": "2017-02-10T16:44:19Z",
        "client_id": 3056937,
        "price": 2500,
        "paid": 0,
        "quantity": 1,
        "is_cancelled": false,
        "multi_status": {},
        "purchase_id": 11418579,
        "purchase_ref": "2xzx3njfq3VGSDz1MTE0MTg1Nzk%3D",
        "event_chain_id": 274101,
        "notes": {
          "public": [],
          "private": []
        },
        "channel": "Administrator",
        "user_id": 29273,
        "status": 4,
        "_embedded": {
          "client": {
            "first_name": "Test",
            "last_name": "Gladden",
            "email": "test@bookingbug.com",
            "address1": "null",
            "address2": "null",
            "address3": "",
            "address4": "",
            "address5": ".",
            "postcode": "null",
            "country": "null",
            "mobile": "12345678910",
            "id": 3056937,
            "member_type": 1,
            "reference": "QWERTY123",
            "files": [],
            "answers": [],
            "deleted": false,
            "phone_prefix": "44",
            "mobile_prefix": "44",
            "q": {},
            "_links": {
              "self": {
                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/3056937"
              },
              "bookings": {
                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings{/id}?client_id=3056937{&start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
                "templated": true
              },
              "pre_paid_bookings": {
                "href": "https://{host}.bookingbug.com/api/v1/50666/members/3056937/pre_paid_bookings{?include_invalid,event_id}",
                "templated": true
              },
              "questions": {
                "href": "https://{host}.bookingbug.com/api/v1/50666/client_details"
              },
              "edit": {
                "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/3056937/edit"
              }
            }
          },
          "answers": [
            {
              "id": 16551345,
              "value": "Yes",
              "price": 0,
              "question_id": 31501,
              "admin_only": false,
              "important": false,
              "_embedded": {
                "question": {
                  "id": 31501,
                  "name": "Are you looking for a new career",
                  "required": false,
                  "important": false,
                  "admin_only": false,
                  "applies_to": 0,
                  "ask_member": true,
                  "detail_type": "text_field",
                  "default": "Yes",
                  "options": [
                    {
                      "name": "Yes",
                      "price": 0,
                      "is_default": false,
                      "id": 57418
                    },
                    {
                      "name": "No",
                      "price": 0,
                      "is_default": false,
                      "id": 57419
                    }
                  ],
                  "settings": {},
                  "price": 0,
                  "price_per_booking": false,
                  "outcome": false,
                  "_links": {
                    "self": {
                      "href": "https://{host}.bookingbug.com/api/v1/50579/questions/31501"
                    }
                  }
                }
              },
              "question_text": "Are you looking for a new career",
              "outcome": false,
              "company_id": 50579,
              "_links": {
                "self": {
                  "href": "https://{host}.bookingbug.com/api/v1/50579/answers/16551345"
                },
                "question": {
                  "title": "Are you looking for a new career",
                  "href": "https://{host}.bookingbug.com/api/v1/50579/questions/31501"
                }
              }
            },
            {
              "id": 16551346,
              "value": "",
              "price": 0,
              "question_id": 31718,
              "admin_only": false,
              "important": false,
              "_embedded": {
                "question": {
                  "id": 31718,
                  "name": "What is your age",
                  "required": false,
                  "important": false,
                  "admin_only": false,
                  "applies_to": 0,
                  "ask_member": true,
                  "detail_type": "text_field",
                  "settings": {},
                  "price": 0,
                  "price_per_booking": false,
                  "outcome": false,
                  "_links": {
                    "self": {
                      "href": "https://{host}.bookingbug.com/api/v1/50579/questions/31718"
                    }
                  }
                }
              },
              "question_text": "What is your age",
              "outcome": false,
              "company_id": 50579,
              "_links": {
                "self": {
                  "href": "https://{host}.bookingbug.com/api/v1/50579/answers/16551346"
                },
                "question": {
                  "title": "What is your age",
                  "href": "https://{host}.bookingbug.com/api/v1/50579/questions/31718"
                }
              }
            },
            {
              "id": 16551347,
              "value": "",
              "price": 0,
              "question_id": 32891,
              "admin_only": false,
              "important": false,
              "_embedded": {
                "question": {
                  "id": 32891,
                  "name": "have you been here before?",
                  "required": false,
                  "important": false,
                  "admin_only": false,
                  "applies_to": 0,
                  "ask_member": true,
                  "detail_type": "text_field",
                  "options": [
                    {
                      "name": "yes",
                      "price": 0,
                      "is_default": false,
                      "id": 59581
                    },
                    {
                      "name": "no",
                      "price": 0,
                      "is_default": false,
                      "id": 59582
                    }
                  ],
                  "settings": {},
                  "price": 0,
                  "price_per_booking": false,
                  "outcome": false,
                  "_links": {
                    "self": {
                      "href": "https://{host}.bookingbug.com/api/v1/50579/questions/32891"
                    }
                  }
                }
              },
              "question_text": "have you been here before?",
              "outcome": false,
              "company_id": 50579,
              "_links": {
                "self": {
                  "href": "https://{host}.bookingbug.com/api/v1/50579/answers/16551347"
                },
                "question": {
                  "title": "have you been here before?",
                  "href": "https://{host}.bookingbug.com/api/v1/50579/questions/32891"
                }
              }
            }
          ]
        },
        "slot_id": 16938544,
        "settings": {
          "obfuscated_id": "bn{host}Fmt8CbzTLib2"
        },
        "slot_settings": {},
        "answers_summary": [
          {
            "question_id": 31501,
            "name": "Are you looking for a new career",
            "answer": "Yes"
          },
          {
            "question_id": 31718,
            "name": "What is your age",
            "answer": ""
          },
          {
            "question_id": 32891,
            "name": "have you been here before?",
            "answer": ""
          }
        ],
        "survey_answers_summary": [],
        "questions": {
          "31501": {
            "answer": "Yes",
            "name": "Are you looking for a new career"
          },
          "31718": {
            "answer": "",
            "name": "What is your age"
          },
          "32891": {
            "answer": "",
            "name": "have you been here before?"
          }
        },
        "min_cancellation_time": "2017-02-25T17:00:00+00:00",
        "mobile": "+44 (0)1234 5678910",
        "_links": {
          "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13244892?locale=en"
          },
          "client": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client/3056937"
          },
          "check_in": {
            "href": "https://{host}.bookingbug.com/api/v1/bookings/13244892/check_in"
          },
          "event_groups": {
            "title": "Tennis Course",
            "href": "https://{host}.bookingbug.com/api/v1/50666/event_groups/107615"
          },
          "event_chain": {
            "title": "Swimming lessons",
            "href": "https://{host}.bookingbug.com/api/v1/50666/event_chains/274101{?member_level_id,embed}",
            "templated": true
          },
          "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13244892/edit{?locale}",
            "templated": true
          },
          "cancel": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13244892/cancel{?notify,cancel_reason}",
            "templated": true
          },
          "address": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
          },
          "service": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services/107615"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings?start_date=2017-02-27&end_date=2017-03-01&page=1&per_page=30&locale=en"
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
curl -X POST -H "App-id: {app-id}" -H "App-key: {app-key}" -H "auth-token: {auth-token}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
'{
	"datetime": "2017-03-01T11:00:00",
	"service_id": 104747,
	"resource_id": 43049,
	"member_id": 2897097,
	"person_id": 30553,
	"notification": true
}' "https://{host}.bookingbug.com/api/v1/admin/50666/bookings"
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
curl -X PUT -H "App-id: {app-id}" -H "App-key: {app-key}" -H "auth-token: {auth-token}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
'{
	"datetime": "2017-03-02T11:00:00"
}' "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734"
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

Cancel a booking using the admin booking end-point. When caneclling a booking you can supply cancellation reason with `"cancel_reason": "string"` and notify the user/admin with `"notify": true`

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
curl -X POST -H "App-id: {app-id}" -H "App-key: {app-key}" -H "auth-token: {auth-token}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
'{
	"notify": true,
	"cancel_reason": "String"
}' "https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/cancel"
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
curl -X PUT -H "App-id: {app-id}" -H "App-key: {app-key}" -H "auth-token: {auth-token}" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
	'{
		"note": "This is a private note"
	}' 
"https://{host}.bookingbug.com/api/v1/admin/50666/bookings/13543734/private_notes"
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