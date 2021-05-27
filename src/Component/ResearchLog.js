import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/ruser/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   
export default function ResearchLog({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
   
    const handleSubmit = async e => {
        e.preventDefault();
        const rtoken = await loginUser({
          username,
          password
        });
        setToken(rtoken);
      };
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <br></br>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <br></br>
          <div>
              <br></br>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  
ResearchLog.propTypes = {
    setToken: PropTypes.func.isRequired
  };