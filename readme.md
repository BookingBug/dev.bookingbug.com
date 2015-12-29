# FrontEndSeed
Seed Project for prototypes and production front end static-ish websites.
based on Express and Node. Its designed to be the jump off point when starting a new project.

# Prerequisites
you need to have the below installed for this project.

> Installing Ruby can be quite fidderly if your not familiar with it. We use it here to run UI tests so dont worry about it for the moment, you can set it up later. Mac comes with ruby installed but alas its the wrong version for our needs.

- Node https://nodejs.org/
- Bower http://bower.io/
- Ruby http://www.ruby-lang.org/en/downloads/
- Ruby Gems http://rubygems.org/
- Chromedriver https://sites.google.com/a/chromium.org/chromedriver/getting-started
- Bundler: `sudo gem install bundler rake`

# Docs
- Wiki https://github.com/maxmckenzie/FrontEndSeed/wiki
- Express http://expressjs.com/
- Twig http://twig.sensiolabs.org/ 

> We use the js version of twig for this application so bare in mind that the docs are for PHP. Same syntax. Just rember that some features are not avalible before you start hitting your head against a wall.

# How To Use
To start using this simply clone the repo like so

`git clone https://github.com/maxmckenzie/FrontEndSeed.git NewProject`

Relace NewProject with your project name. If you didnt know this, passing this argument after the git clone url will create a directory with the name NewProject and checkout the repo into that folder.

Then run `git remote remove origin` this will remove the original URL form your local repo. you can then add your repo URL. For more info on this take a look here https://help.github.com/articles/adding-a-remote/

> If you arer also using Github for your project then you can simply hit the fork button on this page https://github.com/maxmckenzie/FrontEndSeed

# Install and Start
run the following commands.

`bower install`

`bundle install`

`npm install`

then run 

`npm start`

You will also need to run `grunt watch` when editing the Less styles. grnu twill then build the CSS output for you.

# Heroku Support
> Heroku is the nuts. If you've not heard of it check it out. like now.... why are you still reading this?

So to deploy to Heroku. We have to do a couple of things. Firstly go get the toolbelt from there site https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Then run `heroku login` and enter your heroku account details.

Now its time to create the app. run `heroku create myApp` or whatever you want in place of 'myApp'. Now before you push, you miust run a buildpack command to tell heroku to run a node instance, the reason for this is that our feature UI tests are in ruby. this is probelematic as heroku picks this up and sets ruby as the framework rather than node.

So you'll need to run `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs`

I usually open a new shell (terminal window) at this point and run `heroku logs --tail` in the app directory. Cause we all love commands flying past right... oh yeha and thats where the error messages appear.

Once you're through the above run `git push heroku master` and watch that sweet sweet auto deploy unfold.