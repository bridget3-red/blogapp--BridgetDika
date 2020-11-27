import React from 'react'

import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import About from './About'
import Post from './Post'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 function App() {
  return(
    <div>
        <Navbar/>
      <Router>
        <Switch>
          <Route path='/' component= {SignUp} exact />
          <Route path='/SignIn' component={SignIn}/>
          <Route path='/Home' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Post' component={Post}/>
        </Switch>
      </Router> 
    </div>
  );
}
export default App;