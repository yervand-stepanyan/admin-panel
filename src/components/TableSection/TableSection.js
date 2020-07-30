import React from 'react';

import Table from '../Table';
import { useStyles } from './TableSection.style';

function TableSection() {
  const classes = useStyles();

  return (
    <div className={classes.tableSectionContainer}>
      <Table />
    </div>
  );
}

export default TableSection;
