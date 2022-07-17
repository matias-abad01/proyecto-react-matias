import React, { useState } from 'react';
import './itemCount.css'


const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    

    return(
        <div className='itemCount'>
            
            <p>Stock: {stock}</p>
            <div className='Contador'>
                <div className='botonContador'>
                    <button onClick={() => handlerClickSubtrack()}>-</button>
                    <p>{count}</p>
                    <button onClick={() => handlerClickAdd()}>+</button>    
                </div>  
                <button onClick={() => handlerClickAddToCart()} className='botonAgregar'>agregar al carrito</button>
            </div>
        </div>
    );

}


export default ItemCount;