import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

import BarberNavbar from './barbernavbar';
import Footer from '../Page/Footer';

function BarberComplaint() {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', complaint: '', role: 'Barber' });

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      await axios.post('/complaint/createComplaint', { ...formData, role: 'Barber' });
      setFormData({ name: '', email: '', complaint: '', role: 'Barber' });
      fetchComplaintList();
    } catch (error) {
      console.error('Error submitting complaint:', error);
      console.error('Error details:', error.response);
    }
  };

  // Filter only complaints with the role 'Barber'
  const barberComplaints = complaints.filter((complaint) => complaint.role === 'Barber');

  return (
    <>
      <BarberNavbar />
      <Container>
        <h1>Write your Complaint here</h1>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formComplaint">
          <Form.Label>Complaint</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your complaint"
            value={formData.complaint}
            onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
            required
          />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit Complaint
          </Button>
        </Form>
        <Container>
          <h2>Recent Barber Complaints</h2>
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
      </Container>
      <Footer />
    </>
  );
}

export default BarberComplaint;
