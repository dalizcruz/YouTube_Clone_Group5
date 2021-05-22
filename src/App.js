import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import { Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
    </div>
  );
}

export default App;
