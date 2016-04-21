# Affiliate push notification process

If the company has an affiliate, the affiliate can set up push notifications that will be sent whenever a company makes, updates, or cancels a booking.

## Prerequisites:

In order to get an affiliate account with a Full API access please Contact us at affiliates@bookingbug.com

## Affiliate Settings Configuration:

For the affiliate notifications to be sent - every affiliate must provide 'booking_notification_url' and 'cancel_url' in the affiliate account settings. e.g. "http://example.com/bbug/cancel"

To connect the affiliate to the company, the affiliate must login to their Account and navigate to Manage Companies > Link Account. then add the required company ID.

Then the link will appear on the companies account under Publish > External Sites where the link can be managed.

## Affiliate Widget Configuration:

In order to link bookings that are made through the external booking widget to an affiliate account, you will need to add the affiliate_id in the URL of the widget.

Example:
```
src="http://uk.bookingbug.com/widget/all.jsid=usw1234567&affiliate_id=1238789999&width=730&height=570&style=large"
```

## Affiliate Angular Widget Configuration:

In order to link bookings that are made through the external angular booking widget to the affiliate account you will need to add the affiliate_id in the angular widget html as per the below example.

```
<div bb-widget="{ 
  company_id: 'company_id',
  affiliate_id: '12387899999',
  clear_member: true,
  item_defaults: {merge_resources: true, merge_people: true},
  route_format: '/{page}'}"
  bb-scroll-to="page:loaded"
div>
```

once the booking was made has been made the following JSON that will be sent,

```
  {
    "type":"booking",
    "message":"New Booking by Name Surname",
    "id":463,
    "links":[{
      "rel":"booking",
      "href":"https://uk.bookingbug.com/api/bookings/463"
    ]}" 
  }
```
