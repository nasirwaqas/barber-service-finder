import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

function CustomerComplaintList() {
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

  // Filter only complaints with the role 'Customer'
  const customerComplaints = complaints.filter((complaint) => complaint.role === 'Customer');

  return (
    <Container>
      <h2>Customer Complaints</h2>
      <ListGroup>
        {Array.isArray(customerComplaints) && customerComplaints.length > 0 ? (
          customerComplaints.map((complaint, index) => (
            <ListGroup.Item key={index}>
              <strong>{complaint.name}</strong> ({complaint.email}): {complaint.complaint}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No customer complaints available.</ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
}

export default CustomerComplaintList;
