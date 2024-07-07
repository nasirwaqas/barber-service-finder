import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import useAuth from "../../../hooks/useAuth";

const MainPage = () => {
  const data = useAuth()
  console.log("Admin Data",data)
  return (
    <React.Fragment>
      {/* heading section */}
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
              <NavPage />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
