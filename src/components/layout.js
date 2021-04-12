import React from "react";
import { Link } from "gatsby";

const NavLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

function Layout({ children }) {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 650, padding: "0 1rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
          <h3 style={{ display: "inline" }}>MyGatsbySite</h3>
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </header>

      {children}

      <footer>
        <p>MyGatsbySite Copyright&copy;2021</p>
      </footer>
    </div>
  );
}

export default Layout;
