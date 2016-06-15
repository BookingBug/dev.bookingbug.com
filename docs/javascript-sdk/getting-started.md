# Getting Started

The BookingBug JavaScript SDK is built on top of the Google library [AngularJS](https://angularjs.org/).
It then uses the BookingBug REST API to access data, which means that you can also use the REST API and extend the JavaScript SDK as much as you need. The JavaScript SDK is a very flexible tool that you can use to create a booking widget tailored exactly to your company's needs.

## What you've installed

- **Yeoman** - Yeoman is a set of tools used to simplify and streamline the app building process. Yeoman generates the folders and files that make up your widget so that you can edit it.

- **Bower** - Bower is a system for package management. It installs all packages and dependencies your widget may need.

- **Gulp** - Gulp is a tool that can help with many web development tasks. For the Javascript SDK, Gulp is primarily used to locally host your widget.

- **SDK** - An SDK (Software Development Kit) is a set of tools that will allow you to create a fully functional web application. The Bookingbug Javascript SDK specifically allows you to create and edit your Bookingbug widget to create custom booking journeys tailormade for your own company.

## Editing your widget

Now that you’ve got your widget downloaded onto your system, you can begin editing it however you like. Your widget is written in HTML and CSS. To edit this code we recommend you use a text editor. This will make it easier to view and edit the code of your widget. Bookingbug recommends one of these:

- **[Sublime Text](https://www.sublimetext.com/)**

- **[Notepad++](https://notepad-plus-plus.org/)**

- **[Atom](https://atom.io/)**

Once you have installed a text editor, open the widget folder within the text editor. From here you can edit all aspects of your widget.

## Folder breakdown

To edit the widget, navigate to the src folder. The src folder holds everything you need to edit your widget. You should not need to change anything in the other folders. The src folder consists of 6 folders which contain the HTML, CSS and Javascript files that make up your widget. These are the folders in the src folder:

- **Fonts** - Put any custom fonts here.

- **Images** - Put any images you want to use here.

- **Javascripts** - This is where the iframe Javascript is stored.

- **Stylesheets** - This is where you can edit any visual aspects of your widget. The files in here are CSS files.

- **Templates** - This is where you can edit the content of each page. You can also edit your journey’s path in the main.html file within the Templates folder. The files here are HTML files.

To create a simple, customised widget you should only need to edit files in the Templates and Stylesheets folders. To do this, you will need to know basic HTML and CSS. If you do not know these coding languages, [Codecademy](http://codecademy.com) have some very good, free tutorials on how to code in HTML and CSS (as well as many other coding languages). These tutorials are quite extensive and they should teach you everything you will need to fully utilise the JavaScript SDK's features.

## Using Angular in HTML

**HTML in-line attribute based mark-up (Angular Directives)**

The API makes use of HTML attributes to identify important sections of your page in which to add data or respond to actions. These special attributes derive different meaning, such as specifying the data you wish to load, controlling a loop around a list of items, or deciding which HTML elements to show or hide in different circumstances.

**Handlebars {{ var }}**

AngularJS uses a notation to display custom data embedded directly in your HTML. The BookingBug script parses these special tags when it loads to replace with the correct live data. This allows you to show dynamic and real-time data quickly and easily in your website. That data could be anything from a list of services you offer, to the number of spaces remaining for an event.

**HTML partials**

A key part of the booking process is the need for the customer to navigate through a clear and simple interface that starts with them seeing services and availability, and ends with them receiving a confirmation of their booking. BookingBug gives you, the developer or web designer, complete flexibility over this journey.

A key part of how BookingBug makes this possible without using iframes is to use a series of HTML partials. We can host and run these partials, or you can host them on your own site as you help the client navigate through the checkout. These can be full pages, pop-ups, or just small AJAX-loaded pages. BookingBug gives you the tools to navigate and cache the data and pages creating a smooth, rich customer experience. We are also working on a host of examples and demo's you can copy and customize and tailor for your own needs and requirements.

**Further Reading**

You won't need to know everything about angular and handle bars to use the SDK but you may want to find out more.

- **[Learn more about Handlebars](http://code.tutsplus.com/tutorials/an-introduction-to-handlebars--net-27761)**
- **[Learn more about Angular](https://www.codecademy.com/learn/learn-angularjs)**
- **[Learn more about HTML Partials](http://handlebarsjs.com/partials.html)**
