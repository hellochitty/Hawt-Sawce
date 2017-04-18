import React from 'react';
import { Link } from 'react-router';

const createSession = () => (
  <div>
    <Link to ='/login'>Log In</Link>
    <Link to ='/signup'>Sign Up</Link>
  </div>
);

const displayGreeting = (currentUser, logout) => (
  <div>
    <h1>Hi, {currentUser.username}</h1>
    <button onClick={ logout }>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? displayGreeting(currentUser, logout) : createSession()
);


export default Greeting;
