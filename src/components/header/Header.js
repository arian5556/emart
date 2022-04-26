import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../Contexts/useAuthContext";
import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const activestyle = {
    color: "white",
    borderBottom: "2px solid goldenrod",
  };
  const { user, logOut } = useAuthContext();
  return (
    <div style={{ marginBottom: "3.5em" }}>
      <Navbar fixed="top" className="header" collapseOnSelect expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emart_Logo.svg/1200px-Emart_Logo.svg.png"
            width="100"
            height="28"
            className="d-inline-block align-top ms-5"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              className="fw-bold "
              activeStyle={activestyle}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="fw-bold "
              activeStyle={activestyle}
              to="/shop"
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="fw-bold "
              activeStyle={activestyle}
              to="/order"
            >
              Order Review
            </Nav.Link>
            {user?.email && (
              <Nav.Link
                className="fw-bold "
                as={NavLink}
                activeStyle={activestyle}
                to="/manageOrder"
              >
                Manage Order
              </Nav.Link>
            )}
            {user?.email && (
              <span className="text-white mt-2 me-2">{user.displayName}</span>
            )}
            {user.email ? (
              <Button
                variant="outline-warning"
                className="me-2 fw-bold"
                onClick={logOut}
              >
                Log Out
              </Button>
            ) : (
              <Nav.Link
                className="fw-bold"
                as={NavLink}
                activeStyle={activestyle}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
