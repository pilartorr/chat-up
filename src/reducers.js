import { combineReducers } from 'redux';
import { ADD_MESSAGE, DELETE_HISTORY, DELETE_MESSAGE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters

//store the selected filter to pass the request: ADD_MESSAGE, DELETE_HISTORY or DELETE_MESSAGE
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

//store all the differents cases that can change the state
function actions(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          text: action.text,
          id: action.id
        }
      ]
    //delete the message(id) that has been selected to be deleted
    case DELETE_MESSAGE:
      return state.filter( message =>
        message.id !== action.id
      )
    case DELETE_HISTORY:
      return []
    default:
      return state
  }
}

const reducers = combineReducers({
  visibilityFilter,
  actions
})

export default reducers;
