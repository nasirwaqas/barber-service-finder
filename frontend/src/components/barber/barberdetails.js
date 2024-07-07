import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';

function BarberDetails() {
  const { barberId } = useParams();
  const [barberDetails, setBarberDetails] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchBarberDetails = async () => {
      try {
        const response = await axios.get(`/user/${barberId}`);
        if (response.data) {
          setBarberDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching barber details:', error);
      }
    };

    fetchBarberDetails();
  }, [barberId]);
  useEffect(() => {
    const fetchBarberReviews = async () => {
      try {
        const response = await axios.get(`/review/barber/${barberId}/reviews`);
        if (response.data && response.data.reviews.length > 0) {
          const reviews = response.data.reviews;
          const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
          const avgRating = totalRating / reviews.length;
          setAverageRating(avgRating);
        }
      } catch (error) {
        console.error('Error fetching barber reviews:', error);
      }
    };

    fetchBarberReviews();
  }, [barberId]);

  const handleRatingAndComment = async () => {
    try {
      // Assuming you have an endpoint to handle the rating and comment submission
      await axios.post(`/review/createReview/${barberId}`, {
        rating,
        comment,
      });

      // Handle success or update state accordingly
      console.log('Rating and comment submitted successfully');

      // Optionally, you can update the local state to reflect the changes
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting rating and comment:', error);
    }
  };

  const handleBooking = async () => {
    try {
      // Assuming you have an endpoint to handle the booking submission
      const response = await axios.post(`/booking/bookBarber/${barberId}`, {
        date: bookingDate,
        time: bookingTime,
        customerName,
        customerEmail,
        customerPhone,
      });

      // Extract booking details from the response
      const { message, booking } = response.data;

      // Handle success or update state accordingly
      console.log(message);
      console.log('Booking details:', booking);

      // Optionally, you can update the local state to reflect the changes
      setBookingDate('');
      setBookingTime('');
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  if (!barberDetails) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <Row>
      
        <Col xs={12} md={6}>
          <Image src={require('../../images/' + barberDetails.image)} className="card-img-top" alt={barberDetails.fullname} fluid />
        </Col>
        <Col xs={12} md={6} className="text-left">
          <h2>{barberDetails.fullname}</h2>
          <p> <b>Experience:</b>&nbsp;&nbsp; {barberDetails.experience}</p>
          <p> <b>Qualification:</b>&nbsp; {barberDetails.qualification}</p>
          <p> <b>Location: </b>&nbsp;&nbsp;{barberDetails.location}</p>
          <p> <b>Expertise:</b> &nbsp;{barberDetails.expertise}</p>
          <p> <b>Account No:</b>&nbsp;{barberDetails.mobile}</p>
          <p> <b>Average Rating:</b> &nbsp;{averageRating.toFixed(1)}</p>
        </Col>
        
      </Row>
       </div>
      {/* Booking Section */}
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h3>Book Barber</h3>
        <Form>
          <Form.Group controlId="bookingDate">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="bookingTime">
            <Form.Label>Time:</Form.Label>
            <Form.Control type="time" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="customerName">
            <Form.Label>Customer Name:</Form.Label>
            <Form.Control type="text" placeholder='Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="customerEmail">
            <Form.Label>Customer Email:</Form.Label>
            <Form.Control type="email" placeholder='Customer E-mail' value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="customerPhone">
            <Form.Label>Customer Phone:</Form.Label>
            <Form.Control type="tel" placeholder='Customer Phone' value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleBooking}>
            Book Appointment
          </Button>
        </Form>
      </div>

      <div style={{ margin: '10px 0', padding: '20px', border: '1px solid #ccc' }}>
        <Form>
          <Form.Group controlId="rating">
            <Form.Label>Rating:</Form.Label>
            <Rating
              count={5}
              value={rating}
              onChange={(rating) => setRating(rating)}
              size={24}
              activeColor="#ffd700"
            />
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" value={comment} placeholder='write your remarks hare' onChange={(e) => setComment(e.target.value)} rows={3} />
          </Form.Group>
          <Button variant="primary" onClick={handleRatingAndComment}>
            Submit Rating and Comment
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BarberDetails;
