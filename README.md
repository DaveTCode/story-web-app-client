[![Coverage Status](https://coveralls.io/repos/github/DaveTCode/story-web-app-client/badge.svg?branch=master)](https://coveralls.io/github/DaveTCode/story-web-app-client?branch=master)
[![Build Status](https://travis-ci.org/DaveTCode/story-web-app-client.svg?branch=master)](https://travis-ci.org/DaveTCode/story-web-app-client)

# Story Book - Web Client Application #

This is an angular 1.x & material design application for writing stories.

### Dependencies ###

* node.js + npm (https://nodejs.org/)

### Set up ###

* First step is to clone the repository into a directory (doesn't matter where)
* Run npm install in the new directory
    * this will install the dev dependencies (grunt plus plugins) and the runtime dependencies (angular, angular-material etc)

### Running the application locally ###

* You'll need two command prompts open
* In command prompt 1 run grunt watch from the root of the application
    * This will compile the js/less files and put the code into /build
* Run npm start
    * This will run a server locally which hosts the whole application
* You can now visit the site at http://localhost:8000/build

### Compiling for release ###

* Run grunt (no parameters) locally
* Find the results in /bin
    * These are all the static files that are required to host the website.