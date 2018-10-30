import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Header1 extends Component{
  render(){
    return(
      <Fragment>
        <div className="container" id="Title">
          <h1 className="h1 text-center py-4 text-white">
            <Link to="/" className="mr-2" style={{color: "#c5cae9", textDecoration: "none"}}>
              <FontAwesomeIcon icon={faChevronLeft}/>
            </Link>
            ChatUp :)
          </h1>
        </div>
      </Fragment>
    )
  }
}

export default Header1;
