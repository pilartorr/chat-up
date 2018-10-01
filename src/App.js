import React, { Component, Fragment } from 'react';

import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';
import FriendsList from './components/FriendsList';
import SearchFriendForm from './components/SearchFriendForm';
import Header1 from './components/Header1';
import Header2 from './components/Header2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';

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

class App extends Component {

  constructor(){
    super();
    this.state = {
      messages: userMsgs
    }
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
