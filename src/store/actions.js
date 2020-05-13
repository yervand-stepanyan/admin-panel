export const ADD_COLLECTION = 'ADD_COLLECTION';
export const CLEAR_COLLECTIONS = 'CLEAR_COLLECTIONS';

export function addCollection(collection) {
  return { type: ADD_COLLECTION, payload: collection };
}

export function clearCollections() {
  return { type: CLEAR_COLLECTIONS };
}
