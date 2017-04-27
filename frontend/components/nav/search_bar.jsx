import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {withRouter} from 'react-router';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      dataSource:[
        {
          text: 'sauce-1',
          value: ("/home/sauces/145")
        },
        {
          text: 'sauce 2',
          value: ("/home/sauces/146")
        },
      ]
      };
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleNewRequest(i){
    this.props.router.push(i.value);
    this.setState({
      searchText: '',
    });
  }

  handleUpdateInput(searchText){
    this.setState({
       searchText: searchText,
     });
  }

  render(){
    const searchText = (
      <i class="fa fa-search" aria-hidden="true"></i>
    );

    return(
      <AutoComplete
        searchText={this.state.searchText}
        onUpdateInput={this.handleUpdateInput}
        hintText="Search..."
        dataSource={this.state.dataSource}
        fullWidth={true}
        onNewRequest={this.handleNewRequest}
        />
    );
  }
}

export default withRouter(SearchBar);