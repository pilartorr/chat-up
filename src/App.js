import React, { Component, Fragment } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit/react-native';

import Header1 from './components/Header1';
import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';

// import Header2 from './components/Header2';
// import FriendsList from './components/FriendsList';
// import SearchFriendForm from './components/SearchFriendForm';

import {  instanceLocator, testToken } from './config.js';

const userName='pilar';
const roomId= 17560793;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
    //bind the context of the sendMessage function to this component
    this.sendMessage = this.sendMessage.bind(this);
    // this.deleteMessage = this.deleteMessage.bind(this);
    // this.deleteHistory = this.deleteHistory.bind(this);
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

      this.currentUser = currentUser;
    })
  }

  sendMessage(text){
    //to send the messages to Chatkit
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    })
  }

  // deleteMessage(id){
  //   //to send the messages to Chatkit
  //   this.currentUser.deleteMessage({
  //     roomId: roomId
  //   })
  // }

  // deleteHistory(history){
  //   //to send the messages to Chatkit
  //   this.currentUser.sendMessage({
  //     history,
  //     roomId: roomId
  //   })
  // }

  render() {

    const { sendMessage } = this;
    // const { sendMessage, deleteMessage, deleteHistory } = this;
    const { messages } = this.state;

    return (
      <Fragment>
        <div className="app container mt-5" style={{ maxWidth: "30vw", minHeigth: "100vh" }}>
          <div className="m-auto">

            <div className="row" id="Headers">
              <div className="col-12"><Header1/></div>
              {/* <div className="col-8"><Header2 /></div> */}
            </div>

            <div className="row">
              {/* <div className="col-4" id="FriendsList" style={{"height": "60vh"}}>
                <FriendsList />
              </div> */}
              <div className="col-12" id="MessagesList" style={{"height": "60vh", overflow: "scroll"}}>
                <MessagesList messages={messages}
                              // deleteMessage={deleteMessage}
                              // deleteHistory={deleteHistory}
                />
              </div>
            </div>

            <div className="row">
              {/* <div className="col-4" id="SearchFriendForm">
                <SearchFriendForm />
              </div> */}
              <div className="col-12" id="SendMessageForm">
                <SendMessageForm sendMessage={sendMessage}/>
              </div>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
