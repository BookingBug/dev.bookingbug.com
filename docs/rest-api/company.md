# Company

A Company API Endpoint in BookingBug represents a set of Services / Events, Staff who can carry out the service, customers and other business logic. A Company in BookingBug could represent either of the following business entities: Walk in Branch, Centre, Retail Store, Office Location or any other similar set of services / events that a Business can carry out. The company end-point will show all of the links and properties of a company. If you have a parent/child setup, you can define the parent company ID and all the child companies will be embedded in the response. This is an admin API call so you'll need to authenticate and provide the auth-token in the header. Using the Company API endpoint, it is possible to: `read`, `update`, <a href="docs/rest-api/company#Delete">delete</a>, `find a company by reference`, `retrieve settings` and `retrieve addresses`.

<pre>GET /api/v1/admin/{company_id}/company</pre>

In the example below we are only retrieving information for a child company using `READ` method.

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
 https://{host}.bookingbug.com/api/v1/admin/{company_id}/company \
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
  "id": 50666,
  "name": "Test Child Company",
  "description": "This is a test company",
  "address_id": 52355,
  "website": "www.test.com",
  "multi_status": [
    "no_show",
    "checked_in",
    "completed"
  ],
  "numeric_widget_id": 3458242,
  "currency_code": "GBP",
  "timezone": "Europe/London",
  "country_code": "gb",
  "live": true,
  "_embedded": {
    "settings": {
      "has_coupons": true,
      "has_deals": true,
      "has_products": true,
      "has_services": true,
      "has_events": true,
      "has_classes": true,
      "payment_tax": 0,
      "currency": "GBP",
      "requires_login": false,
      "has_wallets": false,
      "_links": {
        "self": {
          "href": "https://{host}.bookingbug.com/api/v1/50666/settings"
        }
      }
    }
  },
  "_links": {
    "parent": {
      "href": "https://{host}.bookingbug.com/api/v1/company/50579"
    },
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/company"
    },
    "settings": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/settings"
    },
    "services": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services"
    },
    "categories": {
      "href": "https://{host}.bookingbug.com/api/v1/50579/categories{/id}",
      "templated": true
    },
    "address": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/52355"
    },
    "addresses": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/addresses"
    },
    "book": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
      "templated": true
    },
    "space_statuses": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/space_statuses"
    },
    "named_categories": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/named_categories"
    },
    "people": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/people{?embed}",
      "templated": true
    },
    "clinics": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/clinics{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id,person_id}",
      "templated": true
    },
    "events": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/events{?start_date,end_date,page,per_page,resource_id,person_id,event_group_id,event_chain_id,summary,member_level_id,embed,include_non_bookable,modified_since}",
      "templated": true
    },
    "event_chains": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/event_chains{?member_level_id}"
    },
    "event_groups": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/event_groups{?page,per_page}",
      "templated": true
    },
    "client_details": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/client_details"
    },
    "packages": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/packages"
    },
    "bulk_purchases": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/bulk_purchases"
    },
    "checkout": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/basket/checkout{?member_id,take_from_wallet}"
    },
    "total": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/purchase_totals/{total_id}",
      "templated": true
    },
    "login": {
      "href": "https://{host}.bookingbug.com/api/v1/login/50666"
    },
    "client": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client{/id}{?page,per_page,filter_by,filter_by_fields,order_by,order_by_reverse,search_by_fields}",
      "templated": true
    },
    "client_by_email": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/client/find_by_email/{email}",
      "templated": true
    },
    "booking_text": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/booking_text"
    },
    "basket": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/basket"
    },
    "days": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/day_data{?month,week,date,edate,location,service_id,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
      "templated": true
    },
    "times": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/time_data{?service_id,event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
      "templated": true
    },
    "coupon": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/basket/coupon"
    },
    "email_password_reset": {
      "href": "https://{host}.bookingbug.com/api/v1/login/50666/email_password_reset"
    },
    "member_levels": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/membership_levels"
    },
    "facebook_login": {
      "href": "https://{host}.bookingbug.com/api/v1/login/50666/facebook"
    },
    "new_person": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/people/new{?signup}",
      "templated": true
    },
    "schedules": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/schedules{?start_date,end_date,page,per_page}",
      "templated": true
    },
    "new_schedule": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/schedules/new",
      "templated": true
    },
    "administrators": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/administrators"
    },
    "new_administrator": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/administrators/new",
      "templated": true
    },
    "slots": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/slots{?start_date,end_date,date,resource_id,service_id,person_id,page,per_page}",
      "templated": true
    },
    "new_event_chain": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/event_chains/new",
      "templated": true
    },
    "new_event_group": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/event_groups/new",
      "templated": true
    },
    "new_address": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/addresses/new",
      "templated": true
    },
    "calendar_events": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/calendar_events{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id}",
      "templated": true
    },
    "new_service": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/services/new",
      "templated": true
    },
    "bookings": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/bookings{/id}{?start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,client_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id}",
      "templated": true
    },
    "queuers": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/queuers{?client_queue_ids}",
      "templated": true
    },
    "client_queues": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/client_queues"
    },
    "new_queuer": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/queuers/new",
      "templated": true
    },
    "pusher": {
      "href": "https://{host}.bookingbug.com/api/v1/push/50666/pusher.json"
    },
    "external_bookings": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/external_bookings{?start,end}",
      "templated": true
    },
    "audit_details_search": {
      "href": "https://{host}.bookingbug.com/api/v1/admin/50666/auditlog/details_search"
    }
  }
}
```

</pre>
</div>
</div>
</div>

## Update Company

It is programatically possible update a company with the parameters listed below. This functionality replaces the manual input from the GUI and is useful if there is a need to automatically update many companies at once. Depending on your business setup, your Business may have many different child companies/branches with unique services in each.

### Parameter for Company Update

<table class="pure-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DataType</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>A name of a Child/Parent company</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>string</td>
                        <td>Description of the company and it's function, services / events that it offers e.g.</td>
                    </tr>
                    <tr>
                        <td>timezone</td>
                        <td>string</td>
                        <td>Time zone of where the company is located for example: "Europe/London"</td>
                    </tr>
                    <tr>
                        <td>website</td>
                        <td>string</td>
                        <td>Here it is possible to enter the URL of your website/branch URL.</td>
                    </tr>
                    <tr>
                        <td>ref</td>
                        <td>string</td>
                        <td>External ID of your company / branch</td>
                    </tr>
                    <tr>
                        <td>live</td>
                        <td>boolean</td>
                        <td>true/false - if true, live bookings can be taken in this company / branch.</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>Name of the uniquely identifiable address e.g. HQ Office</td>
                    </tr>
                    <tr>
                        <td>address1</td>
                        <td>string</td>
                        <td>Street Number</td>
                    </tr>
                    <tr>
                        <td>address2</td>
                        <td>string</td>
                        <td>Street name</td>
                    </tr>
                    <tr>
                        <td>address3</td>
                        <td>string</td>
                        <td>Neighbourhood</td>
                    </tr>
                    <tr>
                        <td>address4</td>
                        <td>string</td>
                        <td>City/Town</td>
                    </tr>
                    <tr>
                        <td>address5</td>
                        <td>string</td>
                        <td>County</td>
                    </tr>
                    <tr>
                        <td>postcode</td>
                        <td>string</td>
                        <td>Postcode</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>string</td>
                        <td>Name of the country, e.g. United Kingdom</td>
                    </tr>
                </tbody>
            </table>

<pre>PUT /api/v1/admin/{company_id}/company</pre>

  <div class="tabs">
        <ul class="tabs__menu">
          <li class="current"><a href="#tab-1">cURL</a></li>
        <li><a href="#tab-2">Sample Response Data</a></li>
        </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X PUT
  https://{host}.bookingbug.com/api/v1/admin/{company_id}/company \
  -H 'app-id: {app-id}' \
  -H 'App-Key: {app-key}' \
  -H 'auth-token: {auth-token}' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "name": "Child Branch",
	  "description": "This is a sample description of a company",
	  "timezone": "Europe/London",
	  "website": "https://www.bookingbug.co.uk/",
	  "ref": "12356789A",
	  "live": "true",
    "address": {
    "name": "Head Office",
    "address1": "2nd Floor",
    "address2": "3-7 Herbal Hill",
    "address3": "Farringdon",
    "address4": "London",
    "address5": "Central London",
    "postcode": "EC1R 5EJ",
    "country": "United Kingdom",
    "lat": -0.1084389,
    "long": 51.5226634
    }
  }'
```
</pre>
</div>
<div id="tab-2" class="tab__content">
<pre>

