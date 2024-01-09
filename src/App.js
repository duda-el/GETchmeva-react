import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <Home />
        <HowItWorks/>
      </div>
    </div>
  );
}

export default App;
