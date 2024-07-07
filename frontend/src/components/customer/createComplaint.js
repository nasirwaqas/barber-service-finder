// CreateComplaint.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

function CreateComplaint({ onComplaintSubmitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', complaint: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/createComplaint', formData);
      setFormData({ name: '', email: '', complaint: '' });
      onComplaintSubmitted(); // Trigger the parent component to fetch updated complaints
    } catch (error) {
      console.error('Error submitting complaint:', error);
      console.error('Error details:', error.response);
    }
  };

  return (
    <Container>
      <h1>Write your Complain here</h1>
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
    </Container>
  );
}

export default CreateComplaint;
