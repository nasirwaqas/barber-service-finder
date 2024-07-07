import React from 'react';
import { SidebarData } from './data/SidebarData';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <React.Fragment>
      <section>
        <Nav className="flex-column">
          {SidebarData.map((item, index) => (
            <Nav.Item key={index}>
              <NavLink
                to={item.path}
                className="nav-link text-white font-weight-bold d-flex align-items-center py-4 px-6"
                activeClassName="active"
              >
                <span>{item.icon}</span>
                <div style={{margin: 6, }}></div>
                <span className="ml-2">{item.title}</span>
              </NavLink>
            </Nav.Item>
          ))}
        </Nav>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
