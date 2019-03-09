import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello name="孫悟飯"/>
        </header>
      </div>
    );
  }
}

export default App;
