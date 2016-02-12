# Install the JavaScript SDK
The BookingBug JavaScript API is a powerful set of tools that you can use in any web page that allows you to embed JavaScript.

It is designed to be extremely simple to use, even for someone with only basic HTML skills and no JavaScript experience. It is also designed to be flexible and powerful enough to enable even the most demanding or sophisticated use cases.

## Extend the JavaScript SDK

Using Node and Yeoman, you can create a stand alone booking service that includes the JavaScript SDK. This will create a directory with all of the templates, styles and scripts you may need

## Dependencies
you will need to install the following dependencies via the terminal before getting started. Once you've installed node you can install the rest of the dependencies with `npm install -g name_of_dependency`

- [node.js](https://nodejs.org/en/)
- Yeoman Generator `npm install -g yo`
- Gulp `npm install -g gulp-cli`
- Bower `npm install -g bower`

> If your not familiar with the terminal don't despair. You should take a look as its very powerful. [Codecademy do a really good interactive tutorial](https://www.codecademy.com/ru/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command) on it that will introduce you to the basics.

## Create you project
Once you have your dependences installed you can download our Yeoman generator.

```
npm install -g generator-bookingbug
```

This will make the `yo bookingbug` command available globally on your local development environment. Next navigate to the directory where you want to create the application and type 

```
yo bookingbug
```

> You can see a screen cast of this [here](https://drive.google.com/file/d/0BySZotrqAKdcWFdjM0tVLUVkUjA/view)

you will be asked the following so make sure to have all the info you need.

- What is the name of your project?
- What type of application do you want? (Public-bookings application, allows for an end user to book without logging in, the member application is naturally the opposite to this).
- What is your BookingBug company id? (The `company_id` variable is the number you'll see at the top right of the screen when you log into your BookingBug account. E.g: ukw12345).
- What is the API URL? (this can be left as is, unless you have been told to use another specific end point).

Once all of the above has installed. Run `gulp` in the root of the directory to watch files for changes and to serve your application on [http://localhost:8000](http://localhost:8000)