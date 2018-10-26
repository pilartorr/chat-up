//connect UI components to the store
import { connect } from 'react-redux';
import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';

// actions to moficate the state
import { addMessage, deleteMessage, deleteHistory } from 'actions';

//connect NewMessage-container with the UI SendMessageForm Component throught dispatch()
export const MessagesState = connect(
  state =>
    ({
      messages: [...state.messages]
    }),
  dispatch =>
    ({
      onNewMessage(text, roomId){
        dispatch(addMessage(text, roomId))
      },
      onDeleteHistory(history){
        dispatch(deleteHistory(history))
      }
    })
)(SendMessageForm)

//connect MessagesState-container with the UI MessagesList Component throught dispatch()
export const DeleteMessage = connect (
  //the first argument of connect() is a function that maps state variables to property.
  state =>
    ({
      messages: [...state.messages]
    }),
  //the second argument of connect is a function that dispatches actions when events are invoked
  dispatch =>
    ({
      onDeleteMessage(id){
        dispatch(deleteMessage(id))
      }
    })
)(MessagesList)
