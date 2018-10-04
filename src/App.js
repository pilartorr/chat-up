import React, { Component, Fragment } from 'react';
import { ChatManager, TokenProvider /*subscribeToRoom*/ } from '@pusher/chatkit';

import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';
import FriendsList from './components/FriendsList';
import SearchFriendForm from './components/SearchFriendForm';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import {  instanceLocator, testToken } from './config.js';

// const userMsgs = [
//   {
//     senderId: "",
//     text: ""
//   }
//   {
//     senderId: "",
//     text: ""
//   }
// ]

const userName='pilar';
const roomId= 17560793;

class App extends Component {

  constructor(){
    super();
    this.state = {
      messages: []
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
      this.currentUser = currentUser;
      //for every user, create an id and takes the all the messages
      currentUser.subscribeToRoom({
        roomId: 17560793,
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

  sendMessage(text){
    //to send the messages to Chatkit    this.currentUser({
    this.currentUser.sendMessage({
      text,
      roomId: roomId
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
                <SendMessageForm sendMessage={this.sendMessage}/>
              </div>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
