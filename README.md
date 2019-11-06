# WhatDo -- web Application

# ![WebApp](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)

brief about our app("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

### Engineering Team

- Jessica Doyle (Project Manager)
- Ben Rosen (Product Manager)
- Cody Oberholtzer (Product Manager)
- Ahmed AM (Design Lead)

## Table of contents

- [App Description](#app-description)
- [Live Demo](https://whatdo.now.sh/)
- [Live API](https://thinkful-whatdo.herokuapp.com/)
- [Client-site repo](https://github.com/thinkful-ei-firefly/whatdo-client)
- [Server-site repo](https://github.com/thinkful-ei-firefly/whatdo-server)
- [User Stories](#user-stories)
- [Site Screenshots](#site-screenshots)
- [Wireframe](#wireframe)
- [Build with](#build-with)
- [Setup](#setup)
- [Running project](#running-project)
- [Running the tests](#running-the-tests)
- [Development](#development)
- [Endpoints](#Endpoints)

## App Description

<table>
<tr>
<td>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</td>
</tr>
</table>

## User Stories

- #### As a new user, I want to be able to create an account.
- #### As a returning user, I want to be able to sign into my account.
- #### As a user, I want to be able to search for things to do around a given area (by zip code).
- #### As a user, I want to search for events on a given day.
- #### As a user, I want to be able to search for things to do around my current location.
- #### As a user, I want to be able to see more information about an event of interest. (link to external site?)
- #### As a user, I want to be able to add events to my list/calendar
- #### As a returning user, I want to be able to see my events that I’ve added to my list/calendar.
- #### As a returning user, I want to be able to remove events from my calendar.
- #### As a user, I want to see the weather in the given location on the given day.
- #### As a user, I want to be able to filter events to search on the given day.

## To test out the app right away, log in using the demo credentials:

> Username: demo

> Password: pass

## Site Screenshots

- ### Signup Page.
  ![](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)
- ### Sign In Page
  ![](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)
- ### Dashboard Page
  ![](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)
- ### SearchEvents Page
  ![](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)
- ### MyEvents Page
  ![](https://github.com/thinkful-ei-firefly/whatdo-client/blob/master/src/assets/readme-images/whatdo_responsive.png?raw=true)

## Wireframe

- Landing Page
  - [ live version of the html wireframe](https://thinkful-ei-firefly.github.io/whatdo-wireframe/landingPage/index.html)

* Result Page
  - [ live version of the html wireframe](https://thinkful-ei-firefly.github.io/whatdo-wireframe/result-page/index.html)

- Signin Page

  - [ live version of the html wireframe](https://thinkful-ei-firefly.github.io/whatdo-wireframe/signInPage/index.html)

- Signup Page
  - [ live version of the html wireframe](https://thinkful-ei-firefly.github.io/whatdo-wireframe/signUpPage/index.html)

## Build with

- React
- Vanilla CSS
- Node package manager
- Node.js
- Express
- PostgreSQL

## Setup

To setup the application

- Fork or clone the project to your machine
- `npm install`.
-

## Running project

- `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

- `npm test` will start test this project.

## Endpoints

### /user

1. `POST /api/user`

Verifies input and creates a new account if valid.

### /auth

1. `POST /api/auth/token`

Verifies credentials and returns a JSON Web Token if valid.

### /event

1. `GET /api/event`

Returns an array of event objects.

2. `GET /api/event/:event_id`

Returns a single event object whose id matches `:event_id`.

3. `POST /api/event`

Verifies input and adds event to the database if valid.

4. `PATCH /api/event/:event_id`

Verifies input and updates the columns in the database for the row matching `:event_id`.

5. `DELETE /api/event/:event_id`

Deletes the row from the database where id matches `:event_id`.

## Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request
