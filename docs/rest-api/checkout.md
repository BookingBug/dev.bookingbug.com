# Checkout Guide

When a user selects an event or a service you will need to `POST` to the basket with the items they have selected.

## Add to Basket

```
https://<host>.bookingbug.com/api/v1/<company-id>/basket/add_item{?event_id,member_id,event_chain_id,service_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}
```

## Options

- ** event_id ** This is the id of the event id retrieved with <a href="docs/rest-api/event-booking#list-events">List Events</a> endpoint

- ** member_id ** The member_id is retrieved in the response from the <a href="docs/rest-api/event-booking#get-existing-clients">`POST` or `GET` user endpoint</a>.

- ** event_chain_id ** The event chain id can be retrieved with the `GET https://<host>.bookingbug.com/api/v1/<company-id>/event_chains/<event-chain-id>` endpoint with the ID of the event

- ** service_id ** This is the id of the service id retrieved with <a href="/docs/rest-api/service-booking#list-services">List Services</a> endpoint

- ** product_id ** is for purchasable items that aren't bookings

- ** attachment_id ** attachment_id is for any file uploads that may have been attached

- ** deal_id ** This is the ID of any discounts that you can choose to set up and offer a customer

- ** package_id ** If the event is part of a package then you will need to pass in the package_id.

- ** bulk_purchase_id ** If the event has been purchased in bulk then you will need to pass in the ID of the bulk purchase

## View Basket

You can retrieve the contents of the basket with the following endpoint.

```
https://<host>.bookingbug.com/api/v1/<company-id>/basket
```

## Checkout
You will need to pass the required information about the event into the body of the API call. Once you are ready to put the booking through the system you will need to call

```
https://<host>.bookingbug.com/api/v1/<company-id>/basket/checkout{?member_id,take_from_wallet}
```

Your member id is the id of the client that you would have had in the response from `POST /client`

the wallet object is used if the user has available credit to make the purchase. If set to false it will pass the user to checkout.

### Using Wallets

Wallets enable your customers to credit their account with real or virtual currency which they can then use to pay for bookings.  To use wallets, you must have online payments setup.

for more information about setting wallets up see [this guide](http://feedback.bookingbug.com/hc/en-gb/articles/204119572-How-to-setup-wallet-credit-that-my-customers-can-buy-)

for more information regarding setting up payments you can take a look at our [payment guides](http://feedback.bookingbug.com/hc/en-gb/sections/201679355-Payments)
