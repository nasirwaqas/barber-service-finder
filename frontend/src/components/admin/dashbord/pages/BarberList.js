

// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import DashboardNavbar from "../DashboardNavbar";
// import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from '../Sidebar';

// function AdminBarberList() {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   const handleEdit = (id) => {
//     navigate(`/admin/dashboard/barber/updates/${id}/edit`);
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
//         const response = await axios.get('/user/list');
//         if (response.data) {
//           setUsers(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching user list:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const customerUsers = users.filter((user) => user.Role === 'Barber');

//   return (
//     <>
//     <section>
//        <div>
//          <DashboardNavbar />
//        </div>
//      </section>
// {/* sidebar section */}
// <section>
//        <Container fluid>
//          <Row>
//            <Col xs={12} md={3} className="bg-dark text-light">
//              <Sidebar />
//            </Col>

//            <Col xs={12} md={9} className="bg-success text-light">
             
    


//     <div className="tablecontainer">
//       <Link to="/admin/dashboard/barber/updates/:id/edit" className="btn btn-secondary">
//         Add Barber
//       </Link>
//       <center>
//         <h3>Barber Profile data</h3>
//       </center>
//       <table className="table table-bordered border-primary">
//         <thead>
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Expertise</th>
//             <th scope="col">Qualification</th>
//             <th scope="col">Experience</th>
//             <th scope="col">Location</th>
//             <th scope="col">Actions</th>
    
//           </tr>
//         </thead>
//         <tbody>
//           {customerUsers.map((user) => (
//             <tr key={user._id}>
//               <td>{user.fullname}</td>
//               <td>{user.expertise}</td>
//               <td>{user.qualification}</td>
//               <td>{user.experience}</td>
//               <td>{user.location}</td>
//               <td>
//                 <button
//                   className="btn btn-edit btn btn-primary"
//                   onClick={() => handleEdit(user._id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-delete btn-danger"
//                   onClick={() => handleDelete(user._id)}
//                 >
//                   Delete
//                 </button>
//               </td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    
//     </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default AdminBarberList;
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from "../DashboardNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from '../Sidebar';

function AdminBarberList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/barber/updates/${id}/edit`);
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

  const handleApprove = async (userId) => {
    try {
      // Implement the approval functionality here
      // You can send a PATCH request to update the user's approval status
      await axios.patch(`/user/${userId}`, { status: 'approved' });
      window.alert('User approved successfully!');

      // Fetch the updated list of users and update the state
      const response = await axios.get('/user/list');
      if (response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('User approval failed:', error);
    }
  };

  const customerUsers = users.filter((user) => user.Role === 'Barber');

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
                <Link to="/admin/dashboard/barber/updates/:id/edit" className="btn btn-secondary">
                  Add Barber
                </Link>
                <center>
                  <h3>Barber Profile data</h3>
                </center>
                <table className="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Expertise</th>
                      <th scope="col">Qualification</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Location</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerUsers.map((user) => (
                      <tr key={user._id}>
                        <td>{user.fullname}</td>
                        <td>{user.expertise}</td>
                        <td>{user.qualification}</td>
                        <td>{user.experience}</td>
                        <td>{user.location}</td>
                        <td>
                          <button
                            className="btn btn-edit btn btn-primary"
                            onClick={() => handleEdit(user._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-approve btn-success"
                            onClick={() => handleApprove(user._id)}
                          >
                            Approve
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

export default AdminBarberList;
