import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Page/Home';
import Header from '../components/navbar/Navbar'
=======
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Home from '../components/Page/Home';
import Header from '../components/navbar/Navbar';
>>>>>>> 8e73524 (add some front end and backend files)
import Footer from '../components/Page/Footer';

import Barberlogin from '../components/barber/barberlogin';
import Barberregister from '../components/barber/barberregister';
import BarberList from '../components/barber/barberlist';
import BarberEdit from '../components/barber/barberedit';

import Customerlogin from '../components/customer/customerlogin';
import Customerregister from '../components/customer/customerregister';
import CustomerList from '../components/customer/customerlist';
import CustomerEdit from '../components/customer/customeredit';
<<<<<<< HEAD
import CustomerCreateProfile from '../components/customer/customercreateprofile';

=======
>>>>>>> 8e73524 (add some front end and backend files)


import Adminlogin from '../components/admin/adminlogin';
import Adminregister from '../components/admin/adminregister';
import Services from '../components/Page/Services';
import UserList from '../components/admin/adminuserslist';
import UsersEdit from '../components/admin/userEditForm';
import AddBarber from '../components/admin/addbarber';

<<<<<<< HEAD

class NavRouter extends React.Component {
    render () {
        const isAuthenticated = /* logic to check if the user is authenticated */ true;
        const isCustomer = /* logic to check if the user has the role of 'Customer' */ true;

    return (
        <>
        <Router>
            <Header/>
            <Routes>
                <>
           <Route exact path='/' Component={Home} />
           <Route path='/services'  Component={Services}/>
       

           <Route path='/barber/login'Component={Barberlogin}/>
           <Route path='/barber/register'Component={Barberregister}/>
           <Route path='/barber/profile/data' Component={BarberList}/>
           <Route path='/barber/updates/:id/edit'Component={BarberEdit}/>


           <Route path='/customer/login'Component={Customerlogin}/>
           <Route path='/customer/register'Component={Customerregister}/>
           <Route path='/customer/profile/data'Component={CustomerList}/>
           {/* <Route path='/customer/profile/:id/edit'Component={CustomerCreateProfile}/> */}

           {isAuthenticated && isCustomer ? (
                <Route path='/customer/profile/data' element={<CustomerList />} />
              ) : (
                <Route path='/customer/profile/data' element={<Navigate to="/access-denied" />} />
              )}
                         
           <Route path='/customer/updates/:id/edit'Component={CustomerEdit}/>

          
           <Route path='/admin/login'Component={Adminlogin}/>
           <Route path='/admin/register'Component={Adminregister}/>
           <Route path='/admin/users/list'Component={UserList}/>
           <Route path='/admin/users/updates/:id/edit'Component={UsersEdit}/>
           <Route path='/admin/add/barber' Component={AddBarber}/>
           </>
           </Routes>
           <Footer/>
        </Router>
                    
        </>
    )
    }
};

export default NavRouter;
=======
// import MainPage from '../components/admin/dashbord/Dashboard';
import MainPage from '../components/admin/dashbord/Dashboard';
import AdminCustomerList from '../components/admin/dashbord/pages/CustomerList';
import AdminCustomerEdit from '../components/admin/dashbord/pages/CustomerEdit';
import AdminBarberList from '../components/admin/dashbord/pages/BarberList';
import AdminBarberEdit from '../components/admin/dashbord/pages/BarberEdit';
import Raiting from '../components/admin/dashbord/pages/Raiting';
import AvgRaiting from '../components/admin/dashbord/pages/AvgRaiting';
import Remarks from '../components/admin/dashbord/pages/Remarks';
import CustomerComplaints from '../components/admin/dashbord/pages/CustomerComplaints';
import BarberComplaints from '../components/admin/dashbord/pages/BarberComplaints';
import Report from '../components/admin/dashbord/pages/Report';
import CustomerHome from '../components/customer/customerhome';
import CustomerViewProfile from '../components/customer/customerviewprofile';
import CustomerUpdateProfile from '../components/customer/customerupdateprofile';
import CustomerDeleteProfile from '../components/customer/customerdeleteprofile';
import CustomerComplaint from '../components/customer/customercomplaint';
import ListComplaint from '../components/customer/listComplaints';
import CustomerComplaintList from '../components/customer/listComplaints';
import BarberHome from '../components/barber/barberhome';
import BarberComplaint from '../components/barber/barbercomplaint';
import BarberComplaintList from '../components/barber/listcomplaint';
import BarberDetails from '../components/barber/barberdetails';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
import Profile from '../components/customer/customerlist';
import BarberReviews from '../components/barber/barberrevies';
import { useParams } from 'react-router-dom';
import BookingList from '../components/barber/bookinglist';

