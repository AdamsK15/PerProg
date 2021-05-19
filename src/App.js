import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './Components/NavBar';
import { connect } from 'react-redux';
import { updateUser } from './redux/reducers/userReducer';
// import apiTest from './Components/Topics/apiTest'

class App extends Component {

  componentDidMount() {
    axios
      .get('/auth/user')
      .then(res => {
        this.props.updateUser(res.data)
      })
  }

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

export default connect(null, { updateUser })(App);
