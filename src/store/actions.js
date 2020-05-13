export const ADD_COLLECTIONS = 'ADD_COLLECTIONS';
export const CLEAR_COLLECTIONS = 'CLEAR_COLLECTIONS';

export function addCollections(collections) {
  return { type: ADD_COLLECTIONS, payload: collections };
}

export function clearCollections() {
  return { type: CLEAR_COLLECTIONS };
}
