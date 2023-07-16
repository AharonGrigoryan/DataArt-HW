import React, { ReactNode } from "react";
import SideBar from "./SideBar";
import "../styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

export default Layout;
