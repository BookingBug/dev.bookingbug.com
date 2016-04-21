# Working with the role-based permissions system.

The BookingBug API has three levels of role-based permissions available. These role-based permissions allow you to access different levels of the booking journey depending on your needs.

- [**Admin** The administrator of your platform](http://apidocs.bookingbug.com/admin.html)
- [**Public** An end user that books via the platform but does not need to log in](http://apidocs.bookingbug.com/public.html)
- [**Member** An end user that books via the platform but needs to log in](http://apidocs.bookingbug.com/member.html)

These user roles share multiple methods such as `create booking` and `view services`

## Admin
The admin API enables you to create or amend people, resources or clients, and view bookings.

To authenticate, you will require an auth token. This can be obtained by a POST request with an administrator's email and password to the login endpoint.

```
curl "https://www.bookingbug.com/api/v1/login" -H App-Id:{app_id} -H
App-Key:{app_key} -X POST -d "email=me@example.com&password=mypass"
```

## Public
The public API allows anyone to make a booking without authentication. If you do not require users to create an account before making a booking then you can use the public API to make the necessary calls without the need for authentication

## Member
The member API enables you to log in as a member, make bookings and amend or cancel their previously made bookings.

To authenticate, you will require an auth token. This can be obtained by a POST request with the member's email and password to the login endpoint.

```
curl "https://bookingbug.com/api/v1/login" -H App-Id:{app_id} -H
App-Key:{app_key} -X POST -d "email=me@example.com&password=mypass"
```

The response will include the auth token and a link to the member which can be used as follows:

```
curl "https://bookingbug.com/api/v1/members/{id}" -H App-Id:{app_id} -H
App-Key:{app_key} -H Auth-Token:{auth_token}
```
