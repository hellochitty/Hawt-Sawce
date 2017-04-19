import React from 'react';
import { Link, withRouter } from 'react-router';

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
    this.props.processForm(user).then(()=> this.redirect());
  }

  redirect(){
    this.props.router.push('/');
  }

  update(field){
    return (e) => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  //show errors per error item
  loginErrors(){
    if (this.props.errors) {
      if (this.props.errors.login){
        return this.props.errors.login[0];
      }
    }
  }

  passwordErrors(){
    if (this.props.errors) {
      if (this.props.errors.password){
        return this.props.errors.password[0];
      }
    }
  }
  usernameErrors(){
    if (this.props.errors) {
      if (this.props.errors.username){
        return this.props.errors.username[0];
      }
    }
  }
  emailErrors(){
    if (this.props.errors) {
      if (this.props.errors.email){
        return this.props.errors.email[0];
      }
    }
  }
  //guest login
  guestLogin(){
    this.setState({
      username: 'chithra',
      password: 'password',
    });
  }
  render(){
    const text = this.props.formType === 'login' ? "Log In" : "Sign Up";
    const link = this.props.formType === 'login' ? "/signup" : "/login";
    let emailInput = null;
    if (this.props.formType !== 'login'){
      emailInput = (
      <section>Email: <input type='text' value={this.state.email} onChange={this.update('email')} />
      <p className="session-errors">{ this.props.errors.email}</p>
      </section>);
    }

    return(
      <div>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit}>
          <section>Username: <input type='text' value={this.state.username} onChange={this.update('username')} />
          <p className="session-errors">{ this.props.errors.username}</p></section>

          <section>Password: <input type='password' value={this.state.password} onChange={this.update('password')} />
          <p className="session-errors">{ this.props.errors.password}</p></section>

          {emailInput}
          <section><p className="session-errors">{ this.props.errors.login}</p></section>
          <input type='submit' value='submit' />
        </form>
        <button onClick={this.guestLogin}>Guest</button>
        <Link to={link}>{link.slice(1)} </Link>
      </div>
    );
  }

}
export default withRouter(SessionForm);
