//util
import React from 'react';
import { Link, withRouter } from 'react-router';
//internal
//ui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if(this.props.processForm &&
      (this.props.processForm !== newProps.processForm)){
      this.props.clearErrors();
      this.setState({
        username: '',
        password: '',
        email: ''
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(()=> this.redirect());
  }

  redirect(){
    this.props.router.push('/home/sauces');
  }

  update(field){
    return (e) => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  //guest login (hardcoded)
  guestLogin(){
    this.setState({
      username: 'SPICY',
      password: 'password',
    });
  }
  render(){
    const text = this.props.formType === 'login' ? "Log In" : "Sign Up";
    const link = this.props.formType === 'login' ? "/signup" : "/login";
    let emailInput = null;
    if (this.props.formType !== 'login'){
      emailInput = (
        <TextField
          hintText=""
          floatingLabelText="Email"
          type="email"
          value={this.state.email}
          onChange={this.update('email')}
          errorText={ this.props.errors.email }
          />);
    }
    let guestLogin = null;
    let sessionErrors = null;
    if (this.props.formType === 'login'){
      guestLogin = (
      <FlatButton onClick={this.guestLogin} label="Login as Guest"  type="submit"/>
      );
      sessionErrors = (
        <p className="custom-errors">{ this.props.errors.login}</p>
      );
    }



    return(
      <div className="session-form">
      <div className="session-form-inputs">
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit}>

          <TextField
            hintText=""
            floatingLabelText="Username"
            type="username"
            value={this.state.username}
            onChange={this.update('username')}
            errorText={ this.props.errors.username }
            />
          <br />
          <TextField
            hintText=""
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            errorText={ this.props.errors.password }
            />
          <br />
          {emailInput}
          {sessionErrors}
          <br />
          <RaisedButton label="submit"  type="submit"/>
          <br />
          {guestLogin}
          <br/ >
          <Link to={link}><FlatButton label={link.slice(1)} /> </Link>

        </form>


      </div>
      </div>
    );
  }

}
export default withRouter(SessionForm);
