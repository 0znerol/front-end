import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";
let i = 0;
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sValue: "",
    };
  }

  com() {
    this.setState({ sValue: this.props.sv });
    if (this.state.sValue === undefined) {
      this.setState({ sValue: "" });
    }
  }

  render() {
    // console.log(
    //   this.props.books[0].fantasyBooks.length +
    //     this.props.books[0].horrorBooks.length +
    //     this.props.books[0].scifiBooks.length +
    //     this.props.books[0].historyBooks.length +
    //     this.props.books[0].romanceBooks.length
    // );
    return (
      <Row className="">
        <Row className="m-auto rounded">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center">
              Fantasy
            </h3>
          </Row>

          {this.props.books[0].fantasyBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              keepValue={this.state.sValue}
            />
          ))}
        </Row>

        <Row className="m-auto">
          <h3 className="border border-dark m-auto py-2 bg-secondary-subtle shadow">
            Horror
          </h3>
          {this.props.books[0].horrorBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              keepValue={this.state.sValue}
            />
          ))}
        </Row>

        <Row className="m-auto">
          <h3 className="border border-dark m-auto py-2 bg-secondary-subtle shadow">
            Scifi
          </h3>

          {this.props.books[0].scifiBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              keepValue={this.state.sValue}
            />
          ))}
        </Row>

        <Row className="m-auto">
          <h3 className="border border-dark m-auto py-2 bg-secondary-subtle shadow">
            History
          </h3>

          {this.props.books[0].historyBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              keepValue={this.state.sValue}
            />
          ))}
        </Row>

        <Row className="m-auto">
          <h3 className="border border-dark m-auto py-2 bg-secondary-subtle shadow">
            Romance
          </h3>

          {this.props.books[0].romanceBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              keepValue={this.state.sValue}
            />
          ))}
        </Row>
      </Row>
    );
  }
}
