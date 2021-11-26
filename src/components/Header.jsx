import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <Nav className="me-left navbar__links">
            <Link to="/home">Tasks</Link>
            <Link to="/create-user">Create User</Link>
            <Nav.Link>Amil</Nav.Link>
            <Button className="mx-2">Logout</Button>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
