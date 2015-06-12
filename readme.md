# FrontEndSeed
### Seed Project for prototypes and production front-ends


# Exsisting Project

`bower install`

`bundle install`

`npm install`

`npm start`

`npm test` needs to have a server running `npm start` in order to work.

`npm watch` run grunt and watch for changes

# New Project

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
- support warning for browser version and no js. Based on modinzr

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

# Download
`git clone ssh://git@gitlab.lemondigits.com:2022/internal/frontendseed.git`

or

`git clone http://gitlab.lemondigits.com/internal/frontendseed.git`

Then rename the file `mv frontendseed mynewproject`

`cd mynewproject`

Then set up your new git repo for the new project.

check the remote repo like this

`git remote -v`

which should give you back

```
origin	http://gitlab.lemondigits.com/internal/frontendseed.git (fetch)
origin	http://gitlab.lemondigits.com/internal/frontendseed.git (push)
```

remove it `git remote remove origin`

add the new repo in its place.

`git remote add origin http://gitlab.lemondigits.com/max/mynewproject.git`

or

`git remote add origin ssh://git@gitlab.lemondigits.com:2022/max/mynewproject.git`

then run `git remote -v` again to check that they are correct. They should look like the below

```
origin	ssh://git@gitlab.lemondigits.com:2022/max/mynewproject.git (fetch)
origin	ssh://git@gitlab.lemondigits.com:2022/max/mynewproject.git (push)
```

at this point if you'r using smartgit or a GUI you can open the local repo using CMD+O (add local working copy)

# Install Steps

## NPM
`npm init && sudo npm install -g grunt-cli && sudo npm install -g bower && npm install grunt --save && npm install grunt-contrib-watch --save && npm install grunt-contrib-less --save`

## Bower
`bower install` make sure to change the repo details in the bower.json file we did not create it on the fly as it where with npm, as there are many packages.

`grunt watch`

run the server in a new shell

` npm start `

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