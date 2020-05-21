import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import ROUTES from '../../routes';
import { useStyles } from './Content.style';

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
        </Route>
        <Route path={`${ROUTES.dashboard}/:name`}>
          <Dashboard />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.home} />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
