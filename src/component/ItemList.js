import React, { useEffect, useState } from 'react'
import { products } from './data/products'
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';



const ItemList = () => {

    const [items, setItem] = useState([]);

    useEffect(() => {
        getProducts ().then( Response =>{
            console.log (Response);
            setItem(Response)
        })
    
    }, [])
    
    const getProducts = () => {
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 3000);
        })
    }

    return (
        <>
        <div>itemList</div>
        {items.map ( i => <ItemCard key = {i.id} {...i} />)}
        </>
    
    )
    
}
export default ItemList