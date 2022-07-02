import { Component } from 'react';
import './Card.css';
class Card extends Component {
    render() {
        return (
            <div className="col">

                <div className="card" style={{ width: '18rem' }}>
    
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Prezzo: € {this.props.prezzo}</li>
                    </ul>
                    <div className="card-body">
                        <button className='btn' onClick={this.props.onIncrement}>Incrementa <span className='badge-light'>{this.props.quantità}</span></button>
                        <button className='btn btn-outline-danger' onClick={this.props.onDecrement} disabled={this.props.quantità < 1}>Elimina</button>
                        <span className='badge badge-light'></span>
                        <button className='button-card' onClick={this.props.onAdd}>Aggiungi</button>
                    </div>
                </div>

            </div>
        );
    }
}
export default Card
