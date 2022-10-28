import React , {useEffect, useState}from 'react'
import {useParams} from 'react-router-dom'
import { products } from './data/products';

function ItemDetail() {

    const {id: itemId} = useParams()

    const [item, setitem] = useState({});

    useEffect(() => {
        getItemDetail().then (response => {
            setitem(response)
            })
    }, []);

    const getItemDetail = () => { 
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve (products.find(p => p.id == itemId))
            })
        })
    }


    return (
    <div className='m-8'>
        <div>{item.name}</div>
        <div>precio: {item.price}</div>
    </div>
    )
}

export default ItemDetail 