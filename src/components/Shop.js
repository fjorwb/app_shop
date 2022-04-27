import React from 'react'

import Products from './Products';

const Store = ({products, addCart}) => {
    return ( 
        <div>
            <h1>Store</h1>
            <Products products={products} addCart={addCart}/>
        </div>
     );
}
 
export default Store;