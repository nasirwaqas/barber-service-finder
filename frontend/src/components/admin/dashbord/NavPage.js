import { Routes, Route } from "react-router-dom";
import Report from './pages/Report'
import BarberList from './pages/BarberList'
import Home from './pages/Home'
import Remarks from './pages/Remarks'
import CustomerCopmlaint from './pages/CustomerComplaints'
import BarberCopmlaints from './pages/BarberComplaints'
import AdminCustomerEdit from "./pages/CustomerEdit";
import AdminCustomerList from "./pages/CustomerList";
import Raiting from "./pages/Raiting";
import AvgRaiting from "./pages/AvgRaiting";

const NavPage = () => {
  return (
 
    
      <section>
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard/barber/list" element={<BarberList />} /> 
        <Route path="/admin/dashboard/customer/remarks" element={<Remarks />} />
        <Route path="/admin/dashboard/raiting" element={<Raiting />} />
        <Route path="/admin/dashboard/customer/complaints" element={<CustomerCopmlaint />} />
        <Route path="/admin/dashboard/barber/complaints" element={<BarberCopmlaints />} />
        <Route path="/admin/dashboard/avgraiting" element={<AvgRaiting />} />
        <Route path="/admin/dashboard/Customer/list" element={<AdminCustomerList />} />
        <Route path ="/admin/dashboard/customer/${id}/edit" element={AdminCustomerEdit} />
        <Route path="/admin/dashboard/report" element={<Report />} />
        </Routes>
        
      </section>
      
  );
};

export default NavPage;

