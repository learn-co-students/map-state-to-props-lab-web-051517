import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { UsersWithProps } from './components/Users'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <UsersWithProps/>
      </div>
    );
  }
}

export default App;
