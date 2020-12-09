import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" eaxct component={Home} />
      </Switch>
    </div>
  );
}

export default App;
