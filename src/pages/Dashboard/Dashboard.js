import React from 'react';

import CollectionList from '../../components/CollectionList';
import Loader from '../../components/Loader';
import { useStore } from '../../store/use-store';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const classes = useStyles();
  const { loadingCollections } = useStore();

  return (
    <div className={classes.dashboardContainer}>
      {loadingCollections ? <Loader /> : <CollectionList />}
    </div>
  );
}

export default Dashboard;
