import React from 'react'


function ItemListContainer( { greeting}) {

    const styles = { border: `black 2px solid`, padding: `20px`}
    return (

    <div style={styles}>
        
        <h3>{ greeting}</h3> 
        
    </div>
    )
}

export default ItemListContainer