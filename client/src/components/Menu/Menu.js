import Header from "./menu_components/Header";
import Card from "./menu_components/Card";
import { Component } from "react";
import NavbarMenu from "./menu_components/NavbarMenu";
import items from "../services/items";
import './Menu.css'

class Menu extends Component {
  constructor(props){
    super(props);
      this.state = {items:[], cart:[], cards:[]}
      this.handleGet = this.handleGet.bind(this);
      this.sendOrder = this.sendOrder.bind(this);
      
    
  }
  componentDidMount() {
    this.handleGet()

    
  }

  handleGet() {
    items.getAll()
      .then(data => {
        this.setState({
          items: [...data],
          cards: this.state.items.map(item => ({
            ...item,
            quantità: 1
           }))
        })
        }
        );
        
        
     
  }




  sendOrder() {
    const importoProd = this.state.cart[0].elemento.prezzo * this.state.cart[0].quantità
    const requestBody ={
      elemento: this.state.cart[0].elemento._id,
      quantità: this.state.cart[0].quantità,
      importo: importoProd
    
    }
    fetch("http://localhost:3005/menu/api/ordini", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    window.location.href = '/orders'
  


  }

  handleDelete(i) {
    const newCart = [...this.state.cart]
    newCart.splice(i, 1)
    this.setState({ cart: newCart })
  }

  handleQuantità(id, i) {
    const newCards = this.state.cards.map(card => {
      if (card._id === id) {
        card.quantità = card.quantità + i;
      }
      console.log(card)
      return card
    });
    this.setState({ cards: newCards })}




  addToCart(cardid, cardQuantità){
    let newElement = this.state.items.filter(i => i._id==cardid)
    let item = newElement[0]

    this.setState({ cart: [...this.state.cart, { elemento: item, quantità: cardQuantità }] })
    console.log()
  
    
    
  }

  render() {
    return (
      <>

        <Header />
        <NavbarMenu />
        <div className="container">

          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <p>Scegli tra i nostri migliori prodotti,<strong> dopo l'invio sarai rindirizzato alla pagina contenente il tuo ordine</strong>. Che aspetti?</p>
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                {...card}
                key={card._id}
                onIncrement={() => { this.handleQuantità(card._id, 1) }}
                onDecrement={() => { this.handleQuantità(card._id, -1) }}
                onAdd={() => { this.addToCart(card._id, card.quantità) }}

              />
            ))}
          </div>

          <div>
            <h1>Carrello</h1><hr />

            <div className="Carrello"  >

              <ul>


                {
                  this.state.cart.map((card, i) => <li key={i}> {card.elemento.nome}, x{card.quantità} <button className="Carrello-button" onClick={() => this.handleDelete(i)}>Elimina</button> </li>)
                }



              </ul>
              <button className="Carrello-button" onClick={this.sendOrder}>Invia ordine</button>
            </div><hr /><br />


          </div>

        </div>
      </>
    );
  }
}

export default Menu;