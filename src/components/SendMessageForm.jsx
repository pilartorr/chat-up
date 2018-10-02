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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    return(
      <Fragment>
        <form className="input-group my-3">
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
