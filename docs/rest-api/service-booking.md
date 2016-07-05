# Service Booking
There are two main types of booking that can be done through via the BookingBug platform. These are split into service bookings and event bookings. In this section we will be looking at service bookings.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the REST API it is important to plan out your user flow. Below is a UML Diagram of our standard user flow. Each stage has an action that the user carries out and each stage requires certain API calls.

To make API calls, you will need an `App-Key` and `App-ID` [info here](/docs/rest-api/api-keys). You will also need an `Auth-Token`to make a booking which can be acquired by logging in as an admin using the API.

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
The first call you will need to make to the API is to `GET https://<URL>.bookingbug.com/api/v1/company/<company-id>` to retrieve the company object. This shows the parent company and a list of child companies.

## List Stores
With the list of companies now available, you can choose which store you want to make the service booking with. Find the store you want to use in the list to access the specific 'company-id' you need to use.

## List Services
Once your user has chosen a location then you can list the services available at that location. This can be done with `GET https://<URL>.bookingbug.com/api/v1/<company_id>/services` method. This will return the service object. 

> To see the full object that gets returned you can call the end point directly using CURL or a tool such as [Postman](https://www.getpostman.com/)

## List Available Slots
Listing the available slots uses the `GET https://<URL>.bookingbug.com/api/v1/<company_id>/services/time_data` API method. You can then pass in different parameters such as your time frame on the end of the API call for example `https://<URL>.bookingbug.com/api/v1/<company_id>/services?service_id=<service_id>&date=YYYY-MM-DD&end_date=YYYY-MM-DD&duration=60`
You can also pass in a `person_id` or a `resource_id`to receive information about the staff and resources linked to the services, respectively.

## Collect User Details
This is the point where your user would enter their details before booking the appointment. You will need two API calls at this stage.

The First call is `GET https://<URL>.bookingbug.com/api/v1/<company_id>/services?service_id=<service_id>/questions` This returns the questions that relate to that particular service. For example, if we were to be creating a booking appointment for financial services, then at this point we could ask if the user has a standard or business account or if they have already started the process of finding a mortgage with other financial providers.

The Second call is `GET https://<URL>.bookingbug.com/api/v1/<company_id>/client_details` As well as returning the 'member_id' that you will need to create a booking, this also returns the default client details you may need to collect, such as age, first name, last name, email, phone number, etc.

You can also create or edit a user using `POST https://<URL>.bookingbug.com/api/v1/<company_id>/client` Pass in the client's information (first_name, last_name, email, etc.) in the body of your API call and this will either create or update a client's information depending on what information you entered.

## Creating the Booking
Once you have gathered to required information to create a service booking, you can add the item to their basket. This is achieved with `POST https://<URL>.bookingbug.com/api/v1/<company_id>/basket/add_item?service_id=<service_id>` You will need to enter the required information about the service into the body of the API call.

To check if the item was successfully added to the basket, you can call `GET https://<URL>.bookingbug.com/api/v1/<company_id>/basket`

Once you are ready to put the booking through the system you will need to call `POST https://<URL>.bookingbug.com/api/v1/<company_id>/basket/checkout` This will need the service information and the client information entered in the body to be successful. Once this is done, your booking is complete.
