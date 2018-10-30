import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import Root from './Root';
// import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

// create the store and pass as a property the reducers that specify how the state has been changed
// const Store = createStore(reducers);

// <Provider store={ Store }> Provider add store as a property to the context "App root Component"
// and update de app when the actions have been dispatched.
ReactDOM.render( <Root />, document.getElementById('root')
);

registerServiceWorker();
