import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        {this.props.books[0].fantasyBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
        {this.props.books[0].horrorBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
        {this.props.books[0].scifiBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
        {this.props.books[0].historyBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
        {this.props.books[0].romanceBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    );
  }
}
