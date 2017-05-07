# HAWT SAWCE

[HawtSawce live][heroku]

[heroku]: http://www.herokuapp.com

HawtSawce is a full-stack web app inspired by Untappd. We seek to create a community for hot sauce lovers globally by connecting hot sauces lovers to each other and to new sauces. The app provides functionality to add hot sauces, checkin/review them, search for sauces, and add comments to checkins and reviews.

HawtSawce is built using a RoR backend, PostgreSQL backend, and React/Redux frontend.

## Features

### Sawce Sorting
The Sawce sorting feature was a really interesting component to build. The dropdown itself was implemented using Material-Ui. The challenges here were to determine whether the sorting should be done in the frontend or backend, and also how to design the sort to most efficiently run the sort.
<br>
<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/hawt_sawce_sorting.gif" alt="Hawt Sawce Sorting" width="400">

Here’s how it works:

1. On each dropdown click, an AJAX request is sent to my backend with a code representing the sort option selected.
2. The rails backend then does the appropriate ActiveRecord query which hits the database.
3. The response sent back to the front-end is an array containing the IDs of the sawces sorted in the correct order, and this result is then stored in my front-end store.
4. All of the sawces are already in the store due to an AJAX call made during the ‘componentDidMount’ lifecycle step. These are stored in a hash, with the keys being the sauce_ids, and the values being the entire sawce object.
5. With the sawces already in state, the sawces can then be displayed in order by doing an O(n) lookup using the array of IDs and the hash of sawces.
```javascript
const mapStateToProps = ({sauces, saucesOrder, session}) => {
  const holder = saucesOrder.map((sauceId) => sauces[sauceId]) || [];
  return {
    sauces: holder,
    session: session
  };
};
```

### UI
While not specifically a feature, numerous UI components were challenges to source and implement. There were a number of libraries I learned and implemented in order to have a crisp and functional UI. Among these included material-ui, react-intl, and react-rating. After deciding to use a library, it is time-intensive and often quite difficult to choose one. Reading the documentation leads to a long phase of experimentation to learn how to implement the components, to determine whether or not they fit your usecase, and to imagine if it will continue to work for future usecases.
Below is an implementation of search with the Material-UI Autocomplete, which is used to display results in the frontend, with pg-search (multisearch) being used in the backend for the cross table search.
<br>
<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/search.gif" alt="Search" width="400">
```javascript
import AutoComplete from 'material-ui/AutoComplete';
render(){
  const searchText = (
    <i class="fa fa-search" aria-hidden="true"></i>
  );
  return(
    <AutoComplete
      searchText={this.state.searchText}
      onUpdateInput={this.handleUpdateInput}
      hintText="Search..."
      dataSource={this.props.searchResults}
      fullWidth={true}
      onNewRequest={this.handleNewRequest}
      />
  );
}
```

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
