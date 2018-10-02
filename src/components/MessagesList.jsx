import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


class MessagesList extends Component{
  render(){
    return(
      <Fragment>
        <div className="container" id="MessagesList">
          <ul className="message-list">
            {this.props.messages.map(message => {
              return(
                <li key={message.id}>
                  <div>{message.senderId}</div>
                  <div>{message.text}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default MessagesList;
