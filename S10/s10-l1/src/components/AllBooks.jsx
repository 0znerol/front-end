import React, { useState, useEffect } from "react";
import BookList from "./BookList";

const AllBooks = (props) => {
  const [scifiBooks, setScifiBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [horrorBooks, setHorrorBooks] = useState([]);
  const [romanceBooks, setRomanceBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("../books/scifi.json");
      const data = await response.json();
      setScifiBooks(data);
    } catch (error) {
      console.error("Error fetching scifi books:", error);
    }
    try {
      const response = await fetch("../books/fantasy.json");
      const data = await response.json();
      setFantasyBooks(data);
    } catch (error) {
      console.error("Error fetching fantasy books:", error);
    }
    try {
      const response = await fetch("../books/history.json");
      const data = await response.json();
      setHistoryBooks(data);
    } catch (error) {
      console.error("Error fetching history books:", error);
    }
    try {
      const response = await fetch("../books/horror.json");
      const data = await response.json();
      setHorrorBooks(data);
    } catch (error) {
      console.error("Error fetching horror books:", error);
    }
    try {
      const response = await fetch("../books/romance.json");
      const data = await response.json();
      setRomanceBooks(data);
    } catch (error) {
      console.error("Error fetching romance books:", error);
    }
  };
  console.log(props.searchValue);
  return (
    <BookList
      books={[
        scifiBooks,
        fantasyBooks,
        historyBooks,
        horrorBooks,
        romanceBooks,
      ]}
      sv={props.searchValue}
    />
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
};

export default AllBooks;
