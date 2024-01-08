import logo from "./logo.svg";
import ButtonComponent from "./component/ButtonComponent";
import ImageComponent from "./component/ImageComponet";
import React, { useState, useEffect } from "react";
import "./App.css";

let cc = 0;
async function fetchUsers() {
  const response = await fetch("http://192.168.1.116:7000/users", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  const json = await response.json();
  return json;
}

function App() {
  const [user, setUser] = useState([fetchUsers]);
  const [userCount, setUserCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUser(data);
    };
    setImageUrl("https://picsum.photos/200" + "?random=" + cc);
    fetchData();
  }, [userCount]);

  const handleClick = () => {
    setUserCount((count) => count + 1);
    if (cc == 9) {
      cc = 0;
    } else {
      cc++;
    }
  };
  let userName = user[cc].name;
  let userSurname = user[cc].surname;
  return (
    <div className="App row text-center" data-bs-theme="dark">
      <div className="col">
        <ButtonComponent text="cycle users & image" onClick={handleClick} />

        <div className="d-flex flex-column align-items-center ">
          <ImageComponent src={imageUrl} />
          <p>
            {"User " + user[cc].id + "/10: " + userName + " " + userSurname}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
