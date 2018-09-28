import React, { Component, Fragment } from 'react';

import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';
import FriendsList from './components/FriendsList';
import SearchFriendForm from './components/SearchFriendForm';
import Title from './components/Title';


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app container">
          <div className="m-auto">

            <Title />

            <div className="row">
              <div className="col-4 bg-dark" style={{"height": "60vh"}}>
                <FriendsList />
              </div>
              <div className="col-8 bg-light" style={{"height": "60vh"}}>
                <MessagesList />
              </div>
            </div>

            <div className="row">
              <div className="col-4 bg-secondary">
                <SearchFriendForm />
              </div>
              <div className="col-8">
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
