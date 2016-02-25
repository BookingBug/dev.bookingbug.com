# Page Routing

The JavaScript SDK has a page routing system that automatically follows a set of steps. These steps make up your user flow. These page directives can be customised via the `bb-breadcrumb` directive.

In this guide we will be taking our newly initialised widget that we made in getting started and customise the default templates which it invokes.

To start lets look at our `bb-widget` directive

```js
<div bb-widget="{
  company_id: '12345',
  clear_member: true,
  route_format: '/{page}'
  }" 

  bb-scroll-to="page:loaded" class="container">
   
</div>
```

By default this will look for the `main.html` template. This `main.html` template allows you to set up a global template for the journey such as a header and footer and in this case a breadcrumb to control the page routing.

```js
<div bb-breadcrumbs class="breadcrumbs_holder" ng-init="setRoute([
	{page:'event_list', title: 'Select a date'},
	{page:'event', title: 'Select tickets'},
	{page:'checkout_event', title: 'Checkout', disable_breadcrumbs: true},
	{page:'confirmation', title: 'Finish'}
	])">
</div>
```

This allows you to set up custom page routes for your user journey. The `page:''` attributes allow you to set the template that is used for each steps, so `page:'event_list'` would load the `events_list.html` template for that step. The `title:` argument can be set to what ever you need the p