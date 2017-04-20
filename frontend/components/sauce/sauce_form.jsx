import React from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

class SauceForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      scoville_units: "",
      image_url: "",
      company: ""};
    if (this.props.sauce.id > 0){
      this.state = this.props.sauce;
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getSauceCompanies();
    if (this.props.formType === 'edit'){
      this.props.getSauce(this.props.params.sauce_id);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.sauce);
  }

  handleChange(text){
    return (e) => this.setState({[text]: e.target.value});
  }

  render(){
    const sauce = this.props.sauce;
    const companies = this.props.companies;
    return (
      <div id="sauce-form">
        <h1>{this.props.formType} Sauce</h1>
        <form>
          <TextField
            floatingLabelText="Sauce Name"
            value={this.state.name}
            fullWidth={true}
            onChange={this.handleChange("name")}
            /><br />
          <TextField
            floatingLabelText="Description"
            value={this.state.description}
            multiLine={true}
            fullWidth={true}
            onChange={this.handleChange("description")}
            />
          <TextField
            floatingLabelText="Scoville Units (SHU)"
            hintText="average"
            value={this.state.scoville_units}
            onChange={this.handleChange("scoville_units")}
            /><br />
          <RaisedButton type='submit' label='test' />
        </form>
        {companies.join(",")}
      </div>
    );
  }
}


export default SauceForm;


// <AutoComplete
//   floatingLabelText="Company"
//   filter={AutoComplete.caseInsensitiveFilter}
//   onUpdateInput={this.handleChange("company")}
//   dataSource={companies}
//   maxSearchResults={5}
//   />
