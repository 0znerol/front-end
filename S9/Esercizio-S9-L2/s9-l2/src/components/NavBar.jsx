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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch("");
  };
  console.log(search);
  return (
    <Navbar expand="lg" className="bg-secondary-subtle">
      <Container fluid className="m-0">
        <Navbar.Brand href="#home">React-Bookstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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
