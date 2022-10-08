import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import  ItemList from './component/ItemList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './component/ItemDetail';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        <h1 className="text-3xl font-bold underline flex justify-center">distribucion de productos nestle</h1>

        <Routes>
          <Route path={'/'} element={<ItemList/>}/>
          <Route path={'/item/:id'} element={<ItemDetail/>}/>
          
        </Routes>
      </BrowserRouter>
      
      

      
    </div>
    
  );
}

export default App;
