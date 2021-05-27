import React, { Component } from 'react';
import useToken from './rusetoken';
import ResearchLog from './ResearchLog';

export default function Research() {
    const { rtoken, setToken } = useToken();
    if(!rtoken) {
    return <ResearchLog setToken={setToken} />
    }
    return ( 
    <div>
        <h1>Research</h1>
        <form>
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
        </form>
    </div>
    );
}

