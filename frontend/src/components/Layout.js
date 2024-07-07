// Layout.js
import React from 'react';
import RoleBasedNavbar from './RoleBasedNavbar';

const Layout = ({ children, userRole }) => {
  return (
    <div>
      <RoleBasedNavbar userRole={userRole} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;