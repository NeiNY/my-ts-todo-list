import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1 px-1">
        <a href="/" className="brand-logo">
          TODO react + typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Sass</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
