
import Carosello from "./home_components/Carosello";
import CardMenu from "./home_components/CardHome";
import { Component } from "react";
import Navbar from "./home_components/Navbar";

import mappa from '../../Images/mappa.png'
import person from '../../Images/person.png'
import pin from '../../Images/pin.png'
import items from "../services/items";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleGet = this.handleGet.bind(this);
  }


  componentDidMount() {
    this.handleGet();
  }

  handleGet() {
    items.getAll()
      .then(data => {
        this.setState({
          items: [...data]
        }
        )
      })
  }





  render() {
    return (
      <>
        <Navbar />
        <Carosello />
        <div id='introduzione' style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'K2D, sans-serif' }}>
            <h1 style={{ fontFamily: 'Lobster', marginTop: '1em' }}> É arrivato un nuovo fast food in città</h1>
            <p > Preparati ad una nuova esperienza e vieni a scoprire tutte le deliziose prelibatezze che la nostra cucina ha da offrirti!</p>
            <p> Dai panini con il polpo a quelli con l'hamburger, dalla pizza ai panzerotti, dalle paposcie ai panuozzi, oltre a tutte le classiche sfiziosità come patatine, pizze fritte, scaldatelli e tanto altro!</p>
            <p> Esplora il nostro sito, puoi ordinare direttamente da qui se sei nel ristorante oppure da casa: registrati con una tua email, metti il tuo indirizzo di casa* e al resto ci pensiamo noi!</p>
          </div>
        </div>
        <h1 id="menu" style={{ marginLeft: '1em', fontFamily: 'Fascinate' }}> Menù</h1>
        <div className="row" >
          {this.state.items.map(card => (
            <CardMenu
              key={card._id}
              card={card} />
          ))}
        </div>
        <h1 id="about" style={{ marginLeft: '1em', fontFamily: 'Fascinate', marginTop: '1em' }}> Chi Siamo </h1>
        <div style={{ fontFamily: 'K2D', marginLeft: '1em' }}>

          <p>Il Fast Food da Cosimo è uno dei nuovi fast food presenti nel territorio di Bari, che modifica la concezione del FastFood, portando degli ingredienti unici e naturali. Ci troviamo qui:</p>
          <div>
            <img src={mappa} className="img-fluid" style={{ float: 'left', width: '459px', height: '263px', borderRadius: '7px', marginRight: 'auto', marginLeft: 'auto' }}
            />
            <img src={pin} style={{ marginLeft: '2em', width: ' 30px', float: 'left' }} />
            <p> Via Roma, Bari 70125</p>
          </div>
        </div>
        <footer style={{ clear: 'both' }}>
          <h1 style={{ marginLeft: '1em', fontFamily: 'Fascinate' }}> Contattaci</h1>
          <img src={person} style={{ marginLeft: '2em', width: ' 30px', float: 'left' }} />
          <p> Ristorante: 389 123 4568</p>

        </footer>
      </>

    )
  }
}

export default App;
