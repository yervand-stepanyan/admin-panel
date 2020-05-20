import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Typography from '@material-ui/core/Typography';

import numberWithCommas from '../../helpers/numberWithCommas';
import { useStore } from '../../store/use-store';
import { useStyles } from './CollectionCard.style';

library.add(faTable);

function CollectionCard({ collectionLength, collectionName, color }) {
  const classes = useStyles();
  const numberOfRecords = numberWithCommas(collectionLength);
  const { handleCollectionClick } = useStore();

  return (
    <div className={classes.collectionCardContainer}>
      <Card
        className={`${classes.card} ${classes[color]}`}
        onClick={() => handleCollectionClick(collectionName)}
      >
        <CardContent className={classes.cardContent}>
          <div>
            <FontAwesomeIcon icon={['fas', 'table']} size="4x" opacity={0.4} />
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h5">{numberOfRecords}</Typography>
            <Typography variant="subtitle1">{collectionName}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

CollectionCard.propTypes = {
  collectionLength: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CollectionCard;
