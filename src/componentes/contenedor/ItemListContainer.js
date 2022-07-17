import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from 'react-router-dom';
//punto de encuentro


// extraer api


/*const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(ropaDeHombres);
    }, 2000);
  });
  */

function ListContainer () {

  const {categoryName} = useParams();
  
  
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(false);

  



  useEffect(() => {
    const URL = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}`: `https://fakestoreapi.com/products`;
    

    setLoading(true);
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=>{setproducts(data)})
    .catch((err)=>console.log(err))
    .catch(()=> setError(true))
    .finally(()=>setLoading(false))
    
/*
    const getProducts = async ()=>{
      setLoading(true);
      try {
        const response = await fetch('https://ropadehombres-f34d5-default-rtdb.firebaseio.com/stock.json');
      const data = await response.json();
      console.log(data)
      
      
      setproducts(data);
      }
      catch(err){
        console.log(err);
        setError(true)
      }
      finally{
        setLoading(false);
        console.log("fin")
      }
      
    }
    getProducts();
   */
    
    
  }, [categoryName]);

    if (loading) {
      return (
        <div style={stylecontainer}>
          <p>Cargando</p>
          <SpinnerCircular size={59} thickness={167} speed={137} color="rgba(0, 0, 0, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
        </div>
      );
  } 
    else if (error){
      return(
        <p>error</p>
      )
  }
   else{
    return( 
            <div className='listContainer'>       
                <ItemList items={products}/>
                           
            </div>
    );
  }
}


export default ListContainer;

//-------STYLE----...
const stylecontainer = {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
}