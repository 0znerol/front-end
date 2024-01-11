import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
  Button,
  Container,
} from "react-bootstrap";

const NavBar = (props) => {
  const [search, setSearch] = useState("");
  const handleChangeSearch = (event) => {
    props.searchInput(event.target.value);
    setSearch(event.target.value);
  };
  // const handleFilter = (event) => {
  //   props.searchInput(search, event.target.innerText);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch("");
  };
  console.log(search);
  return (
    <Navbar
      expand="lg"
      className="bg-secondary-subtle border border-dark shadow"
    >
      <Container fluid className="m-0">
        <Navbar.Brand href="#home">React-Bookstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Scifi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Romance</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="ml-auto">
            <Row className="justify-content-end">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  value={search}
                  onChange={handleChangeSearch}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
