import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer name = "producto1"></ItemListContainer>
      <ItemListContainer name = "producto3"/>
      <ItemListContainer name = "producto2"/>
      <h1 className="text-3xl font-bold underline">distribucion de productos nestle</h1>
    </div>
    
  );
}

export default App;
