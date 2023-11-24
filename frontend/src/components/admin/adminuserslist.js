
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/users/updates/${id}/edit`);
  
    
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
        setUsers(response.data.users);
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

  return (
    <div className='tablecontainer'>

      <Link to="/admin/add/barber" className="btn btn-secondary">
        AddBarber
      </Link>
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
          {users?.map((user) => (
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

export default UserList;
