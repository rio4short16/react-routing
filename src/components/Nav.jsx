import React from "react";
import { Link } from "react-router-dom";

function Nav({ links }) {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
