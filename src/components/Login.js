
import React, { useState } from 'react';
import './Login.css'; 
import image from './login-image.jpg'

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  };

  return (
    
    <form onSubmit={submitHandler} className="login-form">
        <div className="image-container">
    <img src={image} alt="Login" className="login-image" />
  </div>
      <div className="form-inner">
     
        <h2>Login</h2>
        {error !== '' && <div className="error">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={e => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={e => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>

        <input type="submit" value="LOGIN" />
      </div>
      <div className="quote-container">
        <p className="quote">"The heart of your healthcare. "</p>
      </div>
    </form>
   
  );

}

export default LoginForm;
