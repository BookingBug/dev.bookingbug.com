# Working with the queuing system

The queuing system is built to allow for the management of walk-in clients, the services that you provide these walk-in clients and the staff that you have available to serve these clients.

Queues also allow you to split your walk-in/appointment based clients up into different queues. This would be useful if you had member based services such as business and standard account customers. or services based on language.

For example. If you had a business customer and a standard customer tier available, then you can break these into two different queues. Allowing each queue to be progressed independently of each other.

Additionally, you could have multiple queues based on language. Someone who needs to see a staff member who speaks fluent Spanish can then be added to a specific queue separate from the staff members who cannot speak fluent Spanish.

The queuing system has five main aspects to it.

- **Services:** These are the services you have on offer, for example, mortgage advice and savings advice. The <a href="docs/rest-api/service-booking#list-services">Service Booking Guide</a> has examples regarding this end point.

- **Queues:** These are the different types of queues that you have, for example if you are offering the previous services for two types of client (standard and business) you can split the clients into two queues. Serving each interdependently.

- **Person:** You can also manage multiple staff members and the current queue that is assigned to them. What services they can handle, when they are on break and how long it is until they are free.

- **Queuers:** These are your clients, waiting in the current queue. If you have a client that has made a booking, then on arrival they will be checked in and converted into a queuer.

- **Serving:** This is the section of the API where you can manage the client who is currently being served.

> Note that the layout of the methods in the API differs from the layout of this documentation. Which aims to give you an overview of what is available. For more details on the endpoints in use. Check out the [API Reference](http://apidocs.bookingbug.com/#!/queue/put_admin_company_id_people_id_attendance)

## The Queuers endpoint

The managing of queues is done via an endpoint that allows for CRUD operations. This is contained within the admin API role.

You can create, list, edit and delete the different queues via [these endpoints](http://apidocs.bookingbug.com/#!/admin/get_admin_company_id_client_queues) This will also pull in relation data such as a person, services, and queues.

> Services need to be enabled to work with queues via the service API endpoints. When the API returns the services you will be able to see `queuing_disabled: false` or `queuing_disabled: true` in the response.

**GET Queuers Read** <br>
Read a list of currently waiting and being server queuers <br>
`https://uk.bookingbug.com/api/v1/admin/:company_id/queuers?client_queue_ids={{client_queue_ids}}`

See more about [these endpoints](http://apidocs.bookingbug.com/#!/admin/get_admin_company_id_client_queues)

## Person
Staff you have available to see your clients

Here you can manage the different aspects of the staff you have available to see your clients (named `person` in the API). You can manage your staff members calendar and assign the walk-in clients around the clients that have pre-booked an appointment.

**GET New Person** <br>
Person Read Using Reference ID <br>
`https://uk.bookingbug.com/api/v1/admin/:company_id/people/find_by_ref/{ref}`


The API endpoints and Methods can be found [here](http://apidocs.bookingbug.com/#!/person/post_admin_company_id_people)

## Restrictions
If you are using our Administration GUI then there are restrictions set up. For example, if you try and assign someone in the Spanish queue to a member of staff that does not speak Spanish, or you assign a business client to a member of staff who deals exclusively with standard accounts. Then the GUI will restrict you from doing this.

However... there are no restrictions when calling the API directly. Therefore, if you want to create these restrictions and you are not using the Administration GUI. Then you will have to build your own restrictions.

## Staff Attendance
Within each staff member, you can manage their availability via the `attendance` method on the API. This method has the following flags.

- `0` not on shift or shift ended
- `1` currently on shift
- `2` currently on break

**PUT Set an attendance status for a person** <br>
Set an attendance status for a person <br>
`https://uk.bookingbug.com/api/v1/admin/:company_id/people/{id}/attendance`

The API endpoints and Methods can be found [here](http://apidocs.bookingbug.com/#!/person/post_admin_company_id_people)

## Queuers
This is the currently awaiting clients in your queuing system. The API among other things allows you to store information relating to the `position` of the client in the queue. Including when they are due to be seen and the service they are awaiting.

You can also push them back in the queue or remove them completely.

## Queuers Position
The position allows you to reference where in the queue your customer is. The position is set to `0` when they are currently being served by a member of staff. It then increments up. You can have multiple queuers with the position of `0` if they are all being seen by a member of staff e.g

3 staff members = maximum 3 queuers with the position `0`

You can also have duplicate positions for queues waiting to be seen when you have multiple queues set up. So if you have two queues, business, and standard, then the next to be seen in both queues will both have the position of `1` then next in the queue would have `2` and so on and so on.

You can check out queuers in the [API reference](http://apidocs.bookingbug.com/#!/queue/get_admin_company_id_queuers_id)

## Serving
This aspect returns information about a client currently being served.

For example, a staff member will be serving the client Mr. Smith. Regarding your mortgages service. You can see when the consultation started and when it's due to end. This allows for the calculation of when the next client in the queue will be seen.

The client currently being served will then be removed from the queue completely when they have finished being served.

You can find out more on this by [referencing the API docs](http://apidocs.bookingbug.com/#!/queue/post_admin_company_id_queuers_start_serving)
