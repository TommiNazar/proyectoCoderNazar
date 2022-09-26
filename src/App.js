import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer  greeting = "producto1"></ItemListContainer>
      <ItemListContainer  greeting = "producto3"/>
      <ItemListContainer  greeting = "producto2"/>

      <carrito/>
      <h1 className="text-3xl font-bold underline">distribucion de productos nestle</h1>
    </div>
    
  );
}

export default App;