function NavRouter (){
  const user = useAuth();
  
    return (
  
        <Router>
                <Layout userRole={user?.Role} />
 
          <Routes>
          <>
    <Route exact path='/' element={<Home />} />
    <Route path='/services' element={<Services />} />
    <Route path='/barber/login' element={<Barberlogin />} />
    <Route path='/barber/register' element={<Barberregister />} />
    <Route path='/barber/profile/data' element={<BarberList />} />
    <Route path='/barber/updates/edit' element={<BarberEdit />} />
    <Route path='/barber/home' element={<BarberHome />} />
    <Route path='/barber/complaint' element={<BarberComplaint />} />

    // Your router configuration
    <Route path="/review/:barberId/reviews" element={<BarberReviews />} />

    <Route path='/barber/bookings' element={<BookingList />}/>
    
    <Route path='/barber/complaint/list' element={<BarberComplaintList />} />
    <Route path='/barber/:barberId/*' element={<BarberDetails />} />

    <Route path='/customer/login' element={<Customerlogin />} />
    <Route path='/customer/register' element={<Customerregister />} />
    <Route path='/customer/profile' element={<Profile />} />
    <Route path='/customer/home' element={<CustomerHome />} />
    <Route path='/customer/updates/:id/edit' element={<CustomerEdit />} />
    <Route path='/customer/view/profile' element={<CustomerViewProfile />} />
    <Route path='/customer/update/profile' element={<CustomerUpdateProfile />} />
    <Route path='/customer/delete/profile' element={<CustomerDeleteProfile />} />
    <Route path='/customer/complaint' element={<CustomerComplaint />} />
    <Route path='/customer/complaint/list' element={<CustomerComplaintList />} />

    <Route path='/admin/login' element={<Adminlogin />} />
    <Route path='/admin/register' element={<Adminregister />} />
    <Route path='/admin/users/list' element={<UserList />} />
    <Route path='/admin/add/barber' element={<AddBarber />} />
    <Route path='/admin/dashboard' element={<MainPage />} />
    <Route path="/admin/dashboard/Customer/list" element={<AdminCustomerList />} />
    <Route path="/admin/dashboard/customer/updates/:id/edit" element={<AdminCustomerEdit />} />
    <Route path="/admin/dashboard/barber/list" element={<AdminBarberList />} />
    <Route path="/admin/dashboard/barber/updates/:id/edit" element={<AdminBarberEdit />} />
    <Route path="/admin/dashboard/raiting" element={<Raiting />} />
    <Route path="/admin/dashboard/avgraiting" element={<AvgRaiting />} />
    <Route path="/admin/dashboard/customer/remarks" element={<Remarks />} />
    <Route path="/admin/dashboard/customer/complaints" element={<CustomerComplaints />} />
    <Route path="/admin/dashboard/barber/complaints" element={<BarberComplaints />} />
    <Route path="/admin/dashboard/report" element={<Report />} />
              </>
          </Routes>
        </Router>
        
    );
  }

export default NavRouter;
>>>>>>> 8e73524 (add some front end and backend files)
