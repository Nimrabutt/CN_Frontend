import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('ctoken');
    const userToken = JSON.parse(tokenString);
    return userToken?.ctoken
  };

  const [ctoken, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('ctoken', JSON.stringify(userToken));
    setToken(userToken.ctoken);
  };

  return {
    setToken: saveToken,
    ctoken
  }
}