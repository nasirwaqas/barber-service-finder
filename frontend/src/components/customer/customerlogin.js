import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
=======
import { login } from '../../utils/login';
>>>>>>> 8e73524 (add some front end and backend files)

export default function Customerlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your backend API to authenticate the user
      const response = await axios.post('/user/login', {
    
       email, password ,role:"Customer" }
      );
      if (response) {
        console.log('Login successful',response.data);
<<<<<<< HEAD
        if(response.data?.Role==="Customer"){
        navigate('/customer/profile/data')
=======
        login(response?.data?.token)
        // localStorage.setItem('token' ,)
        if(response.data?.Role==="Customer"){
        navigate('/customer/home')
>>>>>>> 8e73524 (add some front end and backend files)
        }
      } else {
       // Authentication failed, display an error message
       toast.error('Login failed: Incorrect email or password.');
      }
    } catch (error) {
         // Handle network errors or other issues
         console.error('Login error:', error);
         toast.error('Login failed: Incorrect email or password.');
    }
  };


  return (
    <div className="Login-form-container">
      <form className="Login-form" onSubmit={handleSubmit}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">Customer Login</h3>
          <div className="text-center">
            Not registered yet?{' '}
            <span className="link-primary">
              <Link to="/customer/register">Register</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
