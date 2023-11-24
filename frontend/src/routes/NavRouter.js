import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Page/Home';
import Header from '../components/navbar/Navbar'
import Footer from '../components/Page/Footer';

import Barberlogin from '../components/barber/barberlogin';
import Barberregister from '../components/barber/barberregister';
import BarberList from '../components/barber/barberlist';
import BarberEdit from '../components/barber/barberedit';

import Customerlogin from '../components/customer/customerlogin';
import Customerregister from '../components/customer/customerregister';
import CustomerList from '../components/customer/customerlist';
import CustomerEdit from '../components/customer/customeredit';
import CustomerCreateProfile from '../components/customer/customercreateprofile';



import Adminlogin from '../components/admin/adminlogin';
import Adminregister from '../components/admin/adminregister';
import Services from '../components/Page/Services';
import UserList from '../components/admin/adminuserslist';
import UsersEdit from '../components/admin/userEditForm';
import AddBarber from '../components/admin/addbarber';


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