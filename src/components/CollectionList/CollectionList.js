import React from 'react';

import { CARD_COLORS } from '../../globals/constants';
import CollectionCard from '../CollectionCard';
import TableSection from '../TableSection';
import { useStore } from '../../store/use-store';
import { useStyles } from './CollectionList.style';

function CollectionList() {
  const classes = useStyles();
  const { selectedCollection, stateCollections } = useStore();

  return (
    <div className={classes.collectionListContainer}>
      <div className={classes.collectionsWrapper}>
        <div className={classes.cardsWrapper}>
          {stateCollections.map(({ name, collection }, index) => (
            <CollectionCard
              collectionLength={collection.length}
              collectionName={name}
              color={CARD_COLORS[index] ? CARD_COLORS[index] : CARD_COLORS[index - CARD_COLORS.length]}
              key={name}
            />
          ))}
        </div>
      </div>
      {selectedCollection.length ? <TableSection /> : null}
    </div>
  );
}

export default CollectionList;
