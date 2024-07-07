// BookingList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/booking/customer/bookings'); // Adjust the URL based on your backend API
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()} <br />
              <strong>Time:</strong> {booking.time} <br />
              <strong>Customer Name:</strong> {booking.customer.name} <br />
              <strong>Customer Email:</strong> {booking.customer.email} <br />
              <strong>Customer Phone:</strong> {booking.customer.phone}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
