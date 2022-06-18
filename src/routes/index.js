import React from "react";
import { useSelector } from "react-redux";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Setting from "../components/Setting";
import { Route, Switch } from "react-router-dom";
import SelectSeat from "../components/SelectSeat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/setting" component={Setting} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/selectseat" component={SelectSeat} />
      {/* <Route exact path="/accounts/new" component={SignUp} /> */}
    </Switch>
  );
};
export default Routes;
