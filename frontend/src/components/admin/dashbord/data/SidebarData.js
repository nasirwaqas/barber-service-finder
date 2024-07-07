import * as FaIcons from "react-icons/fa";
import CustomerEdit from "../pages/CustomerEdit";
import { GrCompliance } from "react-icons/gr";
import { BiSolidReport } from "react-icons/bi";

export const SidebarData=[
    {
        title: "Home",
        path: "/admin/dashboard",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Customer List",
        path: "/admin/dashboard/Customer/list",
        icon: <FaIcons.FaUser />,
      },


      {
         title:"Barber List",
         path:"/admin/dashboard/barber/list",
         icon: <FaIcons.FaUser/>
         
      },
      {
        title: "Barber Raiting",
        path: "/admin/dashboard/raiting",
        icon: <FaIcons.FaStar />,
      },
      // {
      //   title: "Avg Barber Raiting",
      //   path: "/admin/dashboard/avgraiting",
      //   icon: <FaIcons.FaStar />,
      // },
      {
        title: "Customer Remarks",
        path: "/admin/dashboard/customer/remarks",
        icon: <FaIcons.FaCommentDots />,
      },
     
      {
        title: "Customer Complaints",
        path: "/admin/dashboard/customer/complaints",
        icon: <GrCompliance />,
      },
      {
        title: "Barber Complaints",
        path: "/admin/dashboard/barber/complaints",
        icon: <GrCompliance />,
      },
      {
        title: "Report",
        path: "/admin/dashboard/report",
        icon: <BiSolidReport />,
      },
 
]