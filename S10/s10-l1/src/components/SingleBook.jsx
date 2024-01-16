import React, { useState } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  const selection = () => {
    setSelected(!selected);
    console.log(selected);
  };

  const getComments = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    for (let i = 0; i < randomNumber; i++) {
      return (
        <Container>
          <Row>
            <Col>
              <Card.Text>UserName</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                loremasdlkjasdlkjasdlkjasldkjaslkdjalskjdlskj
              </Card.Text>
            </Col>
          </Row>
        </Container>
      );
    }
  };

  let bookArray = [props.book];
  return bookArray.map((book) => {
    const { asin, img, title, category } = book;
    if (!title.toLowerCase().includes(props.keepValue.toLowerCase())) {
      return null;
    } else {
      return (
        <Col key={asin} className="d-flex justify-content-center ">
          <Card
            className="text-center  p-0 col-1 border bg-dark border-dark shadow mt-2 text-light"
            style={{ width: "16em", height: "33em" }}
          >
            <Card.Img
              variant="top"
              src={img}
              className="m-auto border border-2 border-dark border-top-0 rounded"
              style={{ width: "15em", height: "20em" }}
            />
            <Card.Body>
              <Row>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
              </Row>
              <Row>
                <Button
                  variant="primary"
                  onClick={() => {
                    selection();
                  }}
                ></Button>
              </Row>
              {selected && getComments()}
            </Card.Body>
          </Card>
        </Col>
      );
    }
  });
};

export default SingleBook;
