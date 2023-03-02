import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="page1">Page 1</Link>
          </li>
          <li>
            <Link to="page2">Page 2</Link>
          </li>
          <li>
            <Link to="page3">Page 3</Link>
          </li>
          <li>
            <Link to="poc">POC</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
