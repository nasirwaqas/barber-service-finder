import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function CustomerEdit() {
  const [userData, setUserData] = useState({});
  const [formValues, setFormValues] = useState({
    fullname: '',
    homeAddress: '',
    mobile: '',
  });
  const initialValues = formValues;

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/${id}`);
        if (response.data) {
          // setUserData(response.data); // Set the fetched user data in state
          setFormValues({
            fullname: response.data.fullname,
            homeAddress: response.data.homeAddress,
            mobile: response.data.mobile,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);



  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    homeAddress: Yup.string().required('Home address is required'),
    mobile: Yup.string().required('Mobile No is required'),
  });
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.put(`/user/update/${id}`, {
        fullname: values.fullname,
        homeAddress: values.homeAddress,
        mobile: values.mobile,
      });

      console.log('User updated successfully:', response.data);
      setSubmitting(false);
      window.alert('User updated successfully!');
      // Redirect to the user list page
      navigate('/customer/profile/data');
    } catch (error) {
      console.error('User update failed:', error);
      setSubmitting(false);

      if (error.response) {
        // Handle specific error responses here
        const { data } = error.response;
        if (data && data.errors) {
          // Set form field errors based on the response
          data.errors.forEach((error) => {
            setFieldError(error.field, error.message);
          });
        }
      } else {
        // Handle general network or server errors here
        window.alert('An error occurred while updating the user.');
      }
    }
  };
  console.log(
    formValues
  )
  return (
    <div className="Register-form-container">
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="Register-form">
            <div className="Register-form-content">
              <h3 className="Register-form-title">Customer Profile Data</h3>
              <div className="form-group mt-3">
                <label htmlFor="fullname">Full Name</label>
                <Field
                  defaultValue={formValues?.fullname||''}
                  type="text"
                  name="fullname"
                  className="form-control mt-1"
                  placeholder="Full Name"
                />
                <ErrorMessage name="fullname" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="homeAddress">Home Address</label>
                <Field

                  defaultValue={formValues?.homeAddress}
                  type="text"
                  name="homeAddress"
                  className="form-control mt-1"
                  placeholder="Home Address"
                />
                <ErrorMessage name="homeAddress" component="div" className="text-danger" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="mobile">Mobile No:</label>
                <Field
                  defaultValue={formValues?.mobile}

                  type="number"
                  name="mobile"
                  className="form-control mt-1"
                  placeholder="Barber Address"
                />
                <ErrorMessage name="mobile" component="div" className="text-danger" />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Updating...' : 'Update User'}
                </button>
                <Link to="/customer/profile/data" className="btn btn-secondary">
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
