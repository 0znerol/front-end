import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFav } from "../actions";
export default function Favorites() {
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.favjobs);
  // console.log(jobs);
  const dispatch = useDispatch();
  return (
    <Row className="text-center">
      <Col>
        <Row>
          <h1>Favorites</h1>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Home
          </button>
        </Row>
        <Row>
          <table>
            <thead>
              <tr>
                <th key={1} className="border border-dark">
                  Title
                </th>
                <th key={2} className="border border-dark">
                  Company Name
                </th>
                <th key={3} className="border border-dark">
                  Job Type
                </th>
                <th key={4} className="border border-dark">
                  Publication Date
                </th>
                <th key={5} className="border border-dark">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td className="border border-dark">
                    <a href={job.url}>{job.title}</a>
                  </td>
                  <td className="border border-dark">
                    <button
                      className="btn border-none bg-transparent"
                      onClick={() => navigate("/" + job.company_name + "/")}
                    >
                      {job.company_name}
                    </button>
                  </td>
                  <td className="border border-dark">{job.job_type}</td>
                  <td className="border border-dark">{job.publication_date}</td>
                  <td className="border border-dark">
                    <button
                      type="button"
                      className="border border-dark"
                      onClick={() => {
                        dispatch(deleteFav(job));
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Row>
      </Col>
    </Row>
  );
}
