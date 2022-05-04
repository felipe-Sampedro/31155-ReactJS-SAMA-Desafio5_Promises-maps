import {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greetings}) => {

/*   const [pedido,setPedido] = useState([])

  const catalogo = [{name:'Shampoo', stock:'5',price:37000},{name:'Tintura', stock:'2',price:18000},{name:'Tintura', stock:'8',price:15500}]

useEffect(() => {
  const producto = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(catalogo)
    }, 2000);
  })

  producto.then((res) => setPedido(res))
//  .then((res)=>console.log(pedido))
  .catch((err)=>console.log(err))

  console.log(pedido);

  return () => {
    
  }
}, []) */



  return (
    <div className='bg-info'>Este es el componente ItemListContainer

        <p>{greetings}</p>
        <div className="d-flex justify-content-evenly p-4">

          <ItemList/>
          <Item stock={5}/>
          <Item stock={2}/>
          <Item stock={8}/>


        </div>

    </div>
  )
}

export default ItemListContainer