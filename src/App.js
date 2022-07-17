import React from 'react'
import Navbar from './componentes/header/Navbar';
import ListContainer from './componentes/contenedor/ItemListContainer';
import ItemDetailContainer from './componentes/contenedor/itemDetailContainer/ItemDetailContainer'
import Cart from './componentes/cart/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListContainer/>}></Route>
          <Route path='/category/:categoryName' element={<ListContainer/>}></Route>

          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        
        
      </BrowserRouter>


    </>
    
      


    
    
    
    
  );
}

export default App;
