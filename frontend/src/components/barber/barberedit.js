<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function BarberEdit() {
  const [userData, setUserData] = useState({});
  const [formValues, setFormValues] = useState({
    fullname: '',
    homeAddress: '',
    barberAddress: '',
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
            barberAddress: response.data.barberAddress,
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
    barberAddress: Yup.string().required('Barber address is required'),
  });
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.put(`/user/update/${id}`, {
        fullname: values.fullname,
        homeAddress: values.homeAddress,
        barberAddress: values.barberAddress,
      });

      console.log('User updated successfully:', response.data);
      setSubmitting(false);
      window.alert('User updated successfully!');
      // Redirect to the user list page
      navigate('/barber/profile/data');
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
              <h3 className="Register-form-title">Barber Profile Data</h3>
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
                <label htmlFor="barberAddress">Barber Address</label>
                <Field
                  defaultValue={formValues?.barberAddress}

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
                  {isSubmitting ? 'Updating...' : 'Update User'}
                </button>
                <Link to="/barber/profile/data" className="btn btn-secondary">
                  Cancel
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
=======
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams, Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// export default function BarberEdit() {
//   const [userData, setUserData] = useState({});
//   const [formValues, setFormValues] = useState({
//     fullname: '',
//     homeAddress: '',
//     barberAddress: '',
//     experience: '',
//     expertise: '',
//     qualification: '',
//     image: 'null', // Assuming this is a URL or file path
//     location: '',
//   });
//   const initialValues = formValues;

//   const { id } = useParams();
//   const navigate = useNavigate();
//   useEffect(() => {
//     // Fetch user data
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`/user/${id}`);
//         if (response.data) {
//           // setUserData(response.data); // Set the fetched user data in state
//           setFormValues({
//             fullname: response.data.fullname,
//             experience: response.data.experience,
//             expertise: response.data.expertise,
//             qualification: response.data.qualification,
//             image: response.data.image, // Assuming this is a URL or file path
//             location: response.data.location
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);
  
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFormValues({ ...formValues, image: file });
//   };


//   const validationSchema = Yup.object().shape({
//     fullname: Yup.string().required('Full name is required'),

//     experience: Yup.string().required('Experience is required'),
//     expertise: Yup.string().required('Expertise is required'),
//     qualification: Yup.string().required('Qualification is required'),
//     image: Yup.string().required('image URL is required'),
//     location: Yup.string().required('Location is required'),
//   });
//   const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
//     try {
//       const response = await axios.put(`/user/update/${id}`, {
//         fullname: values.fullname,
//         experience: values.experience,
//         expertise: values.expertise,
//         qualification: values.qualification,
//         image: values.image, // Assuming this is a URL or file path
//         location: values.location,
//       },
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//       });
      
    

//       console.log('User updated successfully:', response.data);
//       setSubmitting(false);
//       window.alert('User updated successfully!');
//       // Redirect to the user list page
//       navigate('/barber/profile/data');
//     } catch (error) {
//       console.error('User update failed:', error);
//       setSubmitting(false);

//       if (error.response) {
//         // Handle specific error responses here
//         const { data } = error.response;
//         if (data && data.errors) {
//           // Set form field errors based on the response
//           data.errors.forEach((error) => {
//             setFieldError(error.field, error.message);
//           });
//         }
//       } else {
//         // Handle general network or server errors here
//         window.alert('An error occurred while updating the user.');
//       }
//     }
//   };
//   console.log(
//     formValues
//   )
//   return (
//     <div className="Register-form-container">
//       <Formik
//         initialValues={formValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="Register-form">
//             <div className="Register-form-content">
//               <h3 className="Register-form-title">Barber Profile Data</h3>
//               <div className="form-group mt-3">
//                 <label htmlFor="fullname">Full Name</label>
//                 <Field
//                   defaultValue={formValues?.fullname || ''}
//                   type="text"
//                   name="fullname"
//                   className="form-control mt-1"
//                   placeholder="Full Name"
//                 />
//                 <ErrorMessage name="fullname" component="div" className="text-danger" />
//               </div>
             

//               <div className="form-group mt-3">
//                 <label htmlFor="experience">Experience</label>
//                 <Field
//                   defaultValue={formValues?.experience || ''}
//                   type="text"
//                   name="experience"
//                   className="form-control mt-1"
//                   placeholder="Experience"
//                 />
//                 <ErrorMessage name="experience" component="div" className="text-danger" />
//               </div>

