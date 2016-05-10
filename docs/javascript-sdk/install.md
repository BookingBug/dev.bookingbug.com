# Install the JavaScript SDK

Using Node and Yeoman, you can create a stand-alone booking service that includes the JavaScript SDK. This will create a directory with all of the templates, styles and scripts you may need.

## Dependencies
you will need to install the following dependencies via the terminal before getting started. Once you've installed node [+ git] you can install the rest of the dependencies with `npm install -g name_of_dependency`

- [node.js](https://nodejs.org/en/)
- Yeoman Generator `npm install -g yo`
- Gulp `npm install -g gulp-cli`
- Bower `npm install -g bower`

> If you're not familiar with the terminal don't despair. You should take a look, as it's very powerful. [Codecademy do a really good interactive tutorial](https://www.codecademy.com/ru/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command) that will introduce you to the basics.

## Create your project
Once you have your dependencies installed you can download our Yeoman generator.

```
npm install -g generator-bookingbug
```

This will make the `yo bookingbug` command available globally on your local development environment. Next navigate to the directory where you want to create the application and type

```
yo bookingbug
```

> You can see a screen-cast of this [here](https://drive.google.com/file/d/0BySZotrqAKdcWFdjM0tVLUVkUjA/view)

you will be asked the following so make sure to have all the info you need.

- What is the name of your project? (No spaces in project name are allowed - use hyphens / underscores etc.)
- What type of application do you want? (Public-bookings application, allows for an end user to book without logging in, the member application is naturally opposite to this).
- What is your BookingBug company id? (The `company_id` can be obtained from the API Settings under BookingBug Advanced Settings e.g: ukw12345).
- What is the API URL? (This can be obtained from the API Settings menu in your BookingBug account). (Need clairificaiton) 

Once all of the above has installed - cd to the folder [project_name] and run gulp
`cd project_name`
`gulp` to watch files for changes and to serve your application on [http://localhost:8000](http://localhost:8000)
