//constants -> type of actions
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DELETE_HISTORY = 'DELETE_HISTORY';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//const -> show filter
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}

//actions-creator
export function addMessage(text, roomId) {
  return { type: ADD_MESSAGE, text, roomId }
}

export function deleteMessage(id) {
  return { type: DELETE_HISTORY, id }
}

export function deleteHistory() {
  return { type: DELETE_HISTORY }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
