import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Detail from "../containers/BlogDetails";

// Admin Routes
import Auth from "../containers/Admin/Auth";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Auth} />
    </Switch>
  );
};

export default routes;
