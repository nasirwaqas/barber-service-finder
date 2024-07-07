// useAuth.js
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    } else {
      setUser(null);
    }
  }, []);

  return user;
};

export default useAuth;
