import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from "../DashboardNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../Sidebar';

function AdminCustomerLists() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Use the navigate function to programmatically navigate to the edit page
    navigate(`/admin/dashboard/customer/updates/${id}/edit`);
    // No need to reload the whole page
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
     <section>
        <div>
          <DashboardNavbar />
        </div>
      </section>
 {/* sidebar section */}
 <section>
        <Container fluid>
          <Row>
            <Col xs={12} md={3} className="bg-dark text-light">
              <Sidebar />
            </Col>

            <Col xs={12} md={9} className="bg-success text-light">
              
     


    <div className="tablecontainer">
      {/* Remove the Link component, as it's not needed in this case */}
      <center>
        <h3>Customer Profile data 1</h3>
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
    </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AdminCustomerLists;
