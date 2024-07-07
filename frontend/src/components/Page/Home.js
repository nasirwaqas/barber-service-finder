<<<<<<< HEAD
    import '../style/Home.css'
    import React from "react";
    import heroimage from "../../images/heroimage.jpg";
    import { Link } from 'react-router-dom';
    import Button from 'react-bootstrap/Button';
    function Home() {
      return (
        <div className='hero'>
          <img src={heroimage} alt="Logo" className='hero-image' />
            <div class="hero-text">
              <h1>Hy welcome to barber Serviece</h1>
              <Button type="button" className="btn btn-outline-primary">
              <Link className="btn-link" to="/customer/login">Customer</Link>
            </Button>
            <Button type="button" className="btn btn-outline-primary">
              <Link className="btn-link" to="/barber/login">Barber</Link>
            </Button>
            <Button type="button" className="btn btn-outline-primary">
              <Link className="btn-link" to="/admin/login">Admin</Link>
            </Button>
              <h2>Select your services As</h2>
            </div>
        </div>
      );
    }
    
=======
import '../style/Home.css'
import React from "react";
import heroimage from "../../images/heroimage.jpg";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../navbar/Navbar';
import Footer from './Footer';
function Home() {
  return (
    <>
      {/* <Header/> */}
      <div className='hero'>
        <img src={heroimage} alt="Logo" className='hero-image' />
        <div class="hero-text">
          <h1>Hy welcome to barber Serviece</h1>
          <Button type="button" className="btn btn-outline-primary">
            <Link className="btn-link" to="/customer/login">Customer</Link>
          </Button>
          <Button type="button" className="btn btn-outline-primary">
            <Link className="btn-link" to="/barber/login">Barber</Link>
          </Button>
          <Button type="button" className="btn btn-outline-primary">
            <Link className="btn-link" to="/admin/login">Admin</Link>
          </Button>
          <h2>Select your services As</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

>>>>>>> 8e73524 (add some front end and backend files)
export default Home;