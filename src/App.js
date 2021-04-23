import React, { Component } from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './Components/NavBar';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          {routes}
        </div>
      </HashRouter>
    )
  };
}

export default App;
