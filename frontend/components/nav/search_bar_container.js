import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({searchResults}) => {
  const holder = [];
  Object.keys(searchResults).forEach((key)=> holder.push(searchResults[key]));
  return {
    checkins: holder
  };
};

const mapDispatchToProps = dispatch => ({
  search: (text) => dispatch(search(text))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
