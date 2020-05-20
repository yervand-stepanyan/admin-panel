import React from 'react';

import CollectionList from '../../components/CollectionList';
import Loader from '../../components/Loader';
import TableSection from '../../components/TableSection';
import { useStore } from '../../store/use-store';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const classes = useStyles();
  const { loadingCollections, selectedCollection } = useStore();

  return (
    <div className={classes.dashboardContainer}>
      {loadingCollections ? (
        <Loader />
      ) : (
        <div>
          <CollectionList />
          {selectedCollection.length ? <TableSection /> : null}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
