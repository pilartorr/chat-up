import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Header1 extends Component{
  render(){
    return(
      <Fragment>
        <div className="container" id="Title">
          <p className="lead text-center my-4 text-white">CHAT UP!</p>
        </div>
      </Fragment>
    )
  }
}

export default Header1;
