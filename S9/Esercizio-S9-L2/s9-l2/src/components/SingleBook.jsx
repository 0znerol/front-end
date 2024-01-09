import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }
  render() {
    // console.log(this.props.keepValue);
    let bookArray = [this.props.book];
    return bookArray.map((book) => {
      const { asin, img, title, category } = book;
      if (!title.toLowerCase().includes(this.props.keepValue.toLowerCase())) {
        return null;
      } else {
        return (
          <Col key={asin}>
            <Card
              className="text-center  p-0 col-1 border mt-2"
              style={{ width: "16em", height: "33em" }}
            >
              <Card.Img
                variant="top"
                src={img}
                className="m-auto"
                style={{ width: "15em", height: "20em" }}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
  }
}
