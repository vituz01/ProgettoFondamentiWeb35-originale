import { Component } from 'react'
import {Link} from 'react-router-dom'

class CardHome extends Component{
    render(){
    return(
        <div className="col">
      <div className="card" style= {{width: '18rem', marginLeft: "3rem"}}>
        <div className="card-body">
          <h5 className="card-title"> {this.props.card.nome}</h5>
          <p className="card-text"> {this.props.card.ingredienti}</p>
          <Link to='/menu'>
          <a href="#" class="btn btn-primary">Ordina subito</a>
          </Link>
        </div>
      </div>
    </div>
    )}
}

export default CardHome;