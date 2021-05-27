// import { Button } from "bootstrap";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import Public from './Public'
import ADD from './add'
import PrivateDisplay from './PrivateDisplay';

export default function MainPage() {
    // state = {  }
    let History = useHistory();
        return (
        <div>
            {/* <ADD></ADD> */}
            <Public></Public>
            <h2>for more information log in as...</h2>
             <Button onClick = {()=> {History.push('/Private')}}>Private</Button> 
             <Button onClick = {()=> {History.push('/Clinic')}}>Clinic</Button> 
             <Button onClick = {()=> {History.push('/Research')}}>Research</Button>
        </div>
        );
}