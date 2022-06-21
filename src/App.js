import "./App.css";
import Countdown from "./Components/Countdown";

function App() {
  return (
    <div className="App">
      {Countdown()}
      <header className="top-right">
        <span className="first">DROP</span>
        <span className="second">ZONE</span>
      </header>
    </div>
  );
}

export default App;
