# HAWT SAWCE

[HawtSawce live][heroku]

[heroku]: http://www.herokuapp.com

HawtSawce is a full-stack web app inspired by Untappd. We seek to create a community for hot sauce lovers globally by connecting hot sauces lovers to each other and to new sauces. The app provides functionality to add hot sauces, checkin/review them, search for sauces, and add comments to checkins and reviews.

HawtSawce is built using a RoR backend, PostgreSQL backend, and React/Redux frontend.

## Features

### Search
The search bar feature of the app utilizes pg_search multi-search on the backend to complete the search, and a material-ui autocomplete component to display results. A key challenge here was to understand how to use pg_search in order to query multiple tables, and then send back different information to the front-end based on the table queried. An additional struggle was using the material-ui autocomplete dropdown to show search results. To maintain style consistency, I had to use this material-ui component to render my search in a way that was consistent with existing elements. As the standard usage of this dropdown dictates a somewhat static list of items which will then be autocompleted, I had to extend it to both dynamically update as the user enters information and re-route the user to a different page upon click. My strategy to solve these problems was to break everything down step by step, get one step working and then move on to the next.

### UI
While not specifically a feature, numerous UI components were challenges to source and implement. There were a number of libraries I learned and implemented in order to have a crisp and functional UI. Among these included material-ui, react-intl, and react-rating. After deciding to use a library, it is time-intensive and often quite difficult to choose one. Reading the documentation leads to a long phase of experimentation to learn how to implement the components, to determine whether or not they fit your usecase, and to imagine if it will continue to work for future usecases.

## Future Directions for the Projects
### Bookmarks
Bookmarking is an important function of any discovery app. Users not only want to rate sauces that they have tasted, but will also want to pin sauces that they want to taste in the future.

### Email Integration
Email communications between an app and a user is fundamental to an app's usability. Users need to be able to authenticate their accounts and to retrieve passwords if they lose them.

## Design Docs
- [Views Overview][views]   
- [Sketch Files][sketch]
- [Component Hierarchy][components]
- [Sample State][state]
- [API Endpoints][api]
- [DB Schema][schema]




[views]: https://github.com/hellochitty/Hawt-Sawce/tree/master/docs
[sketch]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/mockups.sketch
[schema]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/schema.md
[state]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/sample-state.md
[api]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/api-endpoints.md
[components]: https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/component-hierarchy.md
