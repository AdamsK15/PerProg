import React, { Component } from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './Components/NavBar';
// import apiTest from './Components/Topics/apiTest'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          {/* {data.map(TopicsList)} */}
          {routes}
        </div>
      </HashRouter>
    )
  };
}

export default App;
