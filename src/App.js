import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/test" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
