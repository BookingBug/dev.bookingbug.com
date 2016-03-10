# Page Routing

The JavaScript SDK has a page routing system that automatically follows a set of steps. These steps make up your user journey. These page directives can be customised via the `bb-breadcrumb` directive.

In this guide, we will be taking our newly initialised widget that we created in install and getting started, and customise the default templates which it invokes.

To start let's look at our `bb-widget` directive

```js
<div bb-widget="{
  company_id: '12345',
  clear_member: true,
  route_format: '/{page}'
  }" 

  bb-scroll-to="page:loaded" class="container">
   
</div>
```

By default, this will look for the `main.html` template. This `main.html` template allows you to set up a global template for the journey such as a header and footer and, in this case, a breadcrumb to control the page routing. Any content within this `<div>` will be treated as main content and loaded for each step of the journey.

The SDK calls `$Scope.defineNextPage` to automatically take you through the default steps of the booking journey. You can use the `bb-breadcrumbs` directive to override this.

```js
<div bb-breadcrumbs class="breadcrumbs_holder" ng-init="setRoute([
    {page:'event_list', title: 'Select a date'},
    {page:'event', title: 'Select tickets'},
    {page:'checkout_event', title: 'Checkout'},
    {page:'confirmation', title: 'Finish'}
    ])">
</div>
```

This allows you to set up custom page routes for your user journey. The `page:''` attributes allows you to set the template that is used for each step, so `page:'event_list'` would load the `events_list.html` template for that step. The `title:` allows you to change the `<title>` meta tag for the page.

You can also pass `disable_breadcrumbs: true` to disable a step once the user has loaded the step in question. This means that they cannot go back once its set.

```js
<div bb-breadcrumbs class="breadcrumbs_holder" ng-init="setRoute([
    {page:'event_list', title: 'Select a date'},
    {page:'event', title: 'Select tickets'},
    {page:'checkout_event', title: 'Checkout', disable_breadcrumbs: true},
    {page:'confirmation', title: 'Finish'}
    ])">
</div>
```

The example above would not allow a user to go back once they have loaded the checkout step.

## Combining Steps

You may want to combine multiple steps. You can do this using `when: route.event[slot, person]` or `when: route.event[date, time]`. This combines the directives into one step allowing you to create a custom template to suit your needs. The different steps available are as follows.

- Company
- Category
- Service 
- Person
- Resource
- Duration
- Date
- Time
- Client
- Summary
- Basket 
- Checkout 
- Slot
- Event
- Login

However, we do have an issue here. If we define `when: route.event[slot, person]` on confirmation it will try to call `$Scope.defineNextPage` twice. We also may want to change the available slots when the user chooses a person.

to overcome this we can use the `bb-page` page controller. This controller allows you to route steps back and forth when combining steps. You can attach `checkReady()` to the step DOM element. And it will wait until all of the steps in a single template have been completed.

Let's look at a complete example

```
<div bb-page>

  <div bb-item-details>
    <!-- template -->
  </div>

  <div bb-client-details>
    <!-- template -->
  </div>

  <button type="button" ng-click="checkReady() && routeReady()">
    Next
  </button>


</div>
```