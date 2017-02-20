# Bookable items

In the [listing items](docs/rest-api/listing-items) section we explained how you can list configured items in your company. In this section we will explain how you can use the REST API to query bookable items based on another item. 

You can give a single, or combination of service, resource, person and calculatate what the sub-items are bookable.

<pre> GET /api/v1/{company_id}/items </pre> 

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
                <td>The company ID</td>
            </tr>
            <tr>
                <td>service_id</td>
                <td>integer</td>
                <td>A service ID</td>
            </tr>
            <tr>
                <td>person_id</td>
                <td>integer</td>
                <td>A person ID</td>
            </tr>
            <tr>
                <td>resource_id</td>
                <td>integer</td>
                <td>A resource ID</td>
            </tr>
        </tbody>
    </table>

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
"https://{host}.bookingbug.com/api/v1/{company_id}/items?service_id=104749"
  ```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "_embedded": {
    "items": [
      {
        "type": "person",
        "person_item_id": 30553,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/items?service_id=104749&person_id=30553&type=person"
          },
          "item": {
            "href": "https://uk.bookingbug.com/api/v1/50666/people/30553"
          },
          "days": {
            "href": "https://uk.bookingbug.com/api/v1/50666/day_data?service_id=104749&person_id=30553{&month,week,date,edate,location,event_id,resource_id,people_ids,resource_ids,person_group_id}",
            "templated": true
          },
          "times": {
            "href": "https://uk.bookingbug.com/api/v1/50666/time_data?service_id=104749&person_id=30553{&event_id,date,end_date,location,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
            "templated": true
          }
        }
      },
      {
        "type": "person",
        "person_item_id": 32217,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/items?service_id=104749&person_id=32217&type=person"
          },
          "item": {
            "href": "https://uk.bookingbug.com/api/v1/50666/people/32217"
          },
          "days": {
            "href": "https://uk.bookingbug.com/api/v1/50666/day_data?service_id=104749&person_id=32217{&month,week,date,edate,location,event_id,resource_id,people_ids,resource_ids,person_group_id}",
            "templated": true
          },
          "times": {
            "href": "https://uk.bookingbug.com/api/v1/50666/time_data?service_id=104749&person_id=32217{&event_id,date,end_date,location,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
            "templated": true
          }
        }
      },
      {
        "type": "resource",
        "resource_item_id": 43048,
        "_links": {
          "self": {
            "href": "https://uk.bookingbug.com/api/v1/50666/items?service_id=104749&resource_id=43048&type=resource"
          },
          "item": {
            "href": "https://uk.bookingbug.com/api/v1/50666/resources/43048"
          },
          "days": {
            "href": "https://uk.bookingbug.com/api/v1/50666/day_data?service_id=104749&resource_id=43048{&month,week,date,edate,location,event_id,person_id,people_ids,resource_ids,person_group_id}",
            "templated": true
          },
          "times": {
            "href": "https://uk.bookingbug.com/api/v1/50666/time_data?service_id=104749&resource_id=43048{&event_id,date,end_date,location,person_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
            "templated": true
          }
        }
      }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://uk.bookingbug.com/api/v1/50666/items?service_id=104749"
    }
  }
}
  ```
</pre>
        </div>
        </div>
        </div>

In the cURL call example above we are listing all sub-bookable items for a particlualr service. You can append other parameters listed above.