```
{
"id": 37014,
                "name": "Child Branch",
                "description": "This is a sample description of a company",
                "extra": {},
                "address_id": 13,
                "website": "https://www.bookingbug.co.uk/",
                "multi_status": [
                    "no_show",
                    "checked_in",
                    "completed"
                ],
                "numeric_widget_id": 4232829,
                "currency_code": "GBP",
                "timezone": "Europe/London",
                "country_code": "us",
                "live": true,
                "ref": "12356789A",
                "address": {
                    "id": 13,
                    "name": "Head Office",
                    "address1": "2nd Floor",
                    "address2": "3-7 Herbal Hill",
                    "address3": "Farringdon",
                    "address4": "London",
                    "address5": "Central London",
                    "postcode": "EC1R 5EJ",
                    "country": "United Kingdom",
                    "lat": -0.1084389,
                    "long": 51.5226634,
                    "map_url": "",
                    "map_marker": "2nd+Floor,+3-7+Herbal+Hill,+Farringdon,+London,+string,+string,+string",
                    "phone": "",
                    "homephone": "",
                    "pretty_workphone": "",
                    "_links": {
                        "self": {
                            "href": "https://{host}.bookingbug.com/api/v1/37014/addresses/13"
                        }
                    }
                },
                "_embedded": {
                    "settings": {
                        "has_events": true,
                        "has_classes": true,
                        "payment_tax": 0,
                        "currency": "GBP",
                        "requires_login": false,
                        "has_wallets": false,
                        "_links": {
                            "self": {
                                "href": "https://{host}.bookingbug.com/api/v1/37014/settings"
                            }
                        }
                    }
                },
                "_links": {
                    "parent": {
                        "href": "https://{host}.bookingbug.com/api/v1/company/37003"
                    },
                    "company_search": {
                        "href": "https://{host}.bookingbug.com/api/v1/company/37014/search{?company,address,page,per_page}"
                    },
                    "self": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/company"
                    },
                    "settings": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/settings"
                    },
                    "categories": {
                        "href": "https://{host}.bookingbug.com/api/v1/37003/categories{/id}",
                        "templated": true
                    },
                    "address": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/addresses/13"
                    },
                    "addresses": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/addresses"
                    },
                    "book": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
                        "templated": true
                    },
                    "space_statuses": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/space_statuses"
                    },
                    "named_categories": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/named_categories"
                    },
                    "resources": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/resources{?embed}",
                        "templated": true
                    },
                    "clinics": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/clinics{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id,person_id}",
                        "templated": true
                    },
                    "events": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/events{?start_date,end_date,page,per_page,resource_id,person_id,event_group_id,event_chain_id,summary,member_level_id,embed,include_non_bookable,modified_since,order_by,filter_by}",
                        "templated": true
                    },
                    "event_chains": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/event_chains{?member_level_id}",
                        "templated": true
                    },
                    "event_groups": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/event_groups{?page,per_page}",
                        "templated": true
                    },
                    "client_details": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/client_details"
                    },
                    "packages": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/packages"
                    },
                    "bulk_purchases": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/bulk_purchases"
                    },
                    "checkout": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/basket/checkout{?member_id,take_from_wallet}"
                    },
                    "total": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/purchase_totals/{total_id}",
                        "templated": true
                    },
                    "login": {
                        "href": "https://{host}.bookingbug.com/api/v1/login/37014"
                    },
                    "client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/client{/id}{?page,per_page,filter_by,filter_by_fields,order_by,order_by_reverse,search_by_fields}",
                        "templated": true
                    },
                    "client_by_email": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/client/find_by_email/{email}",
                        "templated": true
                    },
                    "booking_text": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/booking_text"
                    },
                    "basket": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/basket"
                    },
                    "days": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/day_data{?month,week,date,edate,location,service_id,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
                        "templated": true
                    },
                    "times": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/time_data{?service_id,event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id,people_ids,is_admin}",
                        "templated": true
                    },
                    "email_password_reset": {
                        "href": "https://{host}.bookingbug.com/api/v1/login/37014/email_password_reset"
                    },
                    "facebook_login": {
                        "href": "https://{host}.bookingbug.com/api/v1/login/37014/facebook"
                    },
                    "opening_hours": {
                        "href": "https://{host}.bookingbug.com/api/v1/37014/opening_hours"
                    },
                    "available_integrations": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/available_integrations"
                    },
                    "new_resource": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/resources/new",
                        "templated": true
                    },
                    "schedules": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/schedules{?start_date,end_date,page,per_page}",
                        "templated": true
                    },
                    "new_schedule": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/schedules/new",
                        "templated": true
                    },
                    "administrators": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/administrators"
                    },
                    "new_administrator": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/administrators/new",
                        "templated": true
                    },
                    "slots": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/slots{?start_date,end_date,date,resource_id,service_id,person_id,page,per_page,include_booking_details}",
                        "templated": true
                    },
                    "new_event_chain": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/event_chains/new",
                        "templated": true
                    },
                    "new_event_group": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/event_groups/new",
                        "templated": true
                    },
                    "services": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/services"
                    },
                    "calendar_events": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/calendar_events{/id}{?start_time,end_time,address_id,availability,start_date,end_date,resource_id}",
                        "templated": true
                    },
                    "new_service": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/services/new",
                        "templated": true
                    },
                    "bookings": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/bookings{/id}{?embed,start_date,end_date,page,per_page,include_cancelled,modified_since,slot_id,event_id,resource_id,service_id,person_id,client_id,filter_by_fields,order_by,order_by_reverse,start_time,end_time,locale,clinic_id,children,status,category_id,created_since,email,purchase_id}",
                        "templated": true
                    },
                    "queuers": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/queuers{?client_queue_ids}",
                        "templated": true
                    },
                    "client_queues": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/client_queues"
                    },
                    "new_queuer": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/queuers/new",
                        "templated": true
                    },
                    "pusher": {
                        "href": "https://{host}.bookingbug.com/api/v1/push/37014/pusher.json"
                    },
                    "audit_details_search": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/auditlog/details_search"
                    },
                    "search_client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/search/client"
                    },
                    "search_booking": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/search/booking"
                    },
                    "search_audit_api": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/search/audit/api"
                    },
                    "new_client": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/client/new"
                    },
                    "rule_groups": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/rule_groups"
                    },
                    "new_rule_groups": {
                        "href": "https://{host}.bookingbug.com/api/v1/admin/37014/rule_groups/new"
                    }
                },
                "disabled": false
            }
```

