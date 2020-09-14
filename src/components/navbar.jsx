import React, { Component } from "react";

// Stateless Functional Component and no need to use the class component
// wrire totalCounters in the function so that no need to use props in the funciton
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        TotalNumber{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
