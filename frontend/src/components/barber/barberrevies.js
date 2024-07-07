import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BarberReviews = () => {
  const barberId = "65e37f29e65cc4419d273699"; // Set the barberId here

  const [barber, setBarber] = useState({
    name: '',
  });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBarberReviews = async () => {
      try {
        const response = await axios.get(`/review/${barberId}/reviews`); // Use barberId directly
        setBarber(response.data.barber);
        setReviews(response.data.reviews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching barber reviews:', error);
        setError('Error fetching barber reviews');
        setLoading(false);
      }
    };

    fetchBarberReviews();
  }, [barberId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>{barber ? `${barber.name} Reviews` : 'Barber Reviews'}</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Created At: {new Date(review.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarberReviews;
