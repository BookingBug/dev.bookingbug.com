# Features
- ECMA6 ready with babel.js for browser support.
- Modular Grunt Tasks.
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

# Prerequisites
you need to have the below installed for this project.

- Node https://nodejs.org/
- Bower http://bower.io/

# Docs
- Wiki [https://github.com/maxmckenzie/FrontEndSeed/wiki](https://github.com/maxmckenzie/FrontEndSeed/wiki) - built on FrontEndSeed
- Express [http://expressjs.com/](http://expressjs.com/)
- Twig [http://twig.sensiolabs.org/](http://expressjs.com/)

> We use the JavaScript version of Twig for this application so bare in mind that the docs are for PHP. Same syntax. Just remember that some features are not available before you start hitting your head against a wall.

# Install and Start
run the following commands.

`npm install` To install all the node and bower dependencies. It also then builds all the assets with grunt.

then run `npm start` This launches the app and watches the `javascript/, css/` and `views/` directories for a change and then reboots/rebuilds where necessary.

# Heroku Support
> Heroku is the nuts. If you've not heard of it check it out. like now.... why are you still reading this?

So to deploy to Heroku. We have to do a couple of things. Firstly go get the tool-belt from there site https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Then run `heroku login` and enter your heroku account details.

Now its time to create the app. run `heroku create myApp` or whatever you want in place of 'myApp'. Now before you push, you must run a build-pack command to tell heroku to run a node instance, the reason for this is that our feature UI tests are in ruby. this is problematic as heroku picks this up and sets ruby as the framework rather than node.

So you'll need to run `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs`

I usually open a new shell (terminal window) at this point and run `heroku logs --tail` in the app directory. Cause we all love commands flying past right... oh yeah and that's where the error messages appear.

Once you're through the above run `git push heroku master` and watch that sweet sweet auto deploy unfold.

You can then run `heroku open` to open the application in a browser.