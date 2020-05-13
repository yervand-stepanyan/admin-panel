import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import ROUTES from '../../routes';
import { useStyles } from './Content.style';

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Switch>
        <Route path={ROUTES.dashboard}>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