</pre>
</div>
</div>
</div>

<div id="Delete"></div>

## Company Delete

When a company delete API call is executed, it performs a soft delete on a Company object. If a company has any live future/past bookings they remain in the company and they do not get hard deleted, they will remain un-cancelled. After the company is deleted, the parameter "live": becomes `false` and "disabled": becomes `true`.

<pre>DELETE /api/v1/admin/{company_id}/company</pre>

```
curl -X DELETE \
https://host.bookingbug.com/api/v1/admin/{company_id}/company \
-H 'app-id: {app-id}' \
-H 'App-Key: {app-key}' \
-H 'auth-token: {auth-token}' \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
```

## Find By Ref

It is possible to query a company API endpoint to find a particular company by their external reference. This is an admin function as well as a public function.

<pre>GET /api/v1/company/find_by_ref/{ref}</pre>

<pre>GET /api/v1/admin/{company_id}/company/find_by_ref/{ref}</pre>

```
curl -X GET \
 https://host.bookingbug.com/admin/{company_id}/company/find_by_ref/{ref} \
-H 'app-id: {app-id}' \
-H 'App-Key: {app-key}' \
-H 'auth-token: {auth-token}' \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
```

## Settings

You can retrieve settings block for a company. This is useful for checking if the company has services, events etc configured.

