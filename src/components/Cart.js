import React from 'react'
import styled from 'styled-components';

const Cart = ({cart}) => {

    return (
        <div>
        <h1>Cart</h1>
        {cart.length>0 ?
            cart.map((item, index) => {
                const {id, qty, name} = item
                return (
                    <Product key={index}>
                        <ProductName>{id} {name}</ProductName>
                        <p>qty: {qty}</p>
                    </Product>
                    )
            }
            )
            :
                <p>carts is empty</p>
        } 
        </div>
        );
}


const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #999;
    font-size: 1rem;
    p {
        font-weight: 300;
        margin-left: 5px;
    }
    `
    
    const ProductName = styled.div`
    font-weight: 700;
    font-size: 1rem;
    color: #333;
`

export default Cart;