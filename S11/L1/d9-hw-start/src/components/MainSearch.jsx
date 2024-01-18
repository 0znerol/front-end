import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearJobs, getAllJobs } from "../actions";
const MainSearch = () => {
  let data = localStorage.getItem("joblist");
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const joblist = useSelector((state) => state.jobs[1]);
  const [jobs, setJobs] = useState("");

  // console.log(joblist);
  useEffect(() => {
    setJobs(joblist);
  });
  // const joblist = useSelector((state) => state.jobs);
  // console.log(joblist);
  // if (joblist.jobs[0] !== undefined) {
  //   JL = joblist.jobs[0].data;
  // }
  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);

    // if (query === "") {
    //   dispatch(clearJobs());
    // }
  };

  const handleSubmit = async (e) => {
    // jobs[0] = dispatch(getAllJobs(query));
    e.preventDefault();
    dispatch(getAllJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/favorites/")}
          >
            favorites
          </button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {jobs ? (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.data.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default MainSearch;
