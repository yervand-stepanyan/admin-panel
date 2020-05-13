import React from 'react';
import PropTypes from 'prop-types';

import { CARD_COLORS } from '../../globals/constants';
import CollectionCard from '../CollectionCard';
import { useStyles } from './CollectionList.style';

function CollectionList({ selectedCollections }) {
  const classes = useStyles();

  return (
    <div className={classes.collectionListContainer}>
      {selectedCollections.map((collection, index) => (
        <CollectionCard
          collection={collection}
          color={
            CARD_COLORS[index]
              ? CARD_COLORS[index]
              : CARD_COLORS[index - CARD_COLORS.length]
          }
          key={collection}
        />
      ))}
    </div>
  );
}

CollectionList.propTypes = {
  selectedCollections: PropTypes.array.isRequired,
};

export default CollectionList;
