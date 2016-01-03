# FrontEndSeed
Seed Project for prototypes and production front end static-ish websites.
based on Express and Node. Its designed to be the jump off point when starting a new project.

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
- IE and no JS user warnings

# Prerequisites
you need to have the below installed for this project.

- Node https://nodejs.org/
- Bower http://bower.io/

# Docs
- Wiki https://github.com/maxmckenzie/FrontEndSeed/wiki
- Express http://expressjs.com/
- Twig http://twig.sensiolabs.org/ 

> We use the js version of twig for this application so bare in mind that the docs are for PHP. Same syntax. Just remember that some features are not available before you start hitting your head against a wall.

# How To Use
To start using this simply clone the repo like so

`git clone https://github.com/maxmckenzie/FrontEndSeed.git NewProject`

Replace NewProject with your project name. If you didn't know this, passing this argument after the git clone url will create a directory with the name NewProject and checkout the repo into that folder.

Then run `git remote remove origin` this will remove the original URL form your local repo. you can then add your repo URL. For more info on this take a look here https://help.github.com/articles/adding-a-remote/

> If you are also using Github for your project then you can simply hit the fork button on this page https://github.com/maxmckenzie/FrontEndSeed

# Install and Start
run the following commands.

`npm install`

then run 

`npm start`

You will also need to run `grunt watch` when editing the Less styles. grunt twill then build the CSS output for you.

# Heroku Support
> Heroku is the nuts. If you've not heard of it check it out. like now.... why are you still reading this?

So to deploy to Heroku. We have to do a couple of things. Firstly go get the tool-belt from there site https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Then run `heroku login` and enter your heroku account details.

Now its time to create the app. run `heroku create myApp` or whatever you want in place of 'myApp'. Now before you push, you must run a build-pack command to tell heroku to run a node instance, the reason for this is that our feature UI tests are in ruby. this is problematic as heroku picks this up and sets ruby as the framework rather than node.

So you'll need to run `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs`

I usually open a new shell (terminal window) at this point and run `heroku logs --tail` in the app directory. Cause we all love commands flying past right... oh yeha and thats where the error messages appear.

Once you're through the above run `git push heroku master` and watch that sweet sweet auto deploy unfold.