import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Results from "./components/Results";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/results" exact>
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}
