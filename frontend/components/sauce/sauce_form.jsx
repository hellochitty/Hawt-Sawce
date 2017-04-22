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
      company: "",
      imageFile: null,
      imageUrl: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateFile = this.handleUpdateFile.bind(this);
  }

  componentDidMount(){
    this.props.getSauceCompanies();
    if (this.props.formType === 'edit'){
     this.props.getSauce(this.props.params.sauce_id);
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.formType === 'new' && newProps.errors === {}){
      this.setState({
        name: "",
        description: "",
        scoville_units: "",
        image_url: "",
        company: "",
        imageFile: null,
        imageUrl: null});
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

  handleUpdateFile(e){
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("sauce[name]", this.state.name);
    formData.append("sauce[description]", this.state.description);
    formData.append("sauce[scoville_units]", this.state.scoville_units);
    formData.append("sauce[company]", this.state.company);
    if (this.state.imageFile){
      formData.append("sauce[image_url]", this.state.image_url);
      formData.append("sauce[image]", this.state.imageFile);
    }

    if (this.props.formType === 'edit'){
      formData.append("sauce[id]", this.state.id);
      this.props.submitAction(formData, this.state.id).then(()=>this.props.router.push(`/home/sauces/${this.state.id}`));
    }else{
      this.props.submitAction(formData).then(()=>this.props.router.push('/home/sauces'));
    }
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

          
          <input type="file" onChange={this.handleUpdateFile}/>

          <img className="img-upload-preview" src={this.state.imageUrl}/>
          <img className="img-upload-preview" src={this.state.image_url}/>
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
