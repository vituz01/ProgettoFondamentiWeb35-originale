
import { Component } from "react";
import Navbar from "../Home/home_components/Navbar";


import Flush from "./ordiniView_components/flush";
import orders from "../services/orders";
import items from "../services/items";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { ordini: [], items:[] };
    this.handleGet = this.handleGet.bind(this);
    this.findNamebyId =this.findNamebyId.bind(this);
  }


  componentDidMount() {
    this.handleGet();
  }

  handleGet() {
    orders.getAll()
      .then(data => {
        this.setState({
          ordini: [...data]
        }
        )
      })
      items.getAll()
      .then(data=>{
        this.setState({
          items:[...data]
        })
      })
  
  }
  findNamebyId(id) {
    const thosItem = items.filter((i)=> i.id = id);
    console.log(thosItem)
    return thosItem[0].nome
  

}




  render() {
    return (
      <>
        <Navbar />
        <div className="row">
        {this.state.ordini.map(ordine => (
            <Flush
              key={ordine._id}
              flush={ordine}
               />
          ))}
        </div>
        
      </>

    )
  }
}

export default App;
