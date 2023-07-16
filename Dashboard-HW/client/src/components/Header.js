import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ page, pageName, paths }) => {
  return (
    <div className="nav">
      <h1>{pageName}</h1>
      <Link to={paths} style={{ color: "inherit", textDecoration: "none" }}>
        <button className="header-btn">{page}</button>
      </Link>
    </div>
  );
};

export default Header;
