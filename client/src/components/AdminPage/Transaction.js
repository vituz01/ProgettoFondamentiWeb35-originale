

import { Component } from "react";
import NavbarAdmin from "./ComponentsAdmin/NavbarAdmin";
import Flush from "./ComponentsAdmin/flushTransaction";
import orders from "../services/orders";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { ordini: [] };
    this.handleGet = this.handleGet.bind(this);
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
  }





  render() {
    return (
      <>
        <NavbarAdmin />
        <div className="row">
        {this.state.ordini.map(flush => (
            <Flush
              key={flush._id}
              flush={flush} />
          ))}
        </div>
        
      </>

    )
  }
}

export default App;
