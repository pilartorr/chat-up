import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Title extends Component{
  render(){
    return(
      <Fragment>
        <div className="container bg-dark col-12">
          <h1 className="text-center py-3 text-white">CHAT UP!</h1>
        </div>
      </Fragment>
    )
  }
}

export default Title;
