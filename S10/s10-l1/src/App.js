import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import HeroComponent from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState();

  let sInput = (input, filter) => {
    if (input == undefined) {
      return "";
    }
    setSearch(input);
    // console.log(input);
    console.log(filter);
    return input;
  };
  // useEffect(() => {
  //   const getInput = async () => {
  //     const data = await sInput();
  //     setSearch(await data);
  //   };
  //   getInput();
  //   console.log(getInput());
  // }, [sInput]);
  console.log(search);
  return (
    <div className="App bg-warning">
      <NavBar searchInput={sInput} />
      <HeroComponent />
      <AllBooks searchValue={search} />
      <MyFooter />
    </div>
  );
}

export default App;
