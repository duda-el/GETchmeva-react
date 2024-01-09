import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
        <Navbar />
      <div>
        <Home />
      </div>
      <div className="z--1">
        <HowItWorks />
      </div>
    </div>

  );
}

export default App;
