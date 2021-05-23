import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import "./App.css";
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route  path="/" component={Home} />
      <Route path="/about" component={About} />

    </div>
  );
}

export default App;
