import React from 'react';
import {Link} from 'react-router-dom'
// import { Button, Card, Row, Col } from 'react-materialize';

function Nav () {
  return(
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/devs'>Devs</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}


export default Nav;