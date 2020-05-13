import { ADD_COLLECTION, CLEAR_COLLECTIONS } from './actions';

export const initialState = [];

export function collectionsReducer(state, action) {
  switch (action.type) {
    case ADD_COLLECTION:
      return [...state, action.payload];
    case CLEAR_COLLECTIONS:
      return [];
    default:
      return state;
  }
}
