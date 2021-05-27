// import { Button } from "bootstrap";
import React, { Component } from "react";
import Login from './Login'
import useToken from './useToken';


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  // function getToken() {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // }
  
export default function LoginPage() {
    const { token, setToken } = useToken();
    if(!token) {
        return (
            <Login setToken={setToken} />
        );
    }
        
}