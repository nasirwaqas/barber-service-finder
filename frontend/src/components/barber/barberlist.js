import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function BarberList({ userRole }) { // Pass the user's role as a prop
  const [barberUsers, setBarberUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/barber/updates/${id}/edit`);
    // Implement the edit functionality here
    // You can redirect to a user edit page with the user's data or use a modal for editing
  };

  const handleDelete = async (userId) => {
    try {
      // Implement the delete functionality here
      // You can send a DELETE request to delete the user with the provided userId
      await axios.delete(`/user/${userId}`);
      window.alert('User deleted successfully!');

      // Fetch the updated list of Barber users and update the state
      const response = await axios.get('/user/list');
      if (response.data) {
        const barberUsers = response.data.filter((user) => user.Role === 'Barber');
        setBarberUsers(barberUsers);
      }
    } catch (error) {
      console.error('User delete failed:', error);
    }
  };

  useEffect(() => {
    if (userRole === 'barber') { // Check the user's role before making the API call
      const fetchBarberUsers = async () => {
        try {
          // Fetch the list of all users
          const response = await axios.get('/user/list');
          if (response.data) {
            // Filter the users with the role "Barber"
            const barberUsers = response.data.filter((user) => user.Role === 'Barber');
            setBarberUsers(barberUsers);
          }
        } catch (error) {
          console.error('Error fetching Barber user list:', error);
        }
      };

      fetchBarberUsers();
    }
  }, [userRole]);

  return (
    <div className='tablecontainer'>
      <Link to="/barber/updates/:id/edit" className="btn btn-secondary">
        Profile
      </Link>
      <center>
        <h3>Barber Profile data</h3>
      </center>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Home Address</th>
            <th scope="col">Barber Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {barberUsers?.map((user) => (
            <tr key={user._id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.homeAddress}</td>
              <td>{user.barberAddress}</td>
              <td>
                <button className='btn btn-edit btn btn-primary' onClick={() => handleEdit(user._id)}>
                  Edit
                </button>
                <button className='btn btn-delete btn-danger' onClick={() => handleDelete(user._id)}>
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

export default BarberList;
