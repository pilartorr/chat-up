import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


class SendMessageForm extends Component{
  render(){
    return(
      <Fragment>
        <form className="bg-dark m-0">
          <div className="form-group">
            <input className="form-control align-center" id="disabledInput" type="text" placeholder="write here..." />
          </div>
        </form>
      </Fragment>
    )
  }
}

export default SendMessageForm;
