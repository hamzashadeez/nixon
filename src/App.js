import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Flash from './Screens/Flash'
import Admin from './Screens/Admin'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/test" component={Home} />
        <Route exact path='/loading' component={Flash} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
