# Permissions


When working with Bookingbug APIs it is essential that you understand the three different categories (permissions) the API is divided into. These permissions enable you to access different parts of the system and allow you to perform different actions depending on the use case/requirements. Some end-points share multiple methods but depending on the permission the response will show more data. Below is a list of these permissions.

- **Public**
- **Admin**
- **Member**

## Public
The `public` is by far the most common permission method used to build a booking journey. Once you have the access (App-ID) to call the APIs you can get up and running with the public end-points without any authentication. Below are some examples of why you would use the public permission:

- Listing Services
- Listing Events
- Listing Resources
- Listing Staff members 
- Checking availability for service/events/staff
- Adding items to basket and checking out to make the booking

You can also look at the URL of the end-point to determine if this is a public or admin/member. See below an example of a public API call.

```
GET /api/v1/{company_id}/services
```

## Admin
The `Admin` API requires you to be authenticated first before making calls to the admin end-points. This permission enables you to perform administration tasks. Below are some examples of why and when you would use the admin permission.

- Creating Staff members
- Updating a Booking
- Creating Clients
- Listing Bookings/Purchases
- Listing Services, Events, Staff, Clients, Resources
- Making a Booking

See below an example of an admin API call.

```
GET /api/v1/admin/{company_id}/services
```

Looking at the example above we can easily determine that this is an admin API call. The structure is consistent throughout this permission.  

## Member
The member API is used for registered clients (a client that has a username and password). You would also need members to authenticate before making calls to the members end-points. This set of permission enables members to do the following:

- View their own bookings 
- View member details
- Update member details
- Update bookings

See below an example of a member API call.

```
GET /api/v1/{company_id}/members/{member_id}/bookings
```

