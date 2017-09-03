import React, { Component } from 'react';
import './App.css';

import Inputs from './Inputs';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Inputs />


      </div>
    );
  }
}

export default App;
