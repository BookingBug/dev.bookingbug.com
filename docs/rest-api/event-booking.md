# Event Booking
There are two main types of booking that can be done through via the BookingBug platform. These are split into service bookings and event bookings. In this section, we will be looking at event bookings.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the REST API it is important to plan out your user flow. Below is a UML Diagram of an example event booking user flow. Each stage has an action that the user carries out and each stage requires certain API calls.

<img src='http://g.gravizo.com/g?
@startuml;
actor User;
participant "List Events" as A;
participant "Collect User Details" as B;
participant "Confirmation" as C;
User -> A: Start;
activate A;
A -> B: Choose Event;
activate B;
B -> C: Enter Details;
activate C;
@enduml;
'>

We will be looking at these stages of the user flow and which API calls to make at each stage.

- List Events
- Collect User Details
- Confirmation

## List Events
With service booking, you will need to locate a store, a service then the slots that service has available. However, with the Events Booking flow, these do not apply.

Given the above we have fewer steps in event bookings as opposed to service bookings. To retrieve your companies available events.

Firstly you will need to hit the company endpoint to retrieve the company details.

```
Get the details for a company GET    /company/{company_id}
Summary: Load All of the Links and Properties of a Company
```

Then you will need to hit the Events List endpoint.
```
Event List GET    /{company_id}/events
Summary: Get a List of Bookable Events
```

This will return the events currently set for the company. Which you can display to the user and allow them to choice the event they would like. Then move on to collecting the user's details.

You can also chain events and group them.

### Events Chain
```
Event Chain List GET    /{company_id}/event_chains
Summary: Get a List of Courses or Repeating Events for a Company
```

### Events Group
```
Event Group List GET    /{company_id}/event_groups
Summary: Get All Event Groups Results are returned as a paginated list
```

## Collect User Details
This is the point where your user would enter their details before booking the appointment. You will need two API calls at this stage.

The First call is `GET /questions` this returns the questions that relate to that particular service. For example, if we were to be creating a booking appointment for financial services, then at this point we could ask if the user has a standard or business account or if they have already started the process of finding a mortgage with other financial providers.

The Second call is `GET /client_details` This returns the default client details you need to collect. Such as age, first name, last name, email, phone number and if you would like to receive a newsletter.

## Confirmation
Once you've got to the confirmation section and your user has filled in their details. you can create or update the client by email and add the item to their basket. This is achieved with `POST basket/add_item?service_id=<service_id>`

after this has been done you can confirm your user. Or you can have them check the details one more time and then click a confirm booking button. Once you are ready to put the booking through the system you will need to hit the `POST /basket/checkout` end point to complete the booking.
