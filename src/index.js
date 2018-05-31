import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchMessages } from './redux/actions/messages'


let newStore = store()
newStore.dispatch(fetchMessages())



ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>
  , document.getElementById('root'));
