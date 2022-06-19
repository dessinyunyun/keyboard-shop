import logo from "./logo.svg";
import "./App.css";
import Ui from "./components/DataMapping";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to="/">ke utama</Link>
            </li>
            <li>
              <Link to="/sec">ke sec page</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Ui />} />
            <Route path="/sec" element={<SecondPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
