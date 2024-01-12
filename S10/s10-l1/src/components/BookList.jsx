import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";

const BookList = (props) => {
  const [sValue, setSValue] = useState(props.sv || "");

  useEffect(() => {
    setSValue(props.sv || "");
  }, [props.sv]);
  console.log(props.books);
  return (
    <Row className="">
      <Row className="m-auto rounded">
        <Row className="justify-content-start">
          <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center ms-5">
            Fantasy
          </h3>
        </Row>

        {props.books[1].map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={sValue} />
        ))}
      </Row>

      <Row className="m-auto">
        <Row className="justify-content-start">
          <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center mt-3 ms-5">
            SciFi
          </h3>
        </Row>
        {props.books[0].map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={sValue} />
        ))}
      </Row>

      <Row className="m-auto">
        <Row className="justify-content-start">
          <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center mt-3 ms-5">
            History
          </h3>
        </Row>

        {props.books[2].map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={sValue} />
        ))}
      </Row>

      <Row className="m-auto">
        <Row className="justify-content-start">
          <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center mt-3 ms-5">
            Horror
          </h3>
        </Row>

        {props.books[3].map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={sValue} />
        ))}
      </Row>

      <Row className="m-auto">
        <Row className="justify-content-start">
          <h3 className="border rounded border-dark py-2 bg-secondary-subtle shadow w-25 text-center mt-3 ms-5">
            Romance
          </h3>
        </Row>

        {props.books[4].map((book) => (
          <SingleBook key={book.asin} book={book} keepValue={sValue} />
        ))}
      </Row>
    </Row>
  );
};

export default BookList;
