import React, { Component, Fragment } from 'react';
import { Link} from 'react-router-dom';

class Start extends Component{
  render(){
    return(
      <Fragment>
        <div className="container d-flex mt-5" id="Start" style={{minHeigth: "100vh"}}>
          <div className="m-auto text-center display-1">
            <h1 className="text-center mt-5 display-1" style={{ color: "#2C3240" }}>ChatUp</h1>
            <button className="btn btn-lg" style={{ backgroundColor: "#2C3240"}}>
              <Link to="/app" style={{color: "#fff", textDecoration: "none"}}>Start</Link>
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Start;
