import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemDetail.css'
import ItemCount from '../itemCount';


function ItemDetail ({ item }){

    const [buyFinalized, setBuyFinalized] = useState(false);
    

    const onAdd = () => {
        setBuyFinalized(true);
      }
    
    return(
        <div className="item-detail">
            <div className='info1'>
                <h3>{item.title}</h3>
                <img src={item.image} alt="" />
            </div>
            <div className='info2'>
                <span>Descripción:</span>
                <p>{item.description}</p>
                <span> <strong>precio:</strong> ${item.price}</span>

                {buyFinalized
                ? <Link to="/cart">
                    <button>Finalizar compra</button>
                    </Link>
                : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
                
                
            </div>
            
        </div>
    )

}



export default ItemDetail;