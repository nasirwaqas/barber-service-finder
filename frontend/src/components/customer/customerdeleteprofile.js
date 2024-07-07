import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CustomerNavbar from './customernavbar';
import Footer from '../Page/Footer';

function CustomerDeleteProfile() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/customer/updates/${id}/edit`);
    // Implement the edit functionality here
    // You can redirect to a user edit page with the user's data or use a modal for editing
  };

  const handleDelete = async (userId) => {
    try {
      // Implement the delete functionality here
      // You can send a DELETE request to delete the user with the provided userId
      await axios.delete(`/user/${userId}`);
      window.alert('User deleted successfully!');

      // Fetch the updated list of users and update the state
      const response = await axios.get('/user/list');
      if (response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('User delete failed:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/user/list');
        if (response.data) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUsers();
  }, []);

  const customerUsers = users.filter((user) => user.Role === 'Customer');

  return (
    <>
    {/* <CustomerNavbar/> */}
    <div className="tablecontainer">
      
      <center>
        <h3>Customer Profile data 2</h3>
      </center>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Home Address</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.homeAddress}</td>
              <td>{user.mobile}</td>
              <td>
                
                <button
                  className="btn btn-delete btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
    
  );
}

export default CustomerDeleteProfile;
