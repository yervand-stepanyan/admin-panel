import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../../pages/Dashboard';
import ROUTES from '../../routes';
import { useStyles } from './Content.style';

function Content({ selectedCollections }) {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Switch>
        <Route path={ROUTES.dashboard}>
          <Dashboard selectedCollections={selectedCollections} />
        </Route>
      </Switch>
    </div>
  );
}

Content.propTypes = {
  selectedCollections: PropTypes.array.isRequired,
};

export default Content;
