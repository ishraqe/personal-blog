import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Detail from "../containers/BlogDetails";

// Admin Routes
import Auth from "../containers/Admin/Auth";
import AdminHome from '../containers/Admin/Home/Home';

const Dashboard = ({ match }) => { //assume main component.
  return (<div>
      <Route path={`${match.url}`} exact component={AdminHome} ></Route>
      {/* <Route path={`${match.url}tickets`} exact component={ticketsPage}></Route>
      <Route path={`${match.url}shows`} exact component={ShowsPage}></Route> */}
  </div>)
};


const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Auth} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  );
};

export default routes;
