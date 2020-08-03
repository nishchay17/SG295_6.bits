import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import login from "./components/Login";
import logout from "./components/Logout";
import signup from "./components/Signup";
import AllSchemes from "./components/AllSchemes";
import AdminRoute from "./components/helper/AdminRoutes";
import ProtectedRoutes from "./components/helper/ProtectedRoutes";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllSchemesAdmin from "./components/admin/AllSchemesAdmin";
import SchemesUpdate from "./components/admin/SchemesUpdate";
import SchemesAdd from "./components/admin/SchemesAdd";
import Scheme from "./components/Scheme";
import HowTo from "./components/HowTo";
import ApplicableSchemes from "./components/user/ApplicableSchemes";
import ApplySchemeSingleCard from "./components/user/ApplySchemeSingleCard";
import Application from "./components/user/Application";
import "./App.css";
import ApplicationReview from "./components/admin/ApplicationReview";
import ApplicationUpdate from "./components/admin/ApplicationUpdate";
import NavMobile from "./components/NavMobile";
import Carousel from "./components/Carousel";
import NavMobileTop from "./components/NavMobileTop";
function App() {
  return (
    <Router>
      <Nav />
      <NavMobileTop />
      <Route path="/" exact component={Carousel} />
      {/* <Route path="/" exact component={HowTo} /> */}
      <Route path="/" exact component={AllSchemes} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={signup} />
      <Route path="/logout" exact component={logout} />
      <Route path="/scheme/:id" exact component={Scheme} />
      <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      <AdminRoute path="/admin/scheme/new" exact component={SchemesAdd} />
      <AdminRoute path="/admin/scheme/all" exact component={AllSchemesAdmin} />
      <AdminRoute path="/review" exact component={ApplicationReview} />
      <AdminRoute path="/review/:id" exact component={ApplicationUpdate} />
      <AdminRoute
        path="/admin/scheme/update/:id"
        exact
        component={SchemesUpdate}
      />
      <ProtectedRoutes path="/apply" exact component={ApplicableSchemes} />
      <ProtectedRoutes
        path="/apply/:id"
        exact
        component={ApplySchemeSingleCard}
      />
      <ProtectedRoutes path="/application" exact component={Application} />
      {/* <Footer /> */}
      <NavMobile />
    </Router>
  );
}

export default App;
