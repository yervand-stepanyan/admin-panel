import { ADD_COLLECTIONS, CLEAR_COLLECTIONS } from './actions';

export const initialState = [];

export function collectionsReducer(state, action) {
  switch (action.type) {
    case ADD_COLLECTIONS:
      return action.payload;
    case CLEAR_COLLECTIONS:
      return [];
    default:
      return state;
  }
}
