import React, { Component } from 'react';
class Public extends Component {
    
    render() { 
        return (
            
            <div>
                <h1>Public Page</h1>
                <label><p>User name:</p></label>
                <input type="text"></input><br></br>
                <label><p>CNIC:</p></label>
                <input type="text"></input><br></br>
                <label><p>City:</p></label>
                <input type="text"></input><br></br>
                <label><p>Phone:</p></label>
                <input type="text"></input><br></br>
                <label><p>Gender:</p></label>
                <input type="text"></input><br></br>
            </div>
        );
    }
}
 
export default Public;