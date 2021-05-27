import React, { Component, useState } from 'react';
import useToken from './useToken';
import PrivateLog from './PrivateLog';
import PrivateDisplay from './PrivateDisplay';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

export default function Private(props) {
    let [city, setCity] = useState();
    let [cinc, setCnic] = useState();
    let [phone, setPhone] = useState();
    let [gender, setGender] = useState();
    let History = useHistory();
    const { token, setToken } = useToken();
    if(!token) {
    return <PrivateLog setToken={setToken} />
    }
    // React.useEffect(() => {
    //     console.log(cinc);
    // },[cinc]);
    return (
    <div>
        <form method='post'>
        <label>CNIC:</label>
        <input type="text" onChange={(e) => {setCnic(e.target.value)}}></input><br></br>
        <label>City:</label>
        <input type="text" onChange={(e) => {setCity(e.target.value)}}></input><br></br>
        <label>Phone:</label>
        <input type="text" onChange={(e) => {setPhone(e.target.value)}}></input><br></br>
        <label>Gender:</label>
        <input type="text" onChange={(e) => {setGender(e.target.value)}}></input><br></br> 
        <button >Download</button>
        {/* onClick={() => {History.push('/PrivateDisplay')} } */}
        </form>
    </div>
    );
}

