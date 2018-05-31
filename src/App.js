import React, { Component } from 'react';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import './App.css';

class App extends Component {

  
  render() {

    return (

      <div className="App">
          <div className="container">
            <Toolbar />
            <MessageList />
          </div>
      </div>
    );
  }
}

export default App;
