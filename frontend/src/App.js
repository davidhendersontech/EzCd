import './styles/App.css'
import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './containers/navbar'
import CdContainer from './containers/cdcontainer'
import Home from './components/home'
import Login from './containers/login'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <Router>
      <div className="App">
      <Navbar isLoggedIn = {loggedIn}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <CdContainer />
          </Route>
          <Route exact path="/login">
            <Login isLoggedIn = {loggedIn} setLoggedIn={setLoggedIn} /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
