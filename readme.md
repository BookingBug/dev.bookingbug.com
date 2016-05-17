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
you need to have the below installed for this project.

- Node 5 > https://nodejs.org/
- Bower http://bower.io/
- Direnv
- npm install -g concurrently

# Docs
- Wiki [https://github.com/maxmckenzie/FrontEndSeed/wiki](https://github.com/maxmckenzie/FrontEndSeed/wiki) - built on FrontEndSeed
- Express [http://expressjs.com/](http://expressjs.com/)
- Twig [http://twig.sensiolabs.org/](http://expressjs.com/)

> We use the JavaScript version of Twig for this application so bare in mind that the docs are for PHP. Same syntax. Just remember that some features are not available before you start hitting your head against a wall.

# Install and Start
run the following commands.

`npm install` To install all the node and bower dependencies. It also then builds all the assets with grunt.

then run `npm start`

# API Dependencies

I'm yet to mock the flarum and clients service API end points in the test suite. So for the sake of using the developer portal locally. You will need to get the following repos and install them on your machine.

https://github.com/BookingBug/clients-service
https://github.com/flarum/flarum

> depending on the locahost port you serve these apps on you'll need to update these values in the .envrc file

```
export FLARUM_URL="http://localhost/"
export CLIENTS_SERVICE_URL="http://localhost:5555"
export PATH="./node_modules/.bin:$PATH"
export NODE_ENV="development"
```

# Tests
Given you have the above apps running locally and you've updated your direnv by hitting `direnv allow` then in the root of this application you can enter `npm test` and it will run the `npm start` command concurrently and then the tests.

## direnv

[Direnv](http://direnv.net/) is an environment switcher for the shell. It will keep track of the environment variables you'll need for the project. You can find an example .envrc in the root of the project, you may need to alter it to fit your environment. For more information, [read the documentation](http://direnv.net/).

To allow the environment variables run the below command

```
direnv allow
```

To build the /app directory to /dist ready for production use run `npm run build` this will compile all the code using Babel stage 0

# Heroku Support
> Heroku is the nuts. If you've not heard of it check it out. like now.... why are you still reading this?

So to deploy to Heroku. We have to do a couple of things. Firstly go get the tool-belt from there site https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Then run `heroku login` and enter your heroku account details.

Now its time to create the app. run `heroku create myApp` or whatever you want in place of 'myApp'. Now before you push, you must run a build-pack command to tell heroku to run a node instance. Heroku can do this automatically but its a good idea to set it as well just in case.

So you'll need to run `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs`

I usually open a new shell (terminal window) at this point and run `heroku logs --tail` in the app directory. Cause we all love commands flying past right... oh yeah and that's where the error messages appear.

Once you're through the above run `git push heroku master` and watch that sweet sweet auto deploy unfold.

You can then run `heroku open` to open the application in a browser.
