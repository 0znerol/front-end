import logo from "./logo.svg";
import ButtonComponent from "./component/ButtonComponent";
import ImageComponent from "./component/ImageComponet";
import React, { useState, useEffect } from "react";
import "./App.css";
let cc = 0;
let imgNum = Math.floor(Math.random() * 1000);
let imgSrc = "https://picsum.photos/" + imgNum;
async function fetchUsers() {
  const response = await fetch("http://192.168.1.116:7000/users", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  const json = await response.json();
  console.log(json);
  return json;
}

function App() {
  const [user, setUser] = useState([fetchUsers]);
  const [userCount, setUserCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(imgSrc);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUser(data);
    };
    setImageUrl("https://picsum.photos/" + imgNum);
    fetchData();
  }, [userCount]);

  const handleClick = () => {
    setUserCount((count) => count + 1);
    if (cc == 2) {
      cc = 0;
    } else {
      cc++;
    }
    imgNum = Math.floor(Math.random() * 1000);
  };
  let userName = user[cc].name;
  let userSurname = user[cc].surname;
  return (
    <div className="App">
      <ButtonComponent text="cycle users & image" onClick={handleClick} />
      <ImageComponent src={imageUrl} />
      <p>{userName + " " + userSurname}</p>
    </div>
  );
}

export default App;
