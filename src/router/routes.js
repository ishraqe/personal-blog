import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Detail from "../containers/BlogDetails";
const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
    </Switch>
  );
};

export default routes;
