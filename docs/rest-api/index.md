# Introduction

Bookingbug is a booking platform used by various businesses across the globe. Many of the businesses use the Bookingbug API to automate and enhance their booking journeys with Bookingbug.

### The API

This is the documentation for the Bookingbug API v1. The BookingBug REST API is a [HAL](http://stateless.co/hal_specification.html) based API that allows you to manage all aspects of the BookingBug platform.

Endpoints are documented with the HTTP method for the request and a partial resource identifier. Example:

<pre>
GET /api/v1/1234/services
</pre>

Prepend your Bookingbug URL to the resource identifier to get the full endpoint URL:

<pre>
https://uk.bookingbug.com/api/v1/1234/services
</pre>

Curly braces, `{}`, indicate values you have to replace. Example:

<pre>
https://{host}.bookingbug.com/api/v1/{company_id}/services/{id}
</pre>

The examples provided in the docs are cURL statements. You can run the statements on a command line to try out or use REST API client, such as [postman](https://www.getpostman.com/).

### API Keys

The Bookingbug API requires `App-id` and `App-key` to be parsed in the `HTTP` header for each call. These keys can be obtained by contacting your BookingBug Account manager or primary contact.

<pre>
-H "App-id: {app-id}" -H "App-key: {app-key}"
</pre>

To find the App-id please follow the steps below:

1. Login to your BookingBug Environment using an account with parent-level privileges
2. Click on the cog icon on top right hand corner
3. Click on **Advanced Settings** on the left hand side
4. Click on **API Settings**

Note: New customers will only require `App-id` and not App-key. This also means you only need to define the `App-id` in the headers.

### Permission

The Bookingbug platform is separated into three different APIs:

1. **Public** - The public API does not require authentications and it enables you to get information of services, resources, events, add items to basket, view basket and checkout. 
2. **Member** - The member API enables you to login as a member, make bookings and amend or cancel their previously made bookings.
3. **Admin** - The admin API enables you to administer the account, such us create or amend people, resources or clients and view bookings.


The request format of the three APIs are:

##### Public

<pre>
/api/v1/{company_id}
</pre>

##### Member

<pre>
/api/v1/{company_id}/members/
</pre>

##### Admin

<pre>
/api/v1/admin/{company_id}
</pre>

### Company ID

The company ID is a unique identifier that identifies the company. To find your company ID please follow the steps below:

1. Login to your BookingBug Environment using an account with parent-level privileges
2. Click on the cog icon on top right hand corner
3. Click on **Advanced Settings** on the left hand side
4. Click on **API Settings**

### Request Format

The Bookingbug API is a JSON API. You must supply a `Content-Type: application/json` header in PUT and POST requests. You must set an `Accept: application/json` header on all requests.

### Data Types

The API returns and accepts JSON values, which can be strings in double quotes, numbers, objects, arrays, true or false. Most programming languages have tools to parse this data.

### Time stamps

Time stamps use UTC time and are formatted as ISO 8601 strings. Example: `2016-05-16T09:14:57Z`.

### Pagination

By default, most list endpoints return a maximum of 30 records per page. You can change the number of records on a per-request basis by passing a `per_page` parameter in the request URL parameters. Example: `per_page=50`.

When the response exceeds the per-page maximum, you can paginate through the records by incrementing the page parameter. Example: `page=3`. List results include `next` and `previous` URLs in the response body for easier navigation:

<pre>
	  },
  "_links": {
	...
    },
    "next": {
      "href": "https://uk.bookingbug.com/api/v1/admin/50666/bookings?page=3&per_page=30&locale=en"
    },
    "previous": {
      "href": "https://uk.bookingbug.com/api/v1/admin/50666/bookings?page=1&per_page=30&locale=en"
    }
  }
}
</pre>

This documentation will cover the main aspects of the API and how you can use it within your application. There are many different features within the API and we will only be covering some of the aspects that you will need to get set up. If you have further questions regarding the use of the API then you can email apisupport@bookingbug.com

For a full list of end points and methods see the [API Reference](http://apidocs.bookingbug.com/)
