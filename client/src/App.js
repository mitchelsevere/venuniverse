import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Index />
      </div>
    );
  }
}

export default App;
