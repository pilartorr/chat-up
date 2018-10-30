import React, { Component, Fragment } from 'react';

class MessagesList extends Component{

  render(){

    return(
      <Fragment>
        <div className="container my-4" id="MessagesList" style={{ backgroundColor: 'transparent' }}>

          <ul className="message-list mr-5">
            {this.props.messages.map((message, id) => {
              return(
                <li key={id} style={{ listStyleType: "none"}}>
                  {/* <div style={{ color: "#bec7d8", paddingLeft: "5px"}}>
                    {message.senderId}
                  </div> */}
                  <div className="speech-bubble my-3 pl-3">
                    {message.text}
                  </div>
                  {/* <span onClick={this.props.onDeleteMessage}></span> */}
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
