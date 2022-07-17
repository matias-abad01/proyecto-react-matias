import React from "react";
import { Link } from "react-router-dom";
import './Item.css'


function Item({ item }) {
  return (
    <div className="item" >
      <div className="container-img">
        <img src={item.image} alt="" />
      </div>
      <h3>{item.title}</h3>
      
      
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>ver más detalles</Link>  
    </div>
  );
}

export default Item;