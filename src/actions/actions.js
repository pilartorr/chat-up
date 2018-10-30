//constants -> type of actions
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_CURRENT_USERID = 'SET_CURRENT_USERID';

//actions-creator
export function addMessage(text) {
  return { type: ADD_MESSAGE, text}
}

export function currentUserRoomId(roomId){
  return { type: SET_CURRENT_USERID, roomId}
}
