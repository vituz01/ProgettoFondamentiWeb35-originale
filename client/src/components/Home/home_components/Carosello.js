import viewFastFood from '../../../Images/Viewfastfood.jpeg';
import vista2 from '../../../Images/Vista2.jpg';
import asporto from '../../../Images/Asporto.jpg';


import { Component } from 'react';
import {Link} from 'react-router-dom'

class Carosello extends Component{
    
    render(){
        return(
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" style={{width: '100%', height: '370px',left: '0px'}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000" style={{width: '100%', height: '370px',left: '0px'}}>
            <img src={viewFastFood} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Benvenuto!</h5>
              <p>Dai un occhiata al nostro sito!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" style={{width: '100%', height: '370px',left: '0px'}}>
            <img src={vista2} className="d-block w-100"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Mangia in negozio!</h5>
              <p>Ordina e accomodati al nostro punto più vicino!</p>
            </div>
          </div>
      
          <div className="carousel-item" style={{width: '100%', height: '370px',left: '0px'}}>
          <Link to='/menu'>
            <img src={asporto} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
            
              <h5>Ordina d'asporto</h5>
              <p>Ordina direttamente dal nostro sito e al resto ci pensiamo noi!</p>
              
            </div>
            </Link>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    )}
}

export default Carosello;