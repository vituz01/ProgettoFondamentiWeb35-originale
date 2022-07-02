import React from 'react';
import logo from '../../../Images/fastfood-logo.png';
import profilo from '../../../Images/profilo.png'
import {Link} from 'react-router-dom'

function Navbar(){
  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to='/'>
      <a className="navbar-brand" style={{fontFamily: 'Fascinate'}} >
        <img src={logo} width="50" height="30" class="d-inline-block align-text-top"/>
      FastFood di Cosimo</a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#menu">Menù</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Chi Siamo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Contattaci</a>
          </li>
        </ul>
      </div>
      <Link to='/menu'>
      <a class="btn btn-primary" style={{marginRight: '1em'}}>Ordina Subito!</a></Link>
     
      
    </div>
    <div class="dropdown">
  <button class="dropdown-toggle" type="button" id="loginDropdown" data-bs-toggle="dropdown" >
  <img src={profilo} width="50px" height="50px" left= "1373px" top="9px" class="d-inline-block align-text-top"/>
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="loginDropdown" left= "1373px">
  
    
    <Link to='/orders'><li><a class="dropdown-item" href="#">Storico Ordini</a></li></Link>
    <li><hr class="dropdown-divider"/></li>
    <li><Link to='/admin'><a class="dropdown-item" >Login come Admin</a></Link></li>
  </ul>
</div>
  </nav>
  </header>
  )
}
export default Navbar;