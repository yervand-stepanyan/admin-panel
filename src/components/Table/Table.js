import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { useStore } from '../../store/use-store';
import { useStyles } from './Table.style';

function Table() {
  const classes = useStyles();
  const {
    columnNames,
    selectedCollection,
    selectedCollectionColor,
    selectedCollectionName,
    tableData,
  } = useStore();

  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableHeaderContainer}>
        <div className={classes.collectionNameContainer}>
          <Typography variant="h5">
            {`${selectedCollectionName}(${selectedCollection.length})`}
          </Typography>
        </div>
      </div>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              {columnNames.map((name) => (
                <th
                  className={`${classes.th} ${classes[selectedCollectionColor]}`}
                  key={name}
                >
                  <Typography variant="h6">{name}</Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr className={classes.tr} key={row[0]}>
                {row.map((data, index) => (
                  <td className={classes.td} key={`${data + index}`}>
                    {typeof data !== 'object' ? (
                      <Tooltip title={data}>
                        <Typography variant="body1">{data}</Typography>
                      </Tooltip>
                    ) : (
                      <Tooltip title={columnNames[index]}>
                        <Typography variant="body1">
                          {`${columnNames[index]}(${columnNames.length})`}
                        </Typography>
                      </Tooltip>
                    )}
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
