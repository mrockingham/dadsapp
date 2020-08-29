import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './component/NavBar'
import Header from './component/Header'
import SideBar from './component/SideBar'
import About from './component/About'
import './App.css';

import Memories from './component/Memories';
import Gallery from './component/Gallery';


function App() {
  return (
    <Router>
      <Header />
      <div className='extra-containter'>
      <NavBar />
      
      <SideBar/>
      <Switch>
        <Route exact path= '/' component={About}></Route>
       <Route exact path= '/Gallery' component ={Gallery}></Route>
        <Route exact path='/Memories' component ={Memories}></Route>
      </Switch>
      
    </div>
    <div className="App">
      
    </div>
    </Router>
  );
}

export default App;
