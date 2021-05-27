import React, { Component, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/puser/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   
export default function PrivateLog({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
   
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
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
  
PrivateLog.propTypes = {
    setToken: PropTypes.func.isRequired
  };

// class PrivateLog extends Component {
//     state = { 
//         username: String ,
//         password: String
//     }
//     constructor(props){
//         super(props)
//         this.onSubmit= this.onSubmit.bind(this)
//         this.onChangeUsername= this.onChangeUsername.bind(this)
//         this.onChangePassword= this.onChangePassword.bind(this)
//         this.state={username: '', password: ''}
//     }
//     onChangeUsername(e){
//         this.setState({username: e.target.value})
//     }
//     onChangePassword(e){
//         this.setState({password: e.target.value})
//     }
//     onSubmit(e){
//         e.preventDefault();
//         console.log(`Form submtited:  ${this.state.username}`);
//         console.log(`Form submtited:  ${this.state.password}`);
//         const newPuser ={
//             username : this.state.username,
//             password : this.state.password
//         }
//         console.log(newPuser);

//         axios.post('http://localhost:4000/puser/add', newPuser)
//             .then(res => console.log(res.data));

//         this.setState({
//             username: '',
//             password: ''
//         })
//     }
//     render() { 
//         return ( 
//             <div>
//                 <h1>Log In As Private </h1>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>User name:</label>
//                         <input type="text" className="form-control"
//                                 value={this.state.username}
//                                 onChange={this.onChangeUsername}></input><br></br>
//                         <label>Password:</label>
//                         <input type="text" className="form-control"
//                                 value={this.state.password}
//                                 onChange={this.onChangePassword}></input><br></br>
//                         {/* <label>CNIC:</label>
//                         <input type="text"></input><br></br>
//                         <label>City:</label>
//                         <input type="text"></input><br></br>
//                         <label>Phone:</label>
//                         <input type="text"></input><br></br>
//                         <label>Gender:</label>
//                         <input type="text"></input><br></br> */}
//                         <div className="form-group">
//                             <input type="submit" value="Download" className="btn btn-primary"></input>
//                         </div>
//                     </div>
//                 </form> 
//             </div>
            
//         );
//     }
// }
 
// export default PrivateLog;