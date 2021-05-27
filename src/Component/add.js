import React, { Component } from 'react';
import axios from 'axios'
class ADD extends Component {
    state = { 
                username: String ,
                password: String
            }
    constructor(props){
        super(props)
        this.onSubmit= this.onSubmit.bind(this)
        this.onChangeUsername= this.onChangeUsername.bind(this)
        this.onChangePassword= this.onChangePassword.bind(this)
        this.state={username: '', password: ''}
    }
    onChangeUsername(e){
        this.setState({username: e.target.value})
    }
    onChangePassword(e){
        this.setState({password: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`Form submtited:  ${this.state.username}`);
        console.log(`Form submtited:  ${this.state.password}`);
        const newPuser ={
            username : this.state.username,
            password : this.state.password
        }
        console.log(newPuser);
        
        axios.post('http://localhost:4000/cuser/add', newPuser)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            password: ''
        })
    }
    render() { 
        return ( 
            <div>
                <h1>Log In As Private </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User name:</label>
                        <input type="text" className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}></input><br></br>
                        <label>Password:</label>
                        <input type="text" className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}></input><br></br>
                        <div className="form-group">
                            <input type="submit" value="Download" className="btn btn-primary"></input>
                        </div>
                    </div>
                </form> 
            </div>
                    
        );
    }
}
 
export default ADD;
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