import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import  ItemList from './component/ItemList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './component/ItemDetail';
import Error404 from './component/Error404';
import Index from './component/Index';
import Footer from './component/Footer'



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        

        <Routes>
          <Route path={'/'} element={<Index/>}/>
          <Route path={'/item'} element={<ItemList/>}/>
          <Route path={'/item/:id'} element={<ItemDetail/>}/>
          <Route path={'*'} element={<Error404/>}/>
          
        </Routes>
        
        <Footer/>
      
      </BrowserRouter>
      
      

      
    </div>
    
  );
}

export default App;
