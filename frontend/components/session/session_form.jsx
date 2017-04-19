import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.passwordErrors = this.passwordErrors.bind(this);
    this.usernameErrors = this.usernameErrors.bind(this);
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

  render(){
    const text = this.props.formType === 'login' ? "Log In" : "Sign Up";
    const link = this.props.formType === 'login' ? "/signup" : "/login";
    return(
      <div>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit}>
          Username: <input type='text' value={this.state.username} onChange={this.update('username')} />
          <p className="session-errors">{ this.usernameErrors()}</p>

          Password: <input type='text' value={this.state.password} onChange={this.update('password')} />
          <p className="session-errors">{ this.passwordErrors()}</p>
          <input type='submit' value='submit' />
        </form>
        <Link to={link}>{link.slice(1)} </Link>
      </div>
    );
  }

}
export default withRouter(SessionForm);
