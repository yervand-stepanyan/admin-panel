import React from 'react';

import { CARD_COLORS } from '../../globals/constants';
import CollectionCard from '../CollectionCard';
import { useStore } from '../../store/use-store';
import { useStyles } from './CollectionList.style';

function CollectionList() {
  const classes = useStyles();
  const { stateCollections } = useStore();

  return (
    <div className={classes.collectionListContainer}>
      {stateCollections.map(({ name, collection }, index) => (
        <CollectionCard
          collection={collection}
          collectionName={name}
          color={
            CARD_COLORS[index]
              ? CARD_COLORS[index]
              : CARD_COLORS[index - CARD_COLORS.length]
          }
          key={name}
        />
      ))}
    </div>
  );
}

export default CollectionList;
