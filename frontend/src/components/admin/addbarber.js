import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function AddBarber() {
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  // Define initial values
  const initialFormValues = {
    fullname: '',
    email: '',
    password: '',
    homeAddress: '',
    barberAddress: '',
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    homeAddress: Yup.string().required('Home Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    barberAddress: Yup.string().required('Barber Address is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/user/create', {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        homeAddress: values.homeAddress,
        barberAddress: values.barberAddress,
        role: 'Barber',
      });

      console.log('User registered successfully:', response.data);

      if (response.data.message === 'User created successfully') {
        window.alert('Data saved successfully');
        // Clear the form fields after successful submission
        resetForm(initialFormValues);
      } else if (response.data.message === 'Email already exists') {
        setAlertMessage('Email already exists. Please use a different email.');
      }

      setSubmitting(false);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (e.g., display an error message)
      setSubmitting(false);
    }
  };

  return (
    <div className="Register-form-container">
      {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}
      <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="Register-form">
            <div className="Register-form-content">
              <h3 className="Register-form-title">Add Barber</h3>
              <div className="form-group mt-3">
                <label htmlFor="fullname">Full Name</label>
                <Field
                  type="text"
                  name="fullname"
                  className="form-control mt-1"
                  placeholder="Full Name"
                />
                <ErrorMessage name="fullname" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label>Email Address</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  placeholder="E-mail"
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
                <label>Home Address</label>
                <Field
                  type="text"
                  name="homeAddress"
                  className="form-control mt-1"
                  placeholder="Home Address"
                />
                <ErrorMessage name="homeAddress" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label>Barber Address:</label>
                <Field
                  type="text"
                  name="barberAddress"
                  className="form-control mt-1"
                  placeholder="Barber Address"
                />
                <ErrorMessage name="barberAddress" component="div" className="text-danger" />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {!isSubmitting ? 'Submit' : 'Adding...'}
                </button>
                <Link to="/admin/users/list" className="btn btn-secondary">
                  Cancel
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
