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
            {tableData.map((row) => {
              return (
                <tr className={classes.tr} key={row[0]}>
                  {row.map((data, index) => {
                    if (typeof data !== 'object') {
                      return (
                        <td key={`${data + index}`}>
                          <Tooltip title={data}>
                            <div className={classes.dataCell}>
                              <Typography variant="body1">{data}</Typography>
                            </div>
                          </Tooltip>
                        </td>
                      );
                    }

                    return (
                      <td key={`${data + index}`}>
                        <Tooltip title={columnNames[index]}>
                          <div
                            className={`${classes.dataCell} ${classes.clickableDataCell}`}
                          >
                            <Typography variant="body1">
                              {Array.isArray(data)
                                ? `${columnNames[index]}(${data.length})`
                                : `${columnNames[index]}(${typeof data})`}
                            </Typography>
                          </div>
                        </Tooltip>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
