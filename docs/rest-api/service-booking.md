# Service Booking
There are two main types of booking that can be done through the booking bug platform. These are split into service bookings and event bookings and event bookings. In this section we will be looking at service bookings and how you can use this type of booking to give your users the ability to book an appointment.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the rest API its important to plan out your user flow. Below is a UML Diagram of our standard user flow. Each stage has an action that the user carries out. Each stage requires certain API calls.

<img src='http://g.gravizo.com/g?
@startuml;
actor User;
participant "Store Locator" as A;
participant "List Stores" as B;
participant "List Service" as C;
participant "List Available Slots" as D;
participant "Collect User Details" as E;
participant "Confirmation" as F;
User -> A: Start;
activate A;
A -> B: Enter Location;
activate B;
B -> C: Choose Store;
activate C;
C -> D: Choose Service;
activate D;
D -> E: Choose Slot;
activate E;
E -> F: Enter Details;
activate F;
@enduml;
'>

We will be looking at these stages of the user flow and which API calls to make at each stage.

- Store Locator
- List Stores
- List Service
- List Available Slots
- Collect User Details
- Confirmation

## Store Locator
The first call you will need to make to the API is to `GET <company-_d>` to retrieve the company object. This shows the parent company and a list of child companies. You can then use this company object to find the nearest branch/location to the location your user has entered.

## List Stores
With the company object you can display the nearest locations to you user that are available. The user can then choose from one of these stores.

## List Services
Once your user has chosen a location then you can list the services available at that location. This can be done with `GET <company_id>/services` method. This will return the service object. Among other things you will get back the `booking_time_step` which is the length of the appointment. The `duration_unit` which tells us what the time step is measured in for example 30 minutes.

> To see the full object that gets returned you can call the end point directly or using a tool such as [Postman] `https://www.getpostman.com/` To explore the API.

## List Available Slots
Listing the available slots uses the `GET /time_data` API method. You can then pass in different parameters such as your time frame on the end of the API call for example `?service_id=<service_id>&date=YYYY-MM-DD&end_date=YYYY-MM-DD&duration=60`

You can also pass in a `person_id` or a `resource_id`.

## Collect User Details
This is the point where your user would enter their details before booking the appointment. You will need the two API calls at this stage.

The First call is `GET /questions` this returns the questions that relate to that service. For example if we where to be creating a booking appointment for financial services, then at this point we could ask if the user has an standard or business account or if they have already started the process of finding a mortgage with other financial providers.

The Second call is `GET /client_details` This returns the default client details you need to collect. Such as age, first name, last name, email, phone number and if you would like to receive a newsletter.

## Confirmation
Once you've got to the confirmation section and your user has filled in there details. you can create or update the client by email and add the item to their basket. This is achieved with `POST basket/add_item?service_id=<service_id>`

after this has been done you can confirm your user. OR you can have them check the details one more time and then click a confirm booking button. Either way once you are ready to put the booking through the system you will need to hit the `POST /basket/checkout` end point to complete the booking.