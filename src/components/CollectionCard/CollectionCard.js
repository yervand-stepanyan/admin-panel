import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './CollectionCard.style';

function CollectionCard({ collection, color }) {
  const classes = useStyles();

  return (
    <div className={classes.collectionCardContainer}>
      <Card className={`${classes.card} ${classes[color]}`}>
        <CardContent>
          <Typography variant="h5">{collection}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

CollectionCard.propTypes = {
  collection: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CollectionCard;
