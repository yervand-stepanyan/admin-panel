import React from 'react';
import PropTypes from 'prop-types';

import CollectionList from '../../components/CollectionList';
import { useStyles } from './Dashboard.style';

function Dashboard({ selectedCollections }) {
  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <CollectionList selectedCollections={selectedCollections} />
    </div>
  );
}

Dashboard.propTypes = {
  selectedCollections: PropTypes.array.isRequired,
};

export default Dashboard;
