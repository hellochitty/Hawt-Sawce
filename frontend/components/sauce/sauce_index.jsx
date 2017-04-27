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
    this.props.getSaucesOrder(1);
  }

  handleChange(event, index, value){
    this.setState({value});
    this.props.getSaucesOrder(value);
  }

  redirect(){
    this.props.router.push("/home/sauces/new");
  }

  render(){
    let addSauceButton;
    if (this.props.session.currentUser){
      addSauceButton =  (
        <div id="add-sauce-button">
          <RaisedButton onClick={this.redirect}  label="+ Sawce"/>
        </div>
      );
    }

    let sauces;
    if (this.props.sauces[0]){
      sauces = this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} key={sauce.id}/>
      ));
    }


    return(
      <div className="main">
        <div className="col-2-3">
          <div className="sauce-index-header">
            <div className="sauce-index-header-text">
              <h1>Sawces</h1>
              <h3>All the sawce!</h3>
                <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{width: 300}}
                  anchorOrigin= {{"horizontal":"right","vertical":"bottom"}}
                  targetOrigin= {{"horizontal":"right","vertical":"top"}}
                  autoWidth={false}>
                  <MenuItem value={1} primaryText="Newest Sawce" />
                  <MenuItem value={3} primaryText="Highest Scoville (SHU)" />
                  <MenuItem value={7} primaryText="Highest Overall Rating" />
                  <MenuItem value={9} primaryText="Highest Heat Rating" />
                  <MenuItem value={5} primaryText="Most Checked In" />
                  <MenuItem value={2} primaryText="Oldest Sawce" />
                  <MenuItem value={4} primaryText="Lowest Scoville (SHU)" />
                  <MenuItem value={8} primaryText="Lowest Overall Rating" />
                  <MenuItem value={10} primaryText="Lowest Heat Rating" />
                </DropDownMenu>
            </div>
            {addSauceButton}
          </div>
          {sauces}
        </div>
        <div className="col-1-3">
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(SauceIndex);
