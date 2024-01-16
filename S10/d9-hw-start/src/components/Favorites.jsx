import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store/store";

export default function Favorites() {
  let jobs = useSelector((state) => state);
  return (
    <>
      <div>Favorites</div>
      <ul>
        {jobs.map((job) => (
          <li>{job.title}</li>
        ))}
      </ul>
    </>
  );
}
