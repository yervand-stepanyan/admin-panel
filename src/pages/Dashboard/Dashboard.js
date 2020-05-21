import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CollectionList from '../../components/CollectionList';
import Loader from '../../components/Loader';
import { useStore } from '../../store/use-store';
import { useStyles } from './Dashboard.style';

function Dashboard() {
  const classes = useStyles();
  const {
    handleSelectProject,
    loadingCollections,
    selectedProject,
  } = useStore();
  const { name } = useParams();

  useEffect(() => {
    if (!selectedProject) {
      handleSelectProject(name);
    }
  }, []);

  return (
    <div className={classes.dashboardContainer}>
      {loadingCollections ? <Loader /> : <CollectionList />}
    </div>
  );
}

export default Dashboard;
