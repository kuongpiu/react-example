import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  let products = [
    {
      icon: "https://previews.123rf.com/images/boransari/boransari2008/boransari200800355/153947844-agriculture-logo-farming-logo-farm-logo.jpg",
      name: "Egg",
      link: "/egg",
    },
    {
      icon: "https://previews.123rf.com/images/boransari/boransari2008/boransari200800355/153947844-agriculture-logo-farming-logo-farm-logo.jpg",
      name: "Candy",
      link: "/candy",
    },
  ];
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://previews.123rf.com/images/boransari/boransari2008/boransari200800355/153947844-agriculture-logo-farming-logo-farm-logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Coosc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Tours</Nav.Link>
            <NavDropdown title="Products">
              {products.map((item, idx) => {
                return (
                  <NavDropdown.Item key={idx} href={item.link}>
                    <img src={item.icon} width="20" height="20" /> {item.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
