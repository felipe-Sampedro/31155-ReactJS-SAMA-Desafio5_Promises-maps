import React from 'react'

const ItemList = ({pedido}) => {
  return (
    <div>
      {pedido.length > 0 ? (
        pedido.map((pedido,index) => (
        <>
          <h1 key={index}>{pedido.nombre}</h1>
        </>
        ))
      ) : (
      <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemList
