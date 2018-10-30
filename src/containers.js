//connect UI components to the store
import { connect } from 'react-redux';

// View Components
import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';

// Actions to moficate the state
import { addMessage, currentUserRoomId } from 'actions';

//connect NewMessage-container with the UI SendMessageForm Component throught dispatch()
export const addMessageToSendMessageForm = connect(
  state =>
    ({
      messages: [...state.messages]
    }),
  dispatch =>
    ({
      onAddMessage(text){
        dispatch(addMessage(text))
      }
      onAddRoomId(roomId){
        dispatch(currentUserRoomId(roomId))
      }
    })
)(SendMessageForm)
