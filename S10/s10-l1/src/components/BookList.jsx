import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";

const BookList = (props) => {
  const [sValue, setSValue] = useState(props.sv || "");
  const [fValue, setFValue] = useState(props.fv || "");

  useEffect(() => {
    setSValue(props.sv || "");
  }, [props.sv]);
  useEffect(() => {
    setFValue(props.fv || "");
  }, [props.fv]);
  console.log(props.books);
  console.log(fValue);
  return (
    <Row className="">
      {fValue === "Fantasy" && (
        <Row className="m-auto rounded">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              Fantasy
            </h3>
          </Row>

          {props.books[1].map((book) => (
            <SingleBook key={book.asin} book={book} keepValue={sValue} />
          ))}
        </Row>
      )}
      {fValue === "Scifi" && (
        <Row className="m-auto">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              SciFi
            </h3>
          </Row>
          {props.books[0].map((book) => (
            <SingleBook key={book.asin} book={book} keepValue={sValue} />
          ))}
        </Row>
      )}
      {fValue === "History" && (
        <Row className="m-auto">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              History
            </h3>
          </Row>

          {props.books[2].map((book) => (
            <SingleBook key={book.asin} book={book} keepValue={sValue} />
          ))}
        </Row>
      )}
      {fValue === "Horror" && (
        <Row className="m-auto">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              Horror
            </h3>
          </Row>

          {props.books[3].map((book) => (
            <SingleBook key={book.asin} book={book} keepValue={sValue} />
          ))}
        </Row>
      )}
      {fValue === "Romance" && (
        <Row className="m-auto">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              Romance
            </h3>
          </Row>

          {props.books[4].map((book) => (
            <SingleBook key={book.asin} book={book} keepValue={sValue} />
          ))}
        </Row>
      )}

      {fValue === "" && (
        <Row className="m-auto">
          <Row className="justify-content-start">
            <h3 className="border rounded border-dark py-2 bg-dark shadow w-25 text-center mt-3 ms-5">
              All Books
            </h3>
          </Row>

          {props.books.map((GenreBooks) =>
            GenreBooks.map((book) => (
              <SingleBook key={book.asin} book={book} keepValue={sValue} />
            ))
          )}
        </Row>
      )}
    </Row>
  );
};

export default BookList;
