import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container
        fluid
        className="bg-secondary-subtle"
        style={{ height: "15.9em" }}
      >
        <Row className="align-self-center">
          <Col className="text-center m-auto">
            <p>&copy; 2022 My Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
