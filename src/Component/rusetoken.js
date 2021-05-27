import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('rtoken');
    const userToken = JSON.parse(tokenString);
    return userToken?.rtoken
  };

  const [rtoken, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('rtoken', JSON.stringify(userToken));
    setToken(userToken.rtoken);
  };

  return {
    setToken: saveToken,
    rtoken
  }
}