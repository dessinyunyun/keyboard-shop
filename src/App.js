import logo from "./logo.svg";
import "./App.css";
import Ui from "./components/DataMapping";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="mb-5">Keyboard Shop</h1>
          <Ui />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
