import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token and extract user information
      const decodedToken = decodeJWT(token);
      setAuthData(decodedToken);
    } else {
      // If no token found, set authData to null
      setAuthData(null);
    }
  }, []);

  const decodeJWT = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  };

  return {
    ...authData,
    isAuthenticated: authData !== null,
  };
};

export default useAuth;
