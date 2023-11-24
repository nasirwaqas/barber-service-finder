import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../style/Register.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Customerregister() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate an API call to save registration data
      const response = await axios.post('/user/register',{
        "fullname": values.firstName + " " + values.lastName,
        "email": values.email,
        "password": values.password,
        "role": "Customer"
      }); //your actual API endpoint

      console.log('customer registration successful:', response.data);
      setSubmitting(false);


        // Authentication successful, you may store the user's token and redirect
       
        window.alert('Registration successful! You will be redirected to the login page.');
        // Redirect to the appropriate dashboard or page
        navigate("/customer/login")
      

      
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (e.g., display an error message)
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="Register-form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting ,isValid}) => (
          <Form className="Register-form">
            <div className="Register-form-content">
              <h3 className="Register-form-title">Customer Register</h3>
              <div className="text-center">
                Already registered yet?{' '}
                <span className="link-primary">
                  <Link to="/customer/login">Login</Link>
                </span>
              </div>
              <div className="form-group mt-3">
                <label>First Name</label>
                <Field 
                name="firstName" 
                type='text'
                className="form-control"
                 placeholder='e.g Nasir'
                />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label >Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="form-control mt-1"
                  placeholder="e.g waqas"
                />
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label >Confirm password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-control mt-1"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isValid || isSubmitting}
                >
                  {!isSubmitting && "Submit"}
                  Register
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
