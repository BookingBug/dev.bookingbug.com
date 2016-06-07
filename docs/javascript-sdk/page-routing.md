# Page Routing

Page Routing is the most important aspect of editing your widget through the Javascript SDK. By configuring the page route you will decide on every step of your customer booking journey. You can decide on every page your customers must progress through in order to create a booking with your company. This needs to be carefully planned so that the correct pages are present, otherwise you may not gain all the information you need about the customer and the customer may not learn all the information they need about their booking. Thankfully, setting up the page route is relatively simple. To get started, open your widget folder in a text editor and navigate to src/templates/main.html.

## Overriding the default route

Find this section of code at the top of your main.html file:

```js
 <!-- BREADCRUMB ROUTE
  <div bb-breadcrumbs class="breadcrumbs_holder" ng-init="setRoute([
    {page:'event_list', title: 'Select an event'},
    {page:'event', title: 'Event'},
    {page:'checkout', title: 'Confirmation'}
    ])">

    <ol class="breadcrumb"> 
      <li ng-repeat="step in bb.allSteps" ng-class="{'active': step.active, 'passed': step.passed, 'disabled': isDisabledStep(step)}">
        <button type="button" ng-click="loadStep(step.number)" ng-class="{'active': step.active, 'passed': step.passed}" ng-disabled="isDisabledStep(step)">
          <span class="step-num">{{step.number}}.</span>
          <span class="step-title">{{step.title}}</span>
        </button>
      </li>
    </ol>
  </div> 
  -->
```

This is the page route. At present, the page route is a comment and is not being read by the widget. Your widget is currently loading a default page route through the use of $Scope.defineNextPage. To override this and begin creating your own page route, delete the comment and comment tags (<!-- BREADCRUMB ROUTE -->). Now, your widget should be loading the page route in the bb-breadcrumbs directive.

## Creating your own journey

Now that your widget is pointing to the correct route, it’s time to customise your journey’s steps. You should only need to edit this portion of code:

```js
<div bb-breadcrumbs class="breadcrumbs_holder" ng-init="setRoute([
    {page:'event_list', title: 'Select an event'},
    {page:'event', title: 'Event'},
    {page:'checkout', title: 'Confirmation'}
    ])">
```

As you can see, the route is made up of the pages within the brackets. These pages will be ordered in the journey in the order they are listed. To add a new page, simply input the name of a file within the templates folder and a title into the following template and add it into the list:

```
{page:’example-page’, title: ‘Example’},
```

For example, if you wanted to add a page for the customer to input their details with the title “Customer Details”, you would input: 

```
{page:’client’, title: ‘Customer Details’},
```

This would go into the list where you want the customer details page to appear. To fully customise your journey, edit the bb-breadcrumbs directive with every page you wish to add to your customer journey in the order you want them to appear in the format above. Make sure the syntax is correct and all pages are available. If something is incorrect or cannot be found, the widget will revert to the default page route instead of your custom journey.

## Further customisation

Your widget’s page route is highly customisable. While you should be able to create a functional and comprehensive booking journey using the method above, you can also customise it further in a variety of different ways.

### Creating a Services widget

The Javascript SDK is primarily a tool to create events widgets. However, that does not mean you cannot tailor your page route to display a services booking journey instead. It only takes one simple change as well. All you need to do is change the first page in bb-breadcrumbs to “service_list” instead of “event_list”:

```
{page:’service_list’, title: ‘Services’},
```

This should change the widget from an event widget to a services widget.

### Stopping customers returning to a page

By adding “disable_breadcrumbs: true” to a booking step, you can prevent customers from returning to a page via their browser’s back button. This is especially important if you do not want customers returning and editing pages with sensitive information on them, i.e. details and payment pages. It can also prevent customer confusion and errors. Here is a basket step:

```
{page:'checkout_event', title: 'Checkout', disable_breadcrumbs: true},
```

This step will be disabled after the customer has loaded it once. This means it cannot be loaded a second time during a single booking.

### Combining Steps

You may want to combine multiple steps. You can do this using `when: route.event[slot, person]` or `when: route.event[date, time]`. This combines the directives into one step allowing you to create a custom template to suit your needs. The different steps available are as follows.

- **Company**
- **Category**
- **Service**
- **Person**
- **Resource**
- **Duration**
- **Date**
- **Time**
- **Client**
- **Summary**
- **Basket** 
- **Checkout** 
- **Slot**
- **Event**
- **Login**

However, we do have an issue here. If we define `when: route.event[slot, person]` on confirmation it will try to call `$Scope.defineNextPage` twice. We also may want to change the available slots when the user chooses a person.

to overcome this we can use the `bb-page` controller. This controller allows you to route steps back and forth when combining steps. You can attach `checkReady()` to the step DOM element. And it will wait until all of the steps in a single template have been completed as per the below example.

```js
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
