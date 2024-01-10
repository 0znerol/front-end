import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let searchValue = this.props.sv;
    if (searchValue === undefined) {
      searchValue = "";
    }
    return (
      <Row className="text-center">
        <Col>
          <Row>
            <h3>Fantasy</h3>
            {this.props.books[0].fantasyBooks.map((book) => (
              <SingleBook key={book.asin} book={book} keepValue={searchValue} />
            ))}
          </Row>
        </Col>
        <h3>Horror</h3>
        {this.props.books[0].horrorBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        <h3>Scifi</h3>

        {this.props.books[0].scifiBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        <h3>History</h3>

        {this.props.books[0].historyBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        <h3>Romance</h3>

        {this.props.books[0].romanceBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
      </Row>
    );
  }
}
