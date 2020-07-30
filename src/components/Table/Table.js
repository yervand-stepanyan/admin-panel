import React from 'react';

import { useStore } from '../../store/use-store';
import { useStyles } from './Table.style';

function Table() {
  const classes = useStyles();
  const { selectedCollection } = useStore();

  return (
    <div className={classes.tableContainer}>{selectedCollection.length}</div>
  );
}

export default Table;
