import logo from "./logo.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import HeroComponent from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroComponent />
      <AllBooks />
      <MyFooter />
    </div>
  );
}

export default App;
