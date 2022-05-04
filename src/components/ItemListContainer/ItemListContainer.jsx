import {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greetings}) => {

  const [pedido,setPedido] = useState([])
  const catalogo = [{nombre:'Shampoo'},{nombre:'Acondicionador'},{nombre:'Tintura'}]

useEffect(() => {
  const producto = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(catalogo)
    }, 2000);
  });

  producto.then((res) => {setPedido(res)})
  .then(()=>console.log(producto))
  .catch((err)=>console.log(err))

  console.log(pedido);

  return () => {
    
  }
}, [])



  return (
    <div className='bg-info'>ItemListContainer

        <p>{greetings}</p>
        <div className="d-flex justify-content-evenly p-4">

          <ItemList pedido={pedido}/>
          <Item stock={5}/>
          <Item stock={2}/>
          <Item stock={8}/>


        </div>

    </div>
  )
}

export default ItemListContainer