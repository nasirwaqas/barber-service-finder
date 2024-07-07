
import DashboardNavbar from "../DashboardNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../Sidebar';
import CustomerComplaintList from "../../../customer/listComplaints";

const CustomerComplaint = () => {
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
      <CustomerComplaintList/>
    </div>
    </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CustomerComplaint



 