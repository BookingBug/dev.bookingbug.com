# Purchases 

The purchases API returns a collection of purchases totals. Each booking has a purchase ID and purchases ref, which can be used to lookup the purchases total for a booking.  

## List Purchases

You can get a list of purchases for a given date range using the `created_from` and `created_to` params. `created_from` is required. 

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
                <td>created_from</td>
                <td>string</td>
                <td>Only include bookings created after this datetime (ISO-8601 - YYYY-MM-DD HH:mm:ss)</td>
            </tr>
            <tr>
                <td>created_to</td>
                <td>string</td>
                <td>Only include bookings created before this datetime (ISO-8601 - YYYY-MM-DD HH:mm:ss) </td>
            </tr>
            <tr>
                <td>admin_bookings_only</td>
                <td>boolean</td>
                <td>If true will only return pruchases made be admins</td>
            </tr>
            <tr>
                <td>order_by</td>
                <td>string</td>
                <td>A field name to order the results by </td>
            </tr>
            <tr>
                <td>order_by_reverse</td>
                <td>boolean</td>
                <td>A boolean representing whether or not to return the results in reverse order</td>
            </tr>
        </tbody>
    </table>

<pre>GET /api/v1/admin/{company_id}/purchases</pre>

Below is a cURL example listing all purchases created after 2017-03-01 and before 2017-04-08. This is an admin API call so you'll need to authenticate and provide the auth-token in the header.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json" 
  -H "Cache-Control: no-cache" -H "Auth-Token: {auth-token}"
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/purchases?created_from=2017-03-01T09:00:00&created_to=2017-04-08T12:00:00"
  ```
</pre>

        </div>
        </div>
        </div> 

## Get Purchase

Returns a booking purchase total. The response data also embeds the client (member) and booking data. 

<pre> GET /api/v1/admin/{company_id}/purchases/{id}</pre>

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
"https://{host}.bookingbug.com/api/v1/admin/{company_id}/purchases/11610441"
  ```
