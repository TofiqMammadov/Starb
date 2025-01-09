import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Auth from "./pages/Auth";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit/:productId" component={Edit} />
        <Route exact path="/products/:productId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
