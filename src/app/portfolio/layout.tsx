import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Our Works</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
