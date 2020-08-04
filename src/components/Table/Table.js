import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { useStore } from '../../store/use-store';
import { useStyles } from './Table.style';

function Table() {
  const classes = useStyles();
  const { selectedCollection, selectedCollectionName } = useStore();
  const keys = Object.keys(selectedCollection[0]);
  const columnNames = ['№', ...keys];
  const rowData = selectedCollection.map((item, index) => [
    index + 1,
    ...Object.values(item),
  ]);

  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableHeaderContainer}>
        <div className={classes.collectionNameContainer}>
          <Typography variant="h5">{selectedCollectionName}</Typography>
        </div>
      </div>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              {columnNames.map((name) => (
                <th className={classes.th} key={name}>
                  <Typography variant="h6">{name}</Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowData.map((row) => (
              <tr className={classes.tr} key={row[0]}>
                {row.map((data, index) => (
                  <td className={classes.td} key={`${data + index}`}>
                    <Tooltip title={data}>
                      <Typography variant="body1">
                        {typeof data !== 'object' ? data : typeof data}
                      </Typography>
                    </Tooltip>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
