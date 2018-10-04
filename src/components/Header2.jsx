import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';

class Header2 extends Component{
  render(){
    return(
      <Fragment>
        <div className="container py-3" id="Title">
          <div className="row">

            <div className="col">
              <FontAwesomeIcon icon={faAngleLeft} className="text-white mt-3 ml-3"/>
              <img src="portrait.jpg" alt="user-portrait" className="portrait ml-5"/>
            </div>

            <p className="col mt-3 mr-5 text-white text-center">User Name</p>

            <div className="col mt-3 mr-0">
              <FontAwesomeIcon icon={faPhone} className="text-white mr-5"/>
              <FontAwesomeIcon icon={faVideo} className="text-white p-0"/>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Header2;
