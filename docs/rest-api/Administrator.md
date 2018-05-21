# Administrator

Purpose of this API endpoint is to create / update / find an administrator for a company. This will allow access to manipulate all of the Business entities in Bookingbug as an administrator. Use-cases for the use of this api endpoint include member of staff rotation / access change requests and access terminations. This api endpoint allows functions such as: list, read, create, update, delete and find_by_ref.
This is an admin API endpoint and to make any changes, it is necessary to authenticate as an existing administrator and use the auth-token to run any of the API calls below. The details on how to do this can be viewed on the authentication page.

## List Administrators

The LIST end-point will return a list of all administrators based on the company id that was passed in the URL parameter.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X GET \
'https://apidemo.bookingbug.com/api/v1/admin/37003/administrators?page=1&per_page=30' \
-H 'Cache-Control: no-cache' \
-H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
-H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
-H 'content-type: application/json'
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

## Read Administrator


<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>

    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
curl -X GET \
  https://apidemo.bookingbug.com/api/v1/admin/37003/administrators/12 \
  -H 'Cache-Control: no-cache' \
  -H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
  -H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
  -H 'content-type: application/json'
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

## Create an Administrator

This is an example of how it is possible to create an Administrator account.

#### Parameters

        <table class="pure-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Datatype</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>Name of the administrator</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>string</td>
                        <td>Email of the administrator</td>
                    </tr>
                    <tr>
                        <td>role</td>
                        <td>string</td>
                        <td>Role of the Administrator, "owner", "admin, "user", "callcentre"</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>string</td>
                        <td>Password_for_the_administrator</td>
                    </tr>
                    <tr>
                        <td>password_confirmation</td>
                        <td>string</td>
                        <td>Password_for_the_administrator</td>
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
https://apidemo.bookingbug.com/api/v1/admin/37003/administrators/12 \
-H 'Cache-Control: no-cache' \
-H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
-H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
-H 'content-type: application/json'
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


## Update Administrator

Please proceed with caution and ensure that there is another admin who can administer the company at the right permission level, otherwise there is a risk that the admin who's access is being updated could get locked out.

#### Parameters

        <table class="pure-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Datatype</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>Name of the administrator (required when updating an administrator)</td>
                    </tr>
                    <tr>
                        <td>role</td>
                        <td>string</td>
                        <td>Role of the Administrator, "owner", "admin, "user", "callcentre"</td>
                    </tr>
                    <tr>
                        <td>reference</td>
                        <td>string</td>
                        <td>External reference</td>
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
curl -X PUT \
  https://apidemo.bookingbug.com/api/v1/admin/37003/administrators/12 \
  -H 'Cache-Control: no-cache' \
  -H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
  -H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
  -H 'content-type: application/json' \
  -d '{
	"name": "John Smith",
	"role": "admin",
	"reference": "new_external_reference"
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

## Find By Ref Administrator

<div class="tabs">
  <ul class="tabs__menu">
    <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>
<div class="tab">
  <div id="tab-1" class="tab__content">
<pre>
```
curl -X GET \
  https://apidemo.bookingbug.com/api/v1/admin/37003/administrators/find_by_ref/new_external_reference \
  -H 'Cache-Control: no-cache' \
  -H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
  -H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
  -H 'content-type: application/json' \
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

## Delete Administrator

<div class="tabs">
  <ul class="tabs__menu">
    <li class="current"><a href="#tab-1">cURL</a></li>
    </ul>
<div class="tab">
  <div id="tab-1" class="tab__content">
<pre>
```
curl -X DELETE \
  https://apidemo.bookingbug.com/api/v1/admin/37003/administrators/12 \
  -H 'Cache-Control: no-cache' \
  -H 'app-id: c2dc0990f7a7d42078547c650ad0c02d96c07accbe6d' \
  -H 'auth-token: _NfZCPvjOGZdhglZt15n7Q' \
  -H 'content-type: application/json' \
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
  curl -X GET -H "App-Id: {app-id}" -H "App-Key: {app-key}" -H "Content-Type: application/json"
  -H "Cache-Control: no-cache"
"https://{host}.bookingbug.com/api/v1/company_id/day_data?service_id=xxx&date=2016-13-12&edate=2016-20-12"
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

**Note:** We recommend that you use shorter date range for better performance.
