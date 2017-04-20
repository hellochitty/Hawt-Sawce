import React from 'react';
import Spinner from '../ui/spinner';

class Sauce extends React.Component{
  compoentWillReceiveProps(newProps){
    if (this.props.params.sauce_id !== newProps.params.sauce_id){
      this.props.getSauce(newProps.params.sauce_id);
    }
  }
  
  componentDidMount(){
    this.props.getSauce(this.props.params.sauce_id);
  }

  render(){
    const sauce = this.props.sauce;
    if (sauce.name === ""){
      return (<Spinner />);
    }else{
      return(
        <div>
          <h1>{sauce.name}</h1>
          <h2>{sauce.company}</h2>
          <h3>{sauce.scoville_units} SHU</h3>
          <h4>{sauce.description}</h4>
        </div>
      );
    }
    }

}




export default Sauce;
