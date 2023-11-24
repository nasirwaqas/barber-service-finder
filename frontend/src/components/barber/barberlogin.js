import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Barberlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/login', {
        email,
        password,
        role: "Barber"
      });

      if (response.data?.Role === "Barber") {
        navigate('/barber/profile/data');
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
          <h3 className="Login-form-title">Barber Login</h3>
          <div className="text-center">
            Not registered yet?{' '}
            <span className="link-primary">
              <Link to="/barber/register">Register</Link>
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
