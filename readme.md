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

> We use the js version if twig for this application so bare in mind that the docs are for PHP. Same syntax. Just rember that some features are not avalible before you start hitting your head against a wall.

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

## Features
- NPM
- Grunt
- Bower
- Less CSS
- Bower
- Rspec UI Tests

## HTML Structure
- og and twitter cards
- Google Structured Data
- IE Exceptions <html class="ie ie8" lang="en">
- support warning for browser version and no js. Based on modernizr

## Libs Included
- modernizr (loaded via bower)
- JQuery (loaded via bower)
- html5shiv (loaded via bower)
- es5-shim (loaded via bower)
- Google open sans (loaded via CDN)
- Font Awsome (loaded via bower)
- normalize.css (loaded via bower)
- animate.css (loaded via bower)

# Rspec Tests
More info on this coming.

== UI Test Project Layout

* features/*.feature : cucumber features
* features/step_definitions/web_steps.rb : generic steps that apply to all features
* features/step_definitions/[feature]_steps.rb : steps specific to an individual feature file
* support/env.rb : configures the driver and the hostname to use

== Prerequisites

* chromedriver: https://sites.google.com/a/chromium.org/chromedriver/getting-started
* Ruby http://www.ruby-lang.org/en/downloads/
* Ruby Gems http://rubygems.org/
* Bundler: sudo gem install bundler rake

== Configuration

* bundle install

== Running Features

* To run all features: rake
* To run a specific feature: cucumber features/search.feature

== Debugging

* To debug a specific step call save_and_open_page within the step

== Additional Documentation

* http://cukes.info (for general cucumber information)
* http://github.com/jnicklas/capybara (for actions such as click_link, click_button, etc...)

Pre-Prod Checklist
- moderizr has been created custom before deployment.
- google anlytics
- structured markup