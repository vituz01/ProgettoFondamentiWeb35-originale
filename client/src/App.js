import Menu from './components/Menu/Menu.js';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Component } from 'react';
import AdminPage from './components/AdminPage/AdminPage.js';
import Add from './components/AdminPage/Add.js';
import Transaction from './components/AdminPage/Transaction.js'
import Ordini from './components/OrdiniView/Ordini'
import Modify from './components/AdminPage/Modify.js';

class App extends Component {
  render(){
    return (
   <Router>
    <div className='App'>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element ={<Menu/>} />
      <Route path= '/admin' element={<AdminPage/>}/>
      <Route path= '/admin/add' element ={<Add />} />
      <Route path= '/orders' element ={<Ordini/>} />
      <Route path='/admin/transactions' element={<Transaction/>}/>
      <Route path='/admin/modify' element={<Modify/>}/>
      </Routes>
    </div>
   </Router>
  
   
  );
}
}

export default App;
