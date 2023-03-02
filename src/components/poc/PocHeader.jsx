import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PocHeader.css";

const PocHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Link className="header-link" to="/poc/home">
            <Nav.Link as="li">Home</Nav.Link>
          </Link>
          <Link className="header-link" to="/poc/newpost">
            <Nav.Link as="li">NewPost</Nav.Link>
          </Link>
          <Link className="header-link" to="/poc/recentpost">
            <Nav.Link as="li">Recentpost</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default PocHeader;
