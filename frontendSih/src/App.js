import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import login from "./components/Login";
import logout from "./components/Logout";
import signup from "./components/Signup";
import AllSchemes from "./components/AllSchemes";
import AdminRoute from "./components/helper/AdminRoutes";
import AdminDashboard from "./components/admin/AdminDashboard";
import SchemesAdd from "./components/admin/SchemesAdd";
import Scheme from "./components/Scheme";
import HowTo from "./components/HowTo";
import "./App.css";
import NavMobile from "./components/NavMobile";

function App() {
  return (
    <Router>
      <Nav />
      {/* <Route path="/" exact component={Carousel} /> */}
      {/* <Route path="/" exact component={HowTo} /> */}
      <Route path="/" exact component={AllSchemes} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={signup} />
      <Route path="/logout" exact component={logout} />
      <Route path="/scheme/:id" exact component={Scheme} />
      <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      <AdminRoute path="/admin/scheme/new" exact component={SchemesAdd} />
      {/* <Footer /> */}
      <NavMobile />
    </Router>
  );
}

export default App;
