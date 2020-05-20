import React from 'react';

import { useStore } from '../../store/use-store';
import { useStyles } from './TableSection.style';

function TableSection() {
  const classes = useStyles();
  const { selectedCollection } = useStore();

  return (
    <div className={classes.tableSectionContainer}>
      <div>{selectedCollection.length}</div>
    </div>
  );
}

export default TableSection;