</pre>
</div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "total_price": 1500,
  "price": 1500,
  "paid": 1500,
  "deposit": 0,
  "tax_payable_on_price": 0,
  "tax_payable_on_deposit": 0,
  "tax_payable_on_due_now": 0,
  "due_now": 0,
  "long_id": "IDXODKIPiQo321uMMTE2MTA0NDE%3D",
  "id": 11610441,
  "client_name": "Naveed Gladden",
  "created_at": "2017-03-07T09:30:31Z",
  "certificate_paid": 0,
  "payment_type": "online",
  "last_payment_log": {
    "success": true,
    "response": "{\"card_details\":null,\"address\":null,\"response\":null}"
  },
  "payment_reference": [],
  "_embedded": {
    "client": {
      "first_name": "Naveed",
      "last_name": "Gladden",
      "email": "N.Butt@bookingbug.com",
      "address1": "null",
      "address2": "null",
      "address3": "",
      "address4": "",
      "address5": ".",
      "postcode": "null",
      "country": "null",
      "mobile": "12345678910",
      "phone_prefix": "44",
      "mobile_prefix": "44",
      "id": 3056937,
      "answers": [],
      "deleted": false,
      "notifications": {},
      "client_type": "Member",
      "reference": "QWERTY123",
      "_links": {
        "self": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/client/3056937"
        },
        "questions": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/client_details"
        }
      }
    },
    "member": {
      "id": 3056937,
      "name": "Naveed Gladden",
      "first_name": "Naveed",
      "last_name": "Gladden",
      "comp_ref": "QWERTY123",
      "client_type": "Member",
      "email": "N.Butt@bookingbug.com",
      "address1": "null",
      "address2": "null",
      "address3": "",
      "address4": "",
      "address5": ".",
      "postcode": "null",
      "country": "null",
      "phone_prefix": "44",
      "mobile": "12345678910",
      "mobile_prefix": "44",
      "path": "https://{host}.bookingbug.com/api/v1",
      "company_id": 50579,
      "has_active_wallet": false,
      "has_wallet": false,
      "member_level_id": 5,
      "_links": {
        "self": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937{?embed}",
          "templated": true
        },
        "bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937/bookings{?start_date,end_date,include_cancelled,page,per_page}",
          "templated": true
        },
        "pre_paid_bookings": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937/pre_paid_bookings{?include_invalid,event_id}",
          "templated": true
        },
        "purchase_totals": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937/purchase_totals{?start_date,end_date,page,per_page}",
          "templated": true
        },
        "edit_member": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937/edit"
        },
        "company": {
          "href": "https://{host}.bookingbug.com/api/v1/company/50579"
        },
        "update_password": {
          "href": "https://{host}.bookingbug.com/api/v1/login/50579/update_password/3056937"
        },
        "send_welcome_email": {
          "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937/send_welcome_email"
        }
      }
    },
    "bookings": [
      {
        "id": 13477736,
        "full_describe": "Microchipping with Waqas  - Consultation Room 1 at Waqas Ahmad Child",
        "describe": "Fri 10th Mar 11:30am",
        "resource_name": "Consultation Room 1",
        "person_name": "Waqas ",
        "datetime": "2017-03-10T11:30:00+00:00",
        "end_datetime": "2017-03-10T12:00:00+00:00",
        "duration": 30,
        "duration_span": 1800,
        "listed_duration": 30,
        "on_waitlist": false,
        "company_id": 50666,
        "attended": true,
        "price": 1500,
        "due_now": 0,
        "paid": 1500,
        "quantity": 1,
        "service_id": 104747,
        "purchase_id": 11610441,
        "purchase_ref": "IDXODKIPiQo321uMMTE2MTA0NDE%3D",
        "settings": {
          "obfuscated_id": "LOjmIDvhfgjzV_O5"
        },
        "min_cancellation_time": "2017-03-09T11:30:00+00:00",
        "service_name": "Microchipping",
        "time_zone": "Europe/London",
        "address": {
          "id": 52355,
          "name": "London Office",
          "address1": "111 Neville Road",
          "address2": "",
          "address3": "",
          "address4": "",
          "address5": "",
          "postcode": "E11 11",
          "country": "United Kingdom",
          "lat": 52.3284793,
          "long": 0.2788746,
          "map_url": "",
          "map_marker": "111+Neville+Road,+E11+11,+United+Kingdom",
          "phone": "",
          "homephone": "",
          "extra": {},
          "_links": {
            "self": {
              "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
            }
          }
        },
        "booking_type": "Booking",
        "slot_id": 17336880,
        "first_name": "Naveed",
        "last_name": "Gladden",
        "email": "N.Butt@bookingbug.com",
        "_embedded": {
          "answers": [],
          "survey_answers": []
        },
        "_links": {
          "self": {
            "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/bookings/13477736"
          },
          "check_in": {
            "href": "https://{host}.bookingbug.com/api/v1/bookings/13477736/check_in"
          },
          "attachments": {
            "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/bookings/13477736/attach"
          },
          "person": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/people/30553"
          },
          "resource": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/resources/43049"
          },
          "service": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/services/104747"
          },
          "company": {
            "href": "https://{host}.bookingbug.com/api/v1/company/50666"
          },
          "client": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/client/3056937"
          },
          "member": {
            "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937{?embed}",
            "templated": true
          },
          "survey_questions": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/32705/survey_questions{?admin_only}",
            "templated": true
          },
          "address": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
          }
        }
      }
    ],
    "packages": [],
    "products": [],
    "pre_paid_bookings": [],
    "deals": [],
    "course_bookings": [],
    "external_purchases": [],
    "confirm_messages": [
      {
        "id": 76209,
        "message": "Booking Text for confirmation page",
        "message_type": "Confirm",
        "item_type": "Company",
        "_links": {
          "self": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/booking_text/76209"
          },
          "item": {
            "href": "https://{host}.bookingbug.com/api/v1/company/50666"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D"
    },
    "ical": {
      "href": "http://{host}.bookingbug.com/ical/total/IDXODKIPiQo321uMMTE2MTA0NDE%3D"
    },
    "web_cal": {
      "href": "webcal://{host}.bookingbug.com/ical/total/IDXODKIPiQo321uMMTE2MTA0NDE%3D"
    },
    "gcal": {
      "href": "http://www.google.com/calendar/event?dates=20170310T113000Z%2F20170310T120000Z&details=&location=Consultation+Room+1&sprop=www.bookingbug.com&text=Booking%3A+Microchipping+with+Waqas++at+Waqas+Ahmad+Child&trp=false&action=TEMPLATE"
    },
    "client": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/client/3056937"
    },
    "member": {
      "href": "https://{host}.bookingbug.com/api/v1/50579/members/3056937{?embed}",
      "templated": true
    },
    "company": {
      "href": "https://{host}.bookingbug.com/api/v1/company/50666"
    },
    "bookings": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/bookings"
    },
    "packages": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/packages"
    },
    "pre_paid_bookings": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/pre_paid_bookings"
    },
    "products": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/products"
    },
    "deals": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/deals"
    },
    "confirm_messages": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/confirm_messages"
    },
    "book_waitlist_item": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/book_waitlist_item"
    },
    "external_purchases": {
      "href": "https://{host}.bookingbug.com/api/v1/purchases/IDXODKIPiQo321uMMTE2MTA0NDE%3D/external_purchases"
    },
    "print": {
      "href": "/angular/print_purchase.html?id=IDXODKIPiQo321uMMTE2MTA0NDE%3D&company_id=50666"
    },
    "paypal_express": {
      "href": "/pay/paypal_express/IDXODKIPiQo321uMMTE2MTA0NDE%3D{?landing_page,allow_guest_checkout,allow_note,logo_image,max_amount,no_shipping,allowed_payment_method}",
      "templated": true,
      "type": "location"
    }
  }
}
```
</pre>
</div>
        </div>
        </div>
        </div> 