import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchFriendForm extends Component{
  render(){
    return(
      <Fragment>
        <form className="input-group my-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><FontAwesomeIcon icon={faSearch}/></span>
          </div>
          <input type="text" className="form-control fa-placholder" placeholder="Search..." />
        </form>
      </Fragment>
    )
  }
}

export default SearchFriendForm;
