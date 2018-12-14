import React, { Component } from 'react';
import Routes from '../../containers/Routes/Routes';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route to="/" component={Routes} />
      </div>
    );
  }
}

export default App;
