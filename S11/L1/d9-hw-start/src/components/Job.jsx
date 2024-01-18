import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../actions";
import { createStore } from "redux";
import jobsReducer from "../reducers/rootreduce";
import { useState } from "react";
const Job = ({ data }) => {
  const joblist = useSelector((state) => state.favjobs);
  console.log(joblist);
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
      <Col xs={4}>
        <button
          key={data.id}
          onClick={() => {
            dispatch(addFavorites(data));
            console.log(joblist);
          }}
        >
          add favorite
        </button>
      </Col>
    </Row>
  );
};

export default Job;
