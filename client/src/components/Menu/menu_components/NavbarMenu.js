import React from 'react';
import logo from '../../../Images/fastfood-logo.png'
import profilo from '../../../Images/profilo.png'
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to='/'>
            <a className="navbar-brand" style={{ fontFamily: 'Fascinate' }} >
              <img src={logo} width="50" height="30" className="d-inline-block align-text-top" />
              FastFood di Cosimo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </Link>
          <div className="dropdown">
            <button className="dropdown-toggle" type="button" id="loginDropdown" data-bs-toggle="dropdown" >
              <img src={profilo} width="50px" height="50px" left="1373px" top="9px" className="d-inline-block align-text-top" />
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="loginDropdown" left="1373px">
              

              <Link to='/orders'><li><a className="dropdown-item" href="#">Storico Ordini</a></li></Link>
              <li><hr className="dropdown-divider" /></li>
              <li><Link to='/admin'><a className="dropdown-item" >Login come Admin</a></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default NavbarMenu;