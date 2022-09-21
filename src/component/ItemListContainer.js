import React from 'react'

function ItemListContainer( props) {

    const styles = { border: `black 2px solid`}
  return (

    <div style={styles}>
        
        <h3>{props.name}</h3> 
        
    </div>
  )
}

export default ItemListContainer