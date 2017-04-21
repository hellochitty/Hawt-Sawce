import React from 'react';
import SauceIndexItem from './sauce_index_item';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';

class SauceIndex extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount(){
    this.props.getSauces();
  }


  redirect(){
    this.props.router.push("/home/sauces/new");
  }

  render(){
    return(
      <div className="col-2-3">
        <div className="sauce-index-header">
          <h1>Sauces</h1>
          <div id="add-sauce-button">
            <RaisedButton onClick={this.redirect}  label="+ Sauce"/>
          </div>
        </div>
        {this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} key={sauce.id}/>
        ))}
      </div>
    );
  }
}

export default withRouter(SauceIndex);
