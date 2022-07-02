import React from 'react';
import NavbarAdmin from './ComponentsAdmin/NavbarAdmin';
class Modify extends React.Component {

  constructor() {
    super();
    this.state = {
      idProdotto: '',
      nome: '',
      ingredienti: 'pane',
      prezzo: 2


    }

    this.handleUpdate = this.handleUpdate.bind(this)
  }


  handleUpdate(toUpdateId) {
    const requestBody = {
      nome: this.state.nome,
      ingredienti: this.state.ingredienti,
      prezzo: this.state.prezzo

    }
    fetch(`http://localhost:3005/menu/api/admin/modificaMenuItem/${toUpdateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    window.location.href = '/admin'
  }

  render() {
    return (
      <>
        <NavbarAdmin />
        <main>
          <div style={{ position: 'absolute', width: '1267px', height: '1267px', left: '86px', top: '112px' }}>
            <h1> Modifica Prodotto</h1>
            <form style={{ marginLeft: '2em', width: '628px', left: '116px', top: '6em' }} onSubmit={e => this.handleUpdate(this.state.idProdotto)}>
              <div className="form-floating mb-3" style={{ marginLeft: '2em', width: '628px', left: '116px', top: '6em' }} >
                <input type="text" className="form-control" placeholder="Nome prodotto" onChange={e => this.setState({ idProdotto: e.target.value })} />
                <label for="floatingInput">id Prodotto:</label>
              </div>
              <div className="form-floating mb-3" style={{ marginLeft: '2em', width: '628px', left: '116px', top: '6em' }} >
                <input type="text" className="form-control" placeholder="Nome prodotto" onChange={e => this.setState({ nome: e.target.value })} />
                <label for="floatingInput">Nome prodotto</label>
              </div>
              <div className="form-floating mb-3" style={{ marginLeft: '2em', width: '628px', left: '116px', top: '6em' }}>
                <input type="number" className="form-control" placeholder="Prezzo" onChange={e => this.setState({ prezzo: e.target.value })} />
                <label for="floatingInput">Prezzo</label>
              </div>
              <div className="form-floating" style={{ marginLeft: '2em', width: '628px', left: '116px', top: '6em' }}>
                <textarea className="form-control" placeholder="Lista gli ingredienti qui"
                  onChange={e =>
                    this.setState({ ingredienti: e.target.value })}

                ></textarea>
                <label for="floatingTextarea">Lista qui gli ingredienti separati da una virgola</label>
              </div>
              <button type="submit">Invia</button>
            </form>
          </div>
        </main>
      </>
    )
  }
}

export default Modify;