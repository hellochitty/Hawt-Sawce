import React from 'react';
import SauceIndexItem from './sauce_index_item';

class SauceIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSauces();
  }

  render(){
    return(
      <div className="col-2-3">
        <h1>Sauces</h1>
        {this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} key={sauce.id}/>
        ))}
      </div>
    );
  }
}

export default SauceIndex;
