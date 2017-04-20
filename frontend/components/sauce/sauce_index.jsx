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
      <div>
        <h1>Sauces</h1>
        {this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} />
        ))}
      </div>
    );
  }
}

export default SauceIndex;
