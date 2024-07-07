import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BarberCard() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await axios.get('/user/list');
        if (response.data) {
          const barberList = response.data.filter((user) => user.Role === 'Barber');
          const barbersWithReviews = await Promise.all(
            barberList.map(async (barber) => {
              const reviewResponse = await axios.get(`/review/barber/${barber._id}/reviews`);
              const reviews = reviewResponse.data.reviews;
              const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
              const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
              return {
                ...barber,
                averageRating,
              };
            })
          );
          setBarbers(barbersWithReviews);
        }
      } catch (error) {
        console.error('Error fetching barber list:', error);
      }
    };

    fetchBarbers();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {barbers.map((barber) => (
        <div className="col" key={barber._id}>
          <Link to={`/barber/${barber._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <img
                src={require('../../images/' + barber.image)}
                className="card-img-top"
                alt={barber.fullname}
                style={{ height: '200px', margin: '0px', padding: '0px', border: '1px solid #ccc' }}
              />
              <div className="card-body">
                <h5 className="card-title">{barber.fullname}</h5>
                <p className="card-text">
                  <b>Experience:</b> &nbsp;{barber.experience}
                </p>
                <p className="card-text">
                  <b>Qualification: </b>&nbsp;{barber.qualification}
                </p>
                <p className="card-text">
                  <b>Location: </b>&nbsp;{barber.location}
                </p>
                <p className="card-text">
                  <b>Expertise: </b>&nbsp;{barber.expertise}
                </p>
                <p>
                  <b>Average Rating:</b> &nbsp;{barber.averageRating.toFixed(1)}
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BarberCard;
