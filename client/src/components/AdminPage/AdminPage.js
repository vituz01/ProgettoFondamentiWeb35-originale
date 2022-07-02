
import { Component } from "react";
import NavbarAdmin from './ComponentsAdmin/NavbarAdmin'
import CardAdmin from './ComponentsAdmin/cardAdmin'
import items from '../services/items'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
    this.handleGet = this.handleGet.bind(this);
  }


  componentDidMount() {
    this.handleGet();
  }

  handleGet() {
   items.getAll()
      .then(data => {
        this.setState({
          items: [...data]}
        )
  })}

  deleteItem(toDeleteId){
    fetch(`http://localhost:3005/menu/api/admin/deleteMenuItem/${toDeleteId}`,{
      method: 'DELETE'
    });
    window.location.reload(true)
  }

  

      render(){
      return (
        <>
        <NavbarAdmin />
        <div className="row" >
      {this.state.items.map( card => (
        <CardAdmin
        {...card}
        key={card._id}
        card={card}
        onDelete={() => { this.deleteItem(card._id) }}
        
        />
      ))}
      </div>
      </>
        
      )}

}
export default AdminPage