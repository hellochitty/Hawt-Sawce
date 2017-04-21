import React from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {hashHistory} from 'react-router';

class SauceForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      scoville_units: "",
      image_url: "",
      company: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.getSauceCompanies();
    if (this.props.formType === 'edit'){
     this.props.getSauce(this.props.params.sauce_id);
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.formType === 'new' && this.props.errors !== {}){
      this.setState({
        name: "",
        description: "",
        scoville_units: "",
        image_url: "",
        company: ""});
    }else if (newProps.ready){
      this.setState(newProps.sauce);
    }else{
      this.props.getSauce(newProps.params.sauce_id);
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleChange(text){
    return (e) => this.setState({[text]: e.currentTarget.value});
  }

  handleUpdateInput(searchText){
    this.setState({["company"]: searchText});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state).then(()=>this.props.router.push('/home/sauces'));
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteSauce(this.state.id).then(()=> this.props.router.push("/home/sauces"));
  }

  render(){
    const sauce = this.props.sauce;
    const companies = this.props.companies;
    const text = (this.props.formType === 'edit') ? 'Edit' : 'New';
    const buttonText = (this.props.formType === 'edit') ? 'Update' : 'Add';
    const deleteButton = (this.props.formType === 'edit') ?
      <FlatButton  label="Delete" onClick={this.handleDelete}  type="submit"/>  : null;

    return (
      <div id="sauce-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center">{text} Sauce</h1>
          <TextField
            floatingLabelText="Sauce Name"
            value={this.state.name}
            fullWidth={true}
            onChange={this.handleChange("name")}
            errorText={this.props.errors.name}
            /><br />
          <AutoComplete
            floatingLabelText="Company"
            searchText={this.state.company}
            onUpdateInput={this.handleUpdateInput}
            dataSource={companies}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            filter={AutoComplete.caseInsensitiveFilter}
            errorText={this.props.errors.company_id}
            openOnFocus={true}
            /><br />
          <TextField
            floatingLabelText="Description"
            value={this.state.description}
            multiLine={true}
            fullWidth={true}
            onChange={this.handleChange("description")}
            errorText={this.props.errors.description}
            />
          <TextField
            floatingLabelText="Scoville Units (SHU)"
            hintText="average"
            value={this.state.scoville_units}
            onChange={this.handleChange("scoville_units")}
            errorText={this.props.errors.scoville_units}
            /><br />

          <TextField
              floatingLabelText="Image URL"
              value={this.state.image_url}
              onChange={this.handleChange("image_url")}
              /><br />
            <div className="form-buttons">
              <RaisedButton type='submit' label={buttonText} />
              {deleteButton}
            </div>
        </form>
      </div>
    );
  }
}


export default SauceForm;
