import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSmile, faCameraRetro, faMicrophone} from '@fortawesome/free-solid-svg-icons';


class SendMessageForm extends Component{
  constructor(){
    super()
    this.state = {
      message: ''
    }
    //.bind change the value of this
    //no we have access to the this keyword inside of it
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    //to update the state to whatever the user types into the input field
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e){
    //to take the messages
    e.preventDefault();
    this.props.sendMessage(this.state.message)
    //calling the sendMessage prop and passing in this.state.message as a parameter
    this.setState({
      message: ''
    })
  }

  sendMessage(text){
    //to send the messages to Chatkit
    this.currentUser({
      text,
      roomId: roomId
    })
  }

  render(){
    return(
      <Fragment>
        <form className="input-group my-3" onSubmit={this.handleSubmit}>
          <div class="input-group-prepend">
            <span class="input-group-text"> <FontAwesomeIcon icon={faSmile}/></span>
          </div>
          <input type="text" class="form-control" placeholder="Type your message..." onChange={this.handleChange} value={this.state.message}/>
          <div class="input-group-prepend">
            <span class="input-group-text"> <FontAwesomeIcon icon={faCameraRetro}/></span>
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text"> <FontAwesomeIcon icon={faMicrophone}/></span>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default SendMessageForm;
