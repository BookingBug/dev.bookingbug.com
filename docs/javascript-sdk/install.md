# Install the JavaScript SDK

Using Node and Yeoman, you can create a stand-alone booking widget that includes the JavaScript SDK. This will create a directory with all of the templates, styles and scripts you may need to extensively edit your booking widget.

## Dependencies
you will need to install the following dependencies via the terminal before getting started. Once you've installed node & git you can install the rest of the dependencies with `npm install -g name_of_dependency`

- [git](github.com)
- [node.js](https://nodejs.org/en/)
- Yeoman Generator `npm install -g yo`
- Gulp `npm install -g gulp-cli`
- Bower `npm install -g bower`

> If you're not familiar with the terminal [Codecademy do a really good interactive tutorial](https://www.codecademy.com/ru/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command) that will introduce you to the basics.

## Create your project
Once you have your dependencies installed you can download the Yeoman generator.

```
npm install -g generator-bookingbug
```

This will make the `yo bookingbug` command available globally on your local development environment. Next navigate to the directory where you want to create the application and type

```
yo bookingbug
```

This will begin creating your booking widget's directory on your local computer. Before it starts, you will need to give the generator your Bookingbug company's information:

- What is the name of your project? - This will create the folder your widget's files will be placed in (lowercase letters A-Z and numbers 0-9 only).
- What is your BookingBug company id? - The `company_id` can be obtained from the API Settings under BookingBug Advanced Settings e.g ukw12345.
- What is the API environment URL? - This can be obtained in the API Settings menu in your BookingBug account e.g. https://uk.bookingbug.com/

Once all of the above has been installed, navigate to the new folder that yeoman created (your answer to the "What is the name of your project?" question) and run `gulp` to watch files for changes and to host your application locally on [http://localhost:8000](http://localhost:8000)

> You can see a screen-cast of this entire process here:
[![asciicast](https://asciinema.org/a/1ik46ji01fgxyfs5j669knvs6.png)](https://asciinema.org/a/1ik46ji01fgxyfs5j669knvs6?speed=2)
