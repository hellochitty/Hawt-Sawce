import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({searchResults}) => {
  const holder = [];
  Object.keys(searchResults).forEach((key)=> holder.push(searchResults[key]));
  if (holder.length === 0){
    holder.push({text:"no results", value:"/home"});
  }
  return {
    searchResults: holder
  };
};

const mapDispatchToProps = dispatch => ({
  search: (text) => dispatch(search(text))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
