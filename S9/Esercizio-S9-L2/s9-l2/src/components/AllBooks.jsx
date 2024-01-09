import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import BookList from "./BookList";

class AllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scifiBooks: [],
      fantasyBooks: [],
      historyBooks: [],
      horrorBooks: [],
      romanceBooks: [],
      searchProps: this.props,
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    try {
      const response = await fetch("../books/scifi.json");

      const data = await response.json();
      this.setState({ scifiBooks: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    try {
      const response = await fetch("../books/fantasy.json");

      const data = await response.json();
      this.setState({ fantasyBooks: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    try {
      const response = await fetch("../books/history.json");

      const data = await response.json();
      this.setState({ historyBooks: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    try {
      const response = await fetch("../books/horror.json");

      const data = await response.json();
      this.setState({ horrorBooks: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    try {
      const response = await fetch("../books/romance.json");

      const data = await response.json();
      this.setState({ romanceBooks: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  // componentDidUpdate() {
  //   console.log(this.props);
  // }
  render() {
    return (
      <BookList books={[this.state]} sv={this.props} />
      //   <Row>
      //     <Col>
      //       <Row>
      //         {scifiBooks.map((book) => {
      //           const { asin, img, title, category } = book;
      //           return (
      //             <Card key={asin} className="text-center w-25 p-0 col-1">
      //               <Card.Img variant="top" src={img} className="" />
      //               <Card.Body>
      //                 <Card.Title>{title}</Card.Title>
      //                 <Card.Text>{category}</Card.Text>
      //               </Card.Body>
      //             </Card>
      //           );
      //         })}
      //       </Row>
      //       <Row>
      //         {fantasyBooks.map((book) => {
      //           const { asin, img, title, category } = book;
      //           return (
      //             <Card key={asin} className="text-center w-25 p-0">
      //               <Card.Img variant="top" src={img} className="" />
      //               <Card.Body>
      //                 <Card.Title>{title}</Card.Title>
      //                 <Card.Text>{category}</Card.Text>
      //               </Card.Body>
      //             </Card>
      //           );
      //         })}
      //       </Row>
      //       <Row>
      //         {historyBooks.map((book) => {
      //           const { asin, img, title, category } = book;
      //           return (
      //             <Card key={asin} className="text-center w-25 p-0">
      //               <Card.Img variant="top" src={img} className="" />
      //               <Card.Body>
      //                 <Card.Title>{title}</Card.Title>
      //                 <Card.Text>{category}</Card.Text>
      //               </Card.Body>
      //             </Card>
      //           );
      //         })}
      //       </Row>
      //       <Row>
      //         {horrorBooks.map((book) => {
      //           const { asin, img, title, category } = book;
      //           return (
      //             <Card key={asin} className="text-center w-25 p-0">
      //               <Card.Img variant="top" src={img} className="" />
      //               <Card.Body>
      //                 <Card.Title>{title}</Card.Title>
      //                 <Card.Text>{category}</Card.Text>
      //               </Card.Body>
      //             </Card>
      //           );
      //         })}
      //       </Row>
      //       <Row>
      //         {romanceBooks.map((book) => {
      //           const { asin, img, title, category } = book;
      //           return (
      //             <Card key={asin} className="text-center p-0">
      //               <Card.Img variant="top" src={img} className="" />
      //               <Card.Body>
      //                 <Card.Title>{title}</Card.Title>
      //                 <Card.Text>{category}</Card.Text>
      //               </Card.Body>
      //             </Card>
      //           );
      //         })}
      //       </Row>
      //     </Col>
      //   </Row>
    );
  }
}

export default AllBooks;
