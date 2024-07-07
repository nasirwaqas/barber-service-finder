import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

function BarberComplaintList() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaintList();
  }, []);

  const fetchComplaintList = async () => {
    try {
      const response = await axios.get('/complaint/listComplaints');
      setComplaints(response.data.complaints || []); // Handle cases where 'complaints' field is not present
    } catch (error) {
      console.error('Error fetching complaints:', error);
      console.error('Error details:', error.response); // Log the detailed response
    }
  };

  // Filter only complaints with the role 'Barber'
  const barberComplaints = complaints.filter((complaint) => complaint.role === 'Barber');

  return (
    <Container>
      <h2>Barber Complaints</h2>
      <ListGroup>
        {Array.isArray(barberComplaints) && barberComplaints.length > 0 ? (
          barberComplaints.map((complaint, index) => (
            <ListGroup.Item key={index}>
              <strong>{complaint.name}</strong> ({complaint.email}): {complaint.complaint}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No barber complaints available.</ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
}

export default BarberComplaintList;
