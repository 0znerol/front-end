import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let bookArray = [this.props.book];
    return bookArray.map((book) => {
      const { asin, img, title, category } = book;
      return (
        <Card key={asin} className="text-center w-25 p-0 col-1">
          <Card.Img variant="top" src={img} className="" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
}
