import React from 'react';
import 'materialize-css';
import './App.css';
import Home from './components/Home';
import Devs from './components/Devs';
import Contact from './components/Contact';
import { Route, Link } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App primary">
    <Nav />
    <Route exact path='/' component={Home} />
    <Route exact path='/Devs' component={Devs} />
    <Route exact path='/Contact' component={Contact} />
  </div>
  );
}

export default App;
