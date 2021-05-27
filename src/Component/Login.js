import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
   
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log('here');
        setToken(token);
        render('ss')
      };
    return(
      <div className="login-wrapper">
        <h1>Please Sign In</h1>
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
          <br></br>
          <label htmlFor="roles">Choose a Role:</label>
          <br></br>
            {/* <select name="role" id="role" value="Private" onChangeRole={this.onChangeRole}>
            <option value="Private" selected>Private</option>
            <option value="Research">Research</option>
            <option value="Clinic">Clinic</option>
            </select>
            <br></br> */}
          <div>
              <br></br>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };