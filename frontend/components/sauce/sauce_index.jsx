import React from 'react';
import SauceIndexItem from './sauce_index_item';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SauceIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 1};
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount(){
    this.props.getSauces();
  }

  handleChange(event, index, value){
    this.setState({value});
  }

  redirect(){
    this.props.router.push("/home/sauces/new");
  }

  render(){
    let addSauceButton;
    if (this.props.session.currentUser){
      addSauceButton =  (
        <div id="add-sauce-button">
          <RaisedButton onClick={this.redirect}  label="+ Sauce"/>
        </div>
      );
    }



    return(
      <div className="main">
        <div className="col-2-3">
          <div className="sauce-index-header">
            <div className="sauce-index-header-text">
              <h1>Sauces</h1>
              <h5>Check out our sauces!</h5>
                <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{width: 300}}
                  anchorOrigin= {{"horizontal":"right","vertical":"bottom"}}
                  targetOrigin= {{"horizontal":"right","vertical":"top"}}
                  autoWidth={false}>
                  <MenuItem value={1} primaryText="Newest Sauce" />
                  <MenuItem value={2} primaryText="Oldest Sauce" />
                  <MenuItem value={3} primaryText="Highest Scoville" />
                  <MenuItem value={4} primaryText="Lowest Scoville" />
                </DropDownMenu>
            </div>
            {addSauceButton}
          </div>

          {this.props.sauces.map(sauce => (
            <SauceIndexItem sauce={sauce} key={sauce.id}/>
          ))}
        </div>
        <div className="col-1-3">
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(SauceIndex);
