import React, { Component, Fragment } from 'react';

import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';
import FriendsList from './components/FriendsList';
import SearchFriendForm from './components/SearchFriendForm';
import Header1 from './components/Header1';
import Header2 from './components/Header2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ChatManager, TokenProvider, subscribeToRoom } from '@pusher/chatkit';

const userMsgs = [
  {
    senderId: "pilar",
    text: "hi, Itamar"
  },
  {
    senderId: "Itamar",
    text: "hi, how are you?"
  }
]

//to interact with this instance of Chatkit.
const instanceLocator='v1:us1:764a3912-2967-4e7d-8248-09bcc258f269';

//Test Token Provider requests should be sent to
const testToken='https://us1.pusherplatform.io/services/chatkit_token_provider/v1/:instance_id';

const userName='pilar';
const roomId='17560793';

class App extends Component {

  constructor(){
    super();
    this.state = {
      messages: userMsgs
    }
  }

  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: userName,
      tokenProvider: new TokenProvider({
        url: testToken
      })
    })

    chatManager.connect().then(currentUser => {
      //for every user, create an id and takes the all the messages
      currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
              //create a new array with all the messages and add a new message
            })
          }
        }
      })
    })
  }



  render() {
    return (
      <Fragment>
        <div className="app container mt-5">
          <div className="m-auto">

            <div className="row" id="Headers">
              <div className="col-4"><Header1/></div>
              <div className="col-8"><Header2 /></div>
            </div>

            <div className="row">
              <div className="col-4" id="FriendsList" style={{"height": "60vh"}}>
                <FriendsList />
              </div>
              <div className="col-8" id="MessagesList" style={{"height": "60vh"}}>
                <MessagesList messages={this.state.messages}/>
              </div>
            </div>

            <div className="row">
              <div className="col-4" id="SearchFriendForm">
                <SearchFriendForm />
              </div>
              <div className="col-8" id="SendMessageForm">
                <SendMessageForm />
              </div>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
