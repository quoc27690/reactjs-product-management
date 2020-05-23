import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "active" : ""}>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
}

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">CALL API</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
            <MenuLink
              label="Product List"
              to="/product-list"
              activeOnlyWhenExact={true}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
