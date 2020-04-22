import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';
import connect from 'redux-connect-decorator'
import Registration from './components/register'
import Login from './components/login'
import Home from './components/home'
import AppNotFound from './components/notFound'
import CustomerServices from './components/customerServices'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
  };
})
class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  render() {
    const { user } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path='/contacts'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Registration/>
          </Route>
          <Route path='/customerServices'>
            <CustomerServices />
          </Route>
          <Route component={AppNotFound}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
