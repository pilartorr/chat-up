import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchFriendForm extends Component{
  render(){
    return(
        <form className="input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><FontAwesomeIcon icon={faSearch}/></span>
          </div>
          <input type="text" className="form-control fa-placholder" placeholder="Search..." />
        </form>
    )
  }
}

export default SearchFriendForm;
