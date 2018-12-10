import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h2>{`Welcome ${currentUser.username}`}</h2>
        <button type="submit" onClick={logout}>Log out</button>
      </div>
    );
  }
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Greeting;
