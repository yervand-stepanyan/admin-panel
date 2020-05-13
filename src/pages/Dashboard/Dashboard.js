import React from 'react';

import CollectionList from '../../components/CollectionList';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <CollectionList />
    </div>
  );
}

export default Dashboard;
