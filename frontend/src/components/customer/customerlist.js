import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CustomerList() {
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
    <div className="tablecontainer">
      <Link to="/customer/updates/:id/edit" className="btn btn-secondary">
        Profile
      </Link>
      <center>
        <h3>Customer Profile data</h3>
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
                  className="btn btn-edit btn btn-primary"
                  onClick={() => handleEdit(user._id)}
                >
                  Edit
                </button>
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
  );
}

export default CustomerList;
=======
import axios from 'axios';

const Profile = () => {
  const [customerData, setCustomerData] = useState(null);
  const [userId, setUserId] = useState(/* Set userId to a valid value, or retrieve it from props or context */);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        // Ensure userId is defined and not an empty string or 'undefined'
        if (!userId || userId === 'undefined') {
          console.error('Invalid userId:', userId);
          return;
        }

        // Fetch customer data using the user token
        const token = localStorage.getItem('token');

        // Fetch customer data based on the user ID
        const response = await axios.get(`/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          setCustomerData(response.data);
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, [userId]); // Add userId as a dependency to useEffect

  if (!customerData) {
    return <div>Loading...</div>;
  }

  const { fullname, email, Role } = customerData;

  return (
    <div>
      <h2>Customer Profile</h2>
      <p>Name: {fullname}</p>
      <p>Email: {email}</p>
      <p>Role: {Role}</p>
      {/* Add more customer data fields as needed */}
    </div>
  );
};

export default Profile;
>>>>>>> 8e73524 (add some front end and backend files)
