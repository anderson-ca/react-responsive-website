import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
