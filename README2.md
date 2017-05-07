# HAWT SAWCE

[HawtSawce live][heroku]

[heroku]: http://www.herokuapp.com

HawtSawce is a full-stack web app inspired by Untappd .  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

Features implemented in HawtSawce will allow users to do the following:
 1. Log-In / Sign-Up
 2. Create, view, update and delete hot sauces
 3. Check-in and review hot sauces
 4. Have a feed of all reviews
 5. Maintain and view a personal profile

## Design Docs
  - [Views Overview][views]   
  - [Sketch Files][sketch]
  - [Component Hierarchy][components]
  - [Sample State][state]
  - [API Endpoints][api]
  - [DB Schema][schema]

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Sawces Model, API, and components (2 days)

**Objective:** Sawces can be created, read, edited and destroyed through
the API.

### Phase 3: Checkins (2 days)

**Objective:** Checkins can be created, read, edited and destroyed through
the API.
### Phase 4: Profile (1 day)

**Objective:** Profile can be read, and edited through the API.

### Phase 5: Searching (1 day, W2 Th 6pm)

**Objective:** Sauces can be searched

### Phase 6: - Bookmarking (1 day, W2 F 6pm)

**Objective:** Sauces can be bookmarked by users

### Bonus Features (TBD)
- [ ] Tags
- [ ] Sauce Creator Pages
- [ ] See others' profiles


[views]: https://github.com/hellochitty/Hawt-Sawce/tree/master/docs
[sketch]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/mockups.sketch
[schema]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/schema.md
[state]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/sample-state.md
[api]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/api-endpoints.md
[components]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/component-hierarchy.md


The search bar feature of the app utilizes pg_search multi-search on the backend to complete the search, and a material-ui autocomplete component to display results. A key challenge here was to understand how to use pg_search in order to query multiple tables, and then send back different information to the front-end based on the table queried. An additional struggle was using the material-ui autocomplete dropdown to show search results. To maintain style consistency, I had to use this material-ui component to render my search in a way that was consistent with existing elements. As the standard usage of this dropdown dictates a somewhat static list of items which will then be autocompleted, I had to extend it to both dynamically update as the user enters information and re-route the user to a different page upon click. My strategy to solve these problems was to break everything down step by step, get one step working and then move on to the next.
