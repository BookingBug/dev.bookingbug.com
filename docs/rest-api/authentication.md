# Authentication

To authenticate with the API, you will require an auth token along with the App-Id and App-Key. This can be obtained by a `POST` request with an administrator's email and password to the login endpoint.

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
 https://{host}.bookingbug.com/api/v1/login \
 -H 'App-Key: {app-key}' \
 -H 'App-Id: {app-id}' \
 -H 'Content-Type: application/json' \
 -H 'Cache-Control: no-cache' \
 -d '{
   "email": "{email}", "password": "{password}" 
 }' 
```
</pre>
        </div>
        <div id="tab-2" class="tab__content">
<pre>
```
{
  "email": "<admin-email>",
  "auth_token": "<auth-token>",
  "company_id": <company-id>,
  "path": "https://<host>.bookingbug.com/api/v1",
  "_embedded": {
    "members": [],
    "administrators": [
      {
        "name": "<name>",
        "email": "<admin-email>",
        "role": "owner",
        "company_id": <company-id>,
        "company_name": "<company-name>",
        "_links": {
          "self": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>"
          },
          "edit": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>/edit"
          },
          "company": {
            "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/company"
          },
          "login": {
            "href": "https://<host>.bookingbug.com/api/v1/login/admin/<company-id>"
          },
          "base_login": {
            "href": "https://<host>.bookingbug.com/api/v1/login/admin"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://<host>.bookingbug.com/api/v1/login/<company-id>"
    },
    "administrator": {
      "href": "https://<host>.bookingbug.com/api/v1/admin/<company-id>/administrators/<user-id>",
      "templated": true
    }
  }
}
```
</pre>
        </div>
    </div>
</div>

The Auth-Token is generated when the login end-point is executed and can be found in the body response. This is then required in the header for every call made using the admin end-points.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c1d4330701034bffb1fd)


## Parent/Child Authentication

If you have a parent/child setup the authentication is slightly different. The login endpoint needs to know
which company you're logging in against and for that you'll need to pass in the company ID. See below an example cURL call.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST \
   https://{host}.bookingbug.com/api/v1/login \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache" \
  -d'{
    "email": "{email}",
    "password": "{password}",
    "id": {company_id}
  }' 
  ```
</pre>
        </div>
    </div>
</div>

## Admin Authentication

To authenticate as an administrator you can call the admin login end-point.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X POST \
   https://{host}.bookingbug.com/api/v1/login/admin/{company_id} \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  -d '{
    "email": "{email}",
    "password": "{password}"
  }' 
  ```
</pre>
        </div>
    </div>
</div>

For every admin endpoint you must authenticate or if you have already authenticated you must pass the `Auth-Token` in the header, otherwise you will get back a `401` error in the response.

<pre>
  {
  "error": "401 Unauthorized"
  }
</pre>

It is possible to cache the returned auth-token for later use. This is a good practice if there is a need to perform admin functions later down the line in the same company or child companies if the admin authentication was done at the parent company level.

## Logout

If you need to logout the authenticated user you can do this by calling the logout API.

<div class="tabs">
    <ul class="tabs__menu">
        <li class="current"><a href="#tab-1">cURL</a></li>
        <!-- <li><a href="#tab-2">Sample Response Data</a></li> -->
    </ul>
    <div class="tab">
        <div id="tab-1" class="tab__content">
<pre>
```
  curl -X DELETE \
   https://{host}.bookingbug.com/api/v1/login \
  -H 'App-Id: {app-id}' \
  -H 'App-Key: {app-key}' \ 
  -H 'Auth-Token: {auth-token}' \
  -H 'Content-Type: application/json' \
  -H 'Cache-Control: no-cache' \
  ```
</pre>
        </div>
    </div>
</div>

The `Auth-Token` in the headers must be the same auth-token from the login call. Once executed this will invalidate the auth-token and kill the session, logging the current user out.
