import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import RouterView from '../modules/router'
class App extends Component {
   
  render() {
    return (
      <div className="App">
           <RouterView/>
      </div>
    );
  }
}

export default App;
