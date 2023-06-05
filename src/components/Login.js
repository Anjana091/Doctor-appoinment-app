
import React, { useState } from 'react';
import './Login.css'; 
import image from './login-image.jpg'


export default function LoginForm({ Login, error }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    console.log(email,password)
    fetch("http://localhost:3001/admin/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === "Admin successfully registered") {
          alert("login successful");
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("loggedIn", true);
          window.location.href ="./home"
        }
      });
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
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

