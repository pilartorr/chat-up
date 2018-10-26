import React from 'react';
import ReactDOM from 'react-dom';
import { NewMessage, MessagesState } from './containers';

const Root = () =>
  <div className="root">
    <NewMessage />
    <MessagesState />
  </div>
export default Root;
