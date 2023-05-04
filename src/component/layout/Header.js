import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Image, NavDropdown } from "react-bootstrap";
function Header(props) {
  const navigate = useNavigate();
  console.log(props);
  const handleClick = () => {
    navigate("/editProfile");
  };
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="/dashboard">Village Story Talk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          {props.name}
          <Image src="../../public/icon/user.png" rounded />
          <Nav>
            <button onClick={handleClick}>Edit Profile</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
