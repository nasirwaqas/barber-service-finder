
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNavbar from "../DashboardNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../Sidebar';

const Remarks = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/review/listreviews');
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Error fetching reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
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
            
           <div>
      <h2>All Reviews</h2>
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
   </Col>
         </Row>
       </Container>
     </section>
   </>
 )
}

export default Remarks;






 