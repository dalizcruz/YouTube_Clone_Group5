import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import Video from "./Components/Video"
import "./App.css";
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route  exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/video/:id" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