//               <div className="form-group mt-3">
//                 <label htmlFor="expertise">Expertise</label>
//                 <Field
//                   defaultValue={formValues?.expertise || ''}
//                   type="text"
//                   name="expertise"
//                   className="form-control mt-1"
//                   placeholder="Expertise"
//                 />
//                 <ErrorMessage name="expertise" component="div" className="text-danger" />
//               </div>

//               <div className="form-group mt-3">
//                 <label htmlFor="qualification">Qualification</label>
//                 <Field
//                   defaultValue={formValues?.qualification || ''}
//                   type="text"
//                   name="qualification"
//                   className="form-control mt-1"
//                   placeholder="Qualification"
//                 />
//                 <ErrorMessage name="qualification" component="div" className="text-danger" />
//               </div>

//               <div className="form-group mt-3">
//                 <label htmlFor="image">Profile Picture</label>
//                 <input type="file" onChange={handleFileChange} />
//               </div>

//               <div className="form-group mt-3">
//                 <label htmlFor="location">Location</label>
//                 <Field
//                   defaultValue={formValues?.location || ''}
//                   type="text"
//                   name="location"
//                   className="form-control mt-1"
//                   placeholder="Location"
//                 />
//                 <ErrorMessage name="location" component="div" className="text-danger" />
//               </div>


//               <div className="d-grid gap-2 mt-3">
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? 'Updating...' : 'Update User'}
//                 </button>
//                 <Link to="/barber/profile/data" className="btn btn-secondary">
//                   Cancel
//                 </Link>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>

//     </div>
//   );
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

export default function BarberEdit() { const [formValues, setFormValues] = useState({
  fullname: '',
  experience: '',
  expertise: '',
  qualification: '',
  image: null,
  location: '',
  mobile: '',
});

const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.post(`/user/me`,null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data) {
        setFormValues({
          fullname: response.data.fullname,
          experience: response.data.experience,
          mobile: response.data.mobile,
          expertise: response.data.expertise,
          qualification: response.data.qualification,
          image: response.data.image,
          location: response.data.location,
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUserData();
}, []);

const handleFileChange = (event) => {
  setFormValues({ ...formValues, image: event.currentTarget.files[0] });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData();
    formData.append('fullname', formValues.fullname);
    formData.append('experience', formValues.experience);
    formData.append('expertise', formValues.expertise);
    formData.append('qualification', formValues.qualification);
    formData.append('location', formValues.location);
    formData.append('image', formValues.image);
    formData.append('mobile', formValues.mobile);

    const response = await axios.put(`/user/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('User updated successfully:', response.data);
    window.alert('User updated successfully!');
    // Redirect to the user list page
    navigate('/admin/dashboard/barber/list');
  } catch (error) {
    console.error('User update failed:', error);
    if (error.response) {
      window.alert('An error occurred while updating the user.');
    }
  }
};

return (
  <>
   
            <div className="Register-form-container">
              <form className="Register-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="Register-form-content">
                  <h3 className="Register-form-title">Barber Profile Data</h3>
                  <div className="form-group mt-3">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      value={formValues.fullname}
                      className="form-control mt-1"
                      placeholder="Full Name"
                      onChange={(e) => setFormValues({ ...formValues, fullname: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="experience">Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={formValues.experience}
                      className="form-control mt-1"
                      placeholder="Experience"
                      onChange={(e) => setFormValues({ ...formValues, experience: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="expertise">Expertise</label>
                    <input
                      type="text"
                      name="expertise"
                      value={formValues.expertise}
                      className="form-control mt-1"
                      placeholder="Expertise"
                      onChange={(e) => setFormValues({ ...formValues, expertise: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                      type="text"
                      name="qualification"
                      value={formValues.qualification}
                      className="form-control mt-1"
                      placeholder="Qualification"
                      onChange={(e) => setFormValues({ ...formValues, qualification: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="image">Image file</label>
                    <input
                      type="file"
                      name="image"
                      className="form-control mt-1"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formValues.location}
                      className="form-control mt-1"
                      placeholder="Location"
                      onChange={(e) => setFormValues({ ...formValues, location: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={formValues.mobile}
                      className="form-control mt-1"
                      placeholder="mobile"
                      onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Update User
                    </button>
                    <Link to="/admin/dashboard/barber/list" className="btn btn-secondary">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
  </>
);
>>>>>>> 8e73524 (add some front end and backend files)
}