<pre>GET /api/v1/{company_id}/settings</pre>

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
   https://{host}.bookingbug.com/api/v1/{company_id}/settings \
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
  "has_coupons": true,
  "has_deals": true,
  "has_products": true,
  "has_services": true,
  "has_events": true,
  "has_classes": true,
  "payment_tax": 0,
  "currency": "GBP",
  "requires_login": false,
  "has_wallets": false,
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/settings"
    }
  }
}
```

</pre>
</div>
</div>
</div>

## Addresses

Get all addresses for a company. A company can be configured to have many addresses.

<pre>GET /api/v1/{company_id}/addresses</pre>

Read one address

<pre>GET /api/v1/{company_id}/addresses/{address_id}</pre>

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
   https://{host}.bookingbug.com/api/v1/{company_id}/addresses \
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
    "addresses": [
      {
        "id": 52355,
        "name": "London Office",
        "address1": "111 London Road",
        "address2": "",
        "address3": "",
        "address4": "London",
        "address5": "",
        "postcode": "E11 11",
        "country": "United Kingdom",
        "lat": 51.5697709,
        "long": 0.0100555,
        "map_url": "",
        "map_marker": "111+london+Road,+London,+E11+11,+United+Kingdom",
        "phone": "",
        "homephone": "",
        "extra": {},
        "_links": {
          "self": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/addresses/52355"
          },
          "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/admin/50666/addresses/52355/edit"
          }
        }
      },
      {
        "id": 57120,
        "name": "East Office",
        "address1": "23 East",
        "address2": "2nd floor",
        "address4": "London",
        "postcode": "SW1 8UY",
        "country": "United Kingdom",
        "lat": 50.8616024,
        "long": -3.380951,
        "map_marker": "23+East,+2nd+floor,+London,+SW1+8UY,+United+Kingdom",
        "phone": "",
        "extra": {
          "branch_id": "2"
        },
        "_links": {
          "self": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/57120"
          },
          "edit": {
            "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/57120/edit"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/addresses"
    },
    "new": {
      "href": "https://{host}.bookingbug.com/api/v1/50666/addresses/new",
      "templated": true
    }
  }
}
  ```

</pre>
</div>
</div>
</div>
