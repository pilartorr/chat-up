import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
// import { faTrashAlt, faSmile, faCameraRetro, faMicrophone} from '@fortawesome/free-solid-svg-icons';

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
    e.preventDefault();
    this.props.sendMessage(this.state.message)
    //calling the sendMessage prop and passing in this.state.message as a parameter
    this.setState({
      message: ''
    })
  }

  render(){
    return(
      <Fragment>
        <form className="input-group my-3" onSubmit={this.handleSubmit}>
          {/* <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faSmile}/></span>
          </div> */}
          {/* <div className="input-group-prepend">
            <button className="input-group-text"
                    onClick={this.props.onDeleteMessage}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
          </div> */}
          <input type="text" className="form-control" placeholder="Type your message..." onChange={this.handleChange} value={this.state.message}/>
          <div className="input-group-prepend">
            <button className="input-group-text"
                    type="submit">
                    <FontAwesomeIcon icon={faShareSquare}/>
            </button>
          </div>
          {/* <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faCameraRetro}/></span>
          </div>
          <div className="input-group-prepend">
            <span className="input-group-text"> <FontAwesomeIcon icon={faMicrophone}/></span>
          </div> */}
        </form>
      </Fragment>
    )
  }
}

export default SendMessageForm;
