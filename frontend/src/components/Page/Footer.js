import React from 'react';
import '../style/Footer.css'
import { Link } from 'react-router-dom';
function Footer () {
 
    return(
      <div className='footer'>
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Find nearest barber available now</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i> Call : +923095153936</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> bc190410329@vu.edu.pk</a></li>
                     </ul>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                     <h3>About </h3>
                     <p className="variat">The ultimate in comfortable, convenient, and professional beauty salon services at book online now.</p>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                     <h3>Barber Servieces  </h3>
                     <p className="variat" >If you want to save hours of time please we are provide online services you can book in few minuts.</p>
                  </div>
                  <div className="col-md-2 col-sm-6">
                     <h3>Useful Link</h3>
                     <ul className="link_menu">
                        <li className="active"><Link to ="/">Home</Link></li>
                        <li><Link to="about.html"> About</Link></li>
                        <li><Link to="/barber">Barbers</Link></li>
                        <li><Link to="pricing.html">Pricing</Link></li>
                        <li><Link to="contact.html">Contact Us</Link></li>
                     </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <h3>Subscribe</h3>
                     <form className="bottom_form">
                        <a className="right_btn" href="Javascript:void(0)"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <p > Subscribe now to get Luxry offers </p>
                     </form>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2023 All Rights Reserved. Design by Nasir waqas </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

    )
  }
  
  export default Footer;