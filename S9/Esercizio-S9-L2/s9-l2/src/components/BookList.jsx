import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.sv);
    let searchValue = this.props.sv.searchValue;
    if (this.props.sv.searchValue === undefined) {
      searchValue = "";
    }
    return (
      <Row>
        {this.props.books[0].fantasyBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        {this.props.books[0].horrorBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        {this.props.books[0].scifiBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        {this.props.books[0].historyBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
        {this.props.books[0].romanceBooks.map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={searchValue} />
        ))}
      </Row>
    );
  }
}
