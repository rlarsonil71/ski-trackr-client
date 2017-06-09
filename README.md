[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ski Trackr Client - Capstone

## Project Description

Enjoy skiing or snowboarding???

This application allows a current user once logged into the application to log
and view their ski or snowboard trips.  It uses a custom Express API to create,
read, update and delete user trips.  This implementation supports multiple users
one at a time but only the current user's trips are displayed and are able to
be updated and/or deleted.  This application is deployed online at the URL found
below.

This is my final Capstone project for the WDI (Web Development Immersive) LM01 cohort at General Assembly Boston.

Project Start Date: June 5th 2017
Project End Date: June 9th 2017

## Project Features

1.  Single page application (SPA) using a custom back end API Express
    implementation written in JavaScript.

2.  Full user sign up, sign in, change password and sign out authentication
     with custom back end Express server.

3.  Complete user authentication error handling for user sign up, sign in,
     change password and sign out to promote user experience.

4.  Full support of trips resource API AJAX events with custom back end Express
     server that can create, read, update and delete trips data in
     a MongoDB database using custom GET, POST, PATCH, and DELETE RESTful
     requests.  All actions which change data are authenticated and the changed
     data is "owned" by the current user performing the change.

5.  Use of a Express ORM to create an trips database table structure and
     interact with the data.

6.  Use of jQuery and Handlebars templates and helpers for DOM manipulation and
     event handling.

7.  Use of Heroku to maintain backend API using its mLab MongoDB functionality.

8.  Bootstrap Modals, Dropdown menus and Navbar

## Project Links

#### Front-End Ski-Trackr Client Application URL
-   [`Front-End Ski-Trackr Client URL`](https://rlarsonil71.github.io/ski-trackr-client/)

#### Heroku API URL
-   [`Heroku API URL`](https://protected-gorge-95856.herokuapp.com/)

#### GitHub Application Repositories
-   [`Front-End Client Github Repo`](https://github.com/rlarsonil71/ski-trackr-client)
-   [`Back-End API Github Repo`](https://github.com/rlarsonil71/ski-trackr-api/)

## Project Requirements
-   [`capstone-project`](https://github.com/ga-wdi-boston/capstone-project)

## Project Dependencies
-   [`browser-template`](https://github.com/ga-wdi-boston/browser-template)
-   [`ski-trackr-api`](https://github.com/ga-wdi-boston/ski-trackr-api)
-   [`express-api-template`](https://github.com/ga-wdi-boston/express-api-template)
-   [`express-api-deployment-guide`](https://github.com/ga-wdi-boston/express-api-deployment-guide)
-   [`heroku`](https://dashboard.heroku.com/apps)

## Client Screenshot

![Alt text](/assets/images/SkiTrackrClientScreenshot.png?raw=true "Ski Trackr Client Screenshot")

## List of Technologies Used

1.  HTML, CSS, JavaScript
2.  jQuery, SASS
3.  Bootstrap navbar, modals and drop-down menus
4.  Handlebars templates
5.  Express Model/Controller
6.  AJAX
7.  Heroku with mLab
8.  Mongoose
9.  MongoDB

## List of Servers Used

#### Front-End
-  [`GRUNT server`](http://localhost:7165/)

#### Back-end EXPRESS API Server
-  [`ski-trackr-api`](http://localhost:4741/trips)

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## Installation

Start with `grunt serve`.

## Planning and Software Design - Development Process

As with all the previous projects, I first read over the project requirements to
understand what was needed to achieve MVP (minimal viable product).  Once that
was understand, I thought of a project idea.  I created the wireframes, user
stories, and ERD.  Once that was complete, I decided to use MongoDB since it is
more flexible than Postgres to use if I needed to change my resource model.
From the ERD, I proceeded to design and build the basic backend tables I needed.

I concentrated first on the backend model API working on building and testing CRUD
CURL scripts for user and trips resource.  Once all CRUD scripts worked successfully
for user authentication (sign-up, sign-in, change-password, and sign-out) and for
the trips resource, I used a front-end template that was used in our team project
to build out the front-end client.  I started building front-end client functionality
starting with the user authentication functions followed by logging and viewing
ski and snowboard trip entries.

I tried to build more on Bootstrap such as using a Navbar, modals and dropdown
menus.  I added a date picker to the `log my trip` and `update my trip` modal
forms.  I added user edits throughout the application showing alerts to the user
which are rendered below the navbar.

I experimented with Angular user authentication, components and interfaces but
due to project time constraints, proceeded to use the browser-template without
a front-end framework in order to achieve project MVP.

## Planning - Problem Solving Strategy

1.  Using Google Chrome Development Tools (Inspect).
2.  Add console.log messages to code.
3.  Add debugger and step through code examining variables and logic.
4.  Review WDI class notes and previous trainings, labs, and/or studies.
5.  Google issue (i.e. handlebars, helpers, error msg)
6.  Open issue in GitHub capstone-project repository.

## Coding Standards

1.  Used git source code control and GitHub repositories.
2.  Commented code to describe use of functions and variables as well as authorization and client/API logic.
3.  Used semantic naming for functions, variables and parameters.
4.  Used semantic naming for HTML tags, classes and IDs.
5.  Followed all linter suggestions including proper spacing and indentations.
6.  Frequent and small commits to git hub repository.
7.  Followed separation of concerns as often as possible.


## Wireframes

## Main Wireframe

![Alt text](/assets/images/SkiTrackrClientMainWireframe.jpg?raw=true "Ski Trackr Main Wireframe")

## Show Trips Wireframe

![Alt text](/assets/images/SkiTrackrClientShowTripsWireframe.jpg?raw=true "Ski Trackr Show Trips Wireframe")

## Trip Summary Wireframe

![Alt text](/assets/images/SkiTrackrClientTripSummaryWireframe.jpg?raw=true "Ski Trackr Trip Summary Wireframe")

## User Stories

1.	Original client will allow the user to sign up or sign in to the application.
2.	As a user, I want to sign up and create an account.
3.	As a user, I want to sign in so I can log ski or snowboard trips.
4.	As a user, I want to be able to change my password.
5.	As a user, I want to be able to sign out of the application.
6.	As a user, I want to create a log of my ski or snowboard trip selecting the resort, trip date, equipment type, conditions, number of runs, favorite run, and comments on how the day went.
7.	As a user, I want to only have one active trip at a time.
8.	As a user, I want to be able to show my visits.
9.	As a user, I want to be able to update information about a single trip such as trip date, resort name, equipment type, conditions, number of runs, favorite run, and comments on how the day went.
10.	As a user, I want to be able to delete a trip which clears out the trip from my list of all trips.
11.	As a user, I want to view a trip summary showing the total number of days skied and snowboarded.
12.	As a user, I want to view a trip summary showing the average runs per visit.
13. As a user, I want to view a trip summary showing the most runs in one day.

## Unsolved Problems or Major Hurdles

There are no known problems to date.  The only major hurdles were trying to remember
MongoDB, controlling user flow showing no user-facing errors as well as dealing
systematically with click event handlers for each of the modals and dropdown
menus as well as the submit event handlers for each of the modal forms.

When given more time, I will experiment porting the front-end from browser-template
to a front-end framework preferably Angular as well as add additional features
such as a trip summary stats page to satisfy some user stories mentioned above.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
