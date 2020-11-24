/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import {User} from './components/User'
import {About} from './components/About'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>

      <div className="container p-4">
        <Switch>
          <Route path="/About" component={About}></Route>
          <Route path="/" component={User}></Route>
        </Switch>
      </div> 
       
    </Router>
  );
}

export default App;
