import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.styles.css";

export const Header = ({ showModal, anyTask }) => {
  const handleTaskBtnClick = () => {
    showModal(true);
    anyTask({});
  };
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">TaskTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#"
                variant="text-primary"
                onClick={handleTaskBtnClick}
              >
                Log Task
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
