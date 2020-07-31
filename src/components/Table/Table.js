import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStore } from '../../store/use-store';
import { useStyles } from './Table.style';

function Table() {
  const classes = useStyles();
  const { selectedCollection, selectedCollectionName } = useStore();
  const keys = Object.keys(selectedCollection[0]);
  const columnNames = ['№', ...keys];

  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableHeaderContainer}>
        <div className={classes.collectionNameContainer}>
          <Typography variant="h5" gutterBottom>
            {selectedCollectionName}
          </Typography>
        </div>
      </div>
      <div className={classes.tableWrapper}>
        <div className={classes.columnContainer}>
          {columnNames.map((name) => (
            <div key={name}>
              <Typography variant="h6" gutterBottom>
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
