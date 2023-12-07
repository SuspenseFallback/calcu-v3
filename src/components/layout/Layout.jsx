import React from "react";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>  
        <div className="layout">
            <Navbar />
            <div className="page"></div>
        </div>
    </>
    );
};

export default Layout;
