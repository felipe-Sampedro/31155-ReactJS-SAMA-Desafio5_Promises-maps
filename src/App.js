import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Promesa from './components/Promises/Promises';


function App() {

/*   const [pedido, setPedido] = useState([])

const catalogo = [{nombre:'Shampoo', stock:'5',price:37000},{nombre:'Tintura', stock:'2',price:18000},{nombre:'Tintura', stock:'8',price:15500}]

useEffect(() => {
  const producto = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(catalogo)
    }, 2000);
  })

  producto
    .then(
      (resp) => {
        setPedido(resp);
      },
      (err) => {
        console.log("error", err);
      }
    )
    .then(() => console.log(producto))
    .catch((err) => console.log(err));

    console.log(producto);

  return () => {
    
  }
}, [])
 */

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />

        <Promesa/>
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;