import React, { Component } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      comment: "",
    };
  }
  selection = async () => {
    this.setState({ selected: !this.state.selected });
    console.log(this.state.selected);
  };
  getComments = () => {
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
  render() {
    let bookArray = [this.props.book];
    return bookArray.map((book) => {
      const { asin, img, title, category } = book;
      if (!title.toLowerCase().includes(this.props.keepValue.toLowerCase())) {
        return null;
      } else {
        return (
          <Col key={asin} className="d-flex justify-content-center">
            <Card
              className="text-center  p-0 col-1 border border-dark shadow mt-2"
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
                      this.selection();
                    }}
                  ></Button>
                </Row>
                {this.state.selected && this.getComments()}
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
  }
}
