// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import CustomerNavbar from './customernavbar';
// import Footer from '../Page/Footer';

// function CustomerViewProfile() {
//   const [users, setUsers] = useState();
//   const navigate = useNavigate();

//   const handleEdit = (id) => {
//     navigate(`/customer/updates/${id}/edit`);
//     // Implement the edit functionality here
//     // You can redirect to a user edit page with the user's data or use a modal for editing
//   };

//   const handleDelete = async (userId) => {
//     try {
//       // Implement the delete functionality here
//       // You can send a DELETE request to delete the user with the provided userId
//       await axios.delete(`/user/${userId}`);
//       window.alert('User deleted successfully!');

//       // Fetch the updated list of users and update the state
//       const response = await axios.get('/user/list');
//       if (response.data) {
//         setUsers(response.data);
//       }
//     } catch (error) {
//       console.error('User delete failed:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.post('/user/me',null, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         if (response.data) {
//           setUsers(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching user list:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const customerUsers = users.filter((user) => user.Role === 'Customer');

//   return (
//     <>
    
//        {/* <CustomerNavbar/> */}
//     <div className="tablecontainer">

//       <center>
//         <h3>Customer Profile data 5</h3>
//       </center>
//       <table className="table table-bordered border-primary">
//         <thead>
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Home Address</th>
//             <th scope="col">Mobile No.</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {customerUsers.map((user) => (
//             <tr key={user._id}>
//               <td>{user.fullname}</td>
//               <td>{user.email}</td>
//               <td>{user.homeAddress}</td>
//               <td>{user.mobile}</td>
            
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default CustomerViewProfile;
// Frontend profile page
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerViewProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post('/user/me',null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.fullname}!</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.Role}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerViewProfile;
