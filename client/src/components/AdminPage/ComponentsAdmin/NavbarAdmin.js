import React from 'react';
import logo from '../../../Images/fastfood-logo.png';
import profilo from '../../../Images/profiloAdmin.png'
import {Link} from 'react-router-dom'

function NavbarAdmin(){
  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link to='/admin'>
      <a className="navbar-brand" style={{fontFamily: 'Fascinate'}} >
        <img src={logo} width="50" height="30" class="d-inline-block align-text-top"/>
      FastFood di Cosimo</a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
      </div>
      <Link to='/admin/add'>
      <a class="btn btn-primary" style={{marginRight: '1em'}}>Aggiungi un prodotto</a></Link>
      
    </div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="loginDropdown" data-bs-toggle="dropdown" >
  <img src={profilo} width="50px" height="50px" left= "1373px" top="9px" class="d-inline-block align-text-top"/>
  </button>
  <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="loginDropdown" left= "1373px">
  <Link to='/admin/transactions'><li><a class="dropdown-item" href="#">Storico Transazioni</a></li></Link>
              <li><hr className="dropdown-divider" /></li>
  <Link to='/'>
    <li><a className="dropdown-item active" href="#">Logout</a></li> </Link>

  </ul>
</div>
  </nav>
  </header>
  )
}
export default NavbarAdmin;