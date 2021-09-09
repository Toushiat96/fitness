import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gyms from "./Component/Gyms/Gyms";
import Payment from "./Component/Payment/Payment";
import Trainer from "./Component/Trainer/Trainer";
import Login from "./Component/Login/Login";
import Affiliate from "./Component/Affiliate/Affiliate";
import Signup from "./Component/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/gym">
          <Gyms></Gyms>
        </Route>
        <Route path="/price">
          <Payment></Payment>
        </Route>
        <Route path="/trainer">
          <Trainer></Trainer>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/affiliates">
        <Affiliate></Affiliate>
        </Route>
        <Route path="/signup"> 
        <Signup></Signup>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
