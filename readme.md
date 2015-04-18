# FrontEndSeed
### Seed Project for prototypes and production front-ends

This project is a default front end start point. Made for LemonDigits.com fr use on client projects.

## Features
- NPM
- Grunt
- Bower
- Less CSS
- Bower
- Rspec UI Tests

## Structure
- og and twitter cards
- Google Structured Data
- IE Exceptions <html class="ie ie8" lang="en">

### Libs
- moderizr (bower)
- JQuery (bower)
- html5shiv (bower)
- es5-shim (bower)
- Google open sans (CDN)
- Font Awsome (bower)
- normalize.css (bower)
- animate.css (bower)
- Style Guide - kali - bower
- jReject (bower) its happening

to do - Picture Fill polyfill

Plugins
-- Default Menu

# DownLoad
```
git clone git://where.FrontEndSeed.will.live name-of-your-new-project

git init

git remote add origin git://where.FrontEndSeed.will.live name-of-your-new-project
```

# Install Steps

## NPM
`npm init && sudo npm install -g grunt-cli && sudo npm install -g bower && npm install grunt --save && npm install grunt-contrib-watch --save && npm install grunt-contrib-less --save`

## Bower
`bower install` make sure to change the repo details in the bower.json file we did not create it on the fly as it where with npm, as there are many packages.

`grunt watch`

# Rspec Tests

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