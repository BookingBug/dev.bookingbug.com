# Introduction

Bookingbug is a booking platform used by various businesses across the globe. Many of the businesses use the Bookingbug API to automate and enhance their booking journeies with Bookingbug.

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

### Permission

The Bookingbug platform is separated into three different APIs:

1. **Public** - The public API does not require authentications and it enbales you to get information of services, resources, events, add items to basket, view basket and checkout. 
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


This documentation will cover the main aspects of the API and how you can use it within your application. There are many different features within the API and we will only be covering some of the aspects that you will need to get set up. If you have further questions regarding the use of the API then you can email apisupport@bookingbug.com

For a full list of end points and methods see the [API Reference](http://apidocs.bookingbug.com/)
