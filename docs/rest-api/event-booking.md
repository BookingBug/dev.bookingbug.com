# Event Booking
There are two main types of booking that can be done through via the BookingBug platform. These are split into service bookings and event bookings. In this section, we will be looking at event bookings.

> Our full API reference can be found here [http://apidocs.bookingbug.com/](http://apidocs.bookingbug.com/)

## User Flow
Before you start building an integration with the REST API it is important to plan out your user flow. Below is a UML Diagram of an example event booking user flow. Each stage has an action that the user carries out and each stage requires certain API calls. 

To make API calls, you will need an `App-Key` and `App-ID`. You will also need an `Auth-Token`to make a booking which can be acquired by logging in as an admin using the API.

<img src='http://g.gravizo.com/g?
@startuml;
actor User;
participant "Store Locator" as A;
participant "List Events" as B;
participant "Collect User Details" as C;
participant "Confirmation" as D;
User -> A: Start;
activate A;
A -> B: Locate Store;
activate B;
B -> C: Choose Event;
activate C;
C -> D: Enter Details;
activate D;
@enduml;
'>

We will be looking at these stages of the user flow and which API calls to make at each stage.

- Store Locator
- List Events
- Collect User Details
- Confirmation

## Store Locator
The first call you will need to make to the API is to `GET https://<URL>.bookingbug.com/api/v1/company/<company-id>` to retrieve the company object. This shows the parent company and a list of child companies.

## List Events
Once your user has chosen a location then you can list the events available at that location. This can be done with `GET https://<URL>.bookingbug.com/api/v1/<company_id>/events` method. This will return all available events. To book an event, you will need the `event_id`, `event_chain_id`, `date` and `time` parameters.

You can also list only chained or grouped events. 
Using `GET https://<URL>.bookingbug.com/api/v1/<company_id>/event_chains` will return a list of courses and recurring events available.

Using `GET https://<URL>.bookingbug.com/api/v1/<company_id>/event_groups` will return a list of event groups from which you can select your events.

## Collect User Details
The First call is `GET https://<URL>.bookingbug.com/api/v1/<company_id>/events?event_id=<event_id>/questions` This returns the questions that relate to that particular event. For example, if we were to be creating a booking appointment for a financial event, then at this point we could ask if the user has a standard or business account or if they have already started the process of finding a mortgage with other financial providers.

The Second call is `GET https://<URL>.bookingbug.com/api/v1/<company_id>/client_details` As well as returning the 'member_id' that you will need to create a booking, this also returns the default client details you may need to collect, such as age, first name, last name, email, phone number, etc.

You can also create or edit a user using `POST https://<URL>.bookingbug.com/api/v1/<company_id>/client` Pass in the client's information (`first_name`, `last_name`, `email`, etc.) in the body of your API call and this will either create or update a client's information depending on what information you entered.

## Confirmation
Once you have gathered to required information to create an event booking, you can add the item to their basket. This is achieved with `POST https://<URL>.bookingbug.com/api/v1/<company_id>/basket/add_item>` You will need to enter the required information about the event into the body of the API call. Typically, you will need to enter the `event_id`, `event_chain_id`, `date` and `time` relevant to the event you are booking as well as the `ticket_qty`.

Once you are ready to put the booking through the system you will need to call `POST https://<URL>.bookingbug.com/api/v1/<company_id>/basket/checkout` This will need the event information and the client's `member_id` entered in the body to be successful. Once this is done, your booking is complete.
