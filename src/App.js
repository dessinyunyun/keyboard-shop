import logo from "./logo.svg";
import "./App.css";
import Ui from "./components/DataMapping";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ui />
      </header>
    </div>
  );
}

export default App;
