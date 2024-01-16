import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import HeroComponent from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  let sInput = (input) => {
    if (input == undefined) {
      return "";
    }
    setSearch(input);
    // console.log(input);
    return input;
  };
  let fValue = (filter) => {
    console.log(filter);
    setFilter(filter);
    return filter;
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
    <div className="App bg-body-dark">
      <NavBar searchInput={sInput} filter={fValue} />
      <HeroComponent />
      <AllBooks searchValue={search} filterBooks={filter} />
      <MyFooter />
    </div>
  );
}

export default App;
