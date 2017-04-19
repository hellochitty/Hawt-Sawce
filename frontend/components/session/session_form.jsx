import React from 'react';
import { Link, withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

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
  //guest login
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
      <section>Email: <input type='text' value={this.state.email} onChange={this.update('email')} />
      <p className="session-errors">{ this.props.errors.email}</p>
      </section>);
    }
    let guestLogin = null;
    if (this.props.formType === 'login'){
      guestLogin = (
      <button onClick={this.guestLogin}>Guest</button>);
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
          {guestLogin}
          <RaisedButton label="Default" />
          <input type='submit' value='submit' />
          <section><p className="session-errors">{ this.props.errors.login}</p></section>
        </form>

        <Link to={link}>{link.slice(1)} </Link>
      </div>
    );
  }

}
export default withRouter(SessionForm);
