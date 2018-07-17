import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import RouterView from '../modules/router'
import ConnectGroup from '../modules/group'


class App extends Component {
   componentDidMount(){
    this.props.getInitialGoods();
   }
  render() {
    return (
      <div className="App">
           <RouterView/>
      </div>
    );
  }
}

export default withRouter(ConnectGroup(App, ['cart']));
