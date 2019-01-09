import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import FindUs from "./components/FindUs/FindUs";
import Shop from "./components/Shop/Shop";
import Custom from "./components/Custom/Custom";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";
import Gallery from "./components/Cart/Cart";

export default (
  <Switch>
    <Route component={AboutUs} exact path="/aboutus" />
    <Route component={FindUs} exact path="/findus" />
    <Route component={Shop} exact path="/shop" />
    <Route component={Custom} exact path="/custom" />
    <Route component={ContactUs} exact path="/contactus" />
    <Route component={Cart} exact path="/cart" />
    <Route component={Gallery} exact path="/gallery" />
    <Route component={Home} exact path="/" />
  </Switch>
);
