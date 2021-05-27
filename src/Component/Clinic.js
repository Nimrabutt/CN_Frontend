import React, { Component } from 'react';
import useToken from './cuseToken';
import ClinicLog from './ClinicLog';

export default function Clinic() {
    const { ctoken, setToken } = useToken();
    if(!ctoken) {
    return <ClinicLog setToken={setToken} />
    }
    return ( 
    <div>
         <label>CNIC:</label>
        <input type="text"></input><br></br>
        <label>City:</label>
        <input type="text"></input><br></br>
        <label>Phone:</label>
        <input type="text"></input><br></br>
        <label>Gender:</label>
        <input type="text"></input><br></br> 
        <div className="form-group">
            <input type="submit" value="Download" className="btn btn-primary"></input>
        </div>
    </div>
    );
}

