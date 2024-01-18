import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../actions";
import { createStore } from "redux";
import { useState } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
const Job = ({ data }) => {
  const joblist = useSelector((state) => state.favjobs);
  const [faveJobs, setFaveJobs] = useState([joblist]);
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={4} className="text-end">
        <button
          type="button"
          className="btn border-none bg-transparent"
          key={data.id}
          onClick={() => {
            dispatch(addFavorites(data));
          }}
        >
          <i class="bi bi-bookmark-fill fs-3"></i>
        </button>
      </Col>
    </Row>
  );
};

export default Job;
