# Features
- ECMA6 ready with babel.js for browser support.
- Github Flavoured Markdown
- Dynamic markdown doc loading via `app.set('docs/:categories/:pages')`
- highlight.js syntax highlighting
- Modular Grunt Tasks
- LESS
- CSS auto prefix
- Grunt Build Notifications
- normalize.css
- fontawesome
- animate.css
- html5shiv
- es5-shim
- jquery
- modernizr
- Desktop Notifications
- IE and no JS user warnings

# Important Reading
- [Style guide](https://github.com/BookingBug/dev.bookingbug.com/wiki/Style-Guide)
- [Contribution guide](https://github.com/BookingBug/dev.bookingbug.com/wiki/Contributing)

# Prerequisites
You need to have the below installed for this project.

- Node 5 > https://nodejs.org/
- Bower http://bower.io/
- Direnv
- npm install -g concurrently

# Docs
- Wiki [https://github.com/maxmckenzie/FrontEndSeed/wiki](https://github.com/maxmckenzie/FrontEndSeed/wiki) - built on FrontEndSeed
- Express [http://expressjs.com/](http://expressjs.com/)
- Twig [http://twig.sensiolabs.org/](http://expressjs.com/)

> We use the JavaScript version of Twig for this application so bare in mind that the docs are for PHP. Same syntax. Just remember that some features are not available.

# Install and Start
To install the documentation portal, run:

    `npm install` To install all the node and bower dependencies. It also then builds all the assets with grunt.

To start the application, run:

    `npm start`

## direnv

[Direnv](http://direnv.net/) is an environment switcher for the shell. It will keep track of the environment variables you'll need for the project. You can find an example .envrc-example in the root of the project. Once you have install direnv `cp .envrc-example .envrc` and add the necessary environment variables to the .envrc file and `run direnv allow` to enable them in your shell.

# API Dependencies
The flarum and clients service API end points have yet to be mocked in the test suite, meaning in order to run the developer portal locally, you will need to install the following repositries:

https://github.com/BookingBug/clients-service
https://github.com/flarum/flarum - make sure to set default user to username `admin` password `test`. As the form authentication is the one that gets used when logging in.

> Depending on the localhost port the applications are served on, you may need to update these values in the .envrc file:

```
export FLARUM_URL="http://localhost/"
export CLIENTS_SERVICE_URL="http://localhost:5555"
export PATH="./node_modules/.bin:$PATH"
export NODE_ENV="development"
```

# Tests
With clients-service and flarum running locally, update direnv (see below) by running  `direnv allow`, then in the root of the application run `npm test`.

To build the /app directory to /dist ready for production use run `npm run build` this will compile all the code using Babel stage 0

# Heroku Support
To deploy to Heroku. First install, [tool-belt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

Then run `heroku login` and enter your heroku account details.

Now its time to create the app. Run `heroku create myApp` ('myApp' can be replaced with a different name). Now before you push, you must run a build-pack command to tell heroku to run a node instance. Heroku can do this automatically but its a good idea to set it as well just in case.

    `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs`

> To moinitor heroku log output, run `heroku logs --tail` in the app directory

Once everything is done, run `git push heroku master` to initiate the deploy.

You can then run `heroku open` to open the application in a browser.
