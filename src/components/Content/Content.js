import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import ROUTES from '../../routes';
import { useStyles } from './Content.style';

function Content({ selectedProject }) {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
        </Route>
        <Route path={`${ROUTES.dashboard}/${selectedProject}`}>
          <Dashboard />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.home} />
        </Route>
      </Switch>
    </div>
  );
}

Content.propTypes = {
  selectedProject: PropTypes.string.isRequired,
};

export default Content;
