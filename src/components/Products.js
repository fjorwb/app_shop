import React from 'react';
import styled from 'styled-components';


const Products = ({products, addCart}) => {

    return ( 
        <ProductContainer>
            {products.map((product) => {
                const {id, name} = product
                return <Product key={id}>
                    <p>{name}</p>
                    <Button onClick={() => addCart(id, name)}> add product</Button>
                    </Product>
            })}
        </ProductContainer>
     );
}

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
    padding: 0px 0;
    `;
    
    const Product =  styled.div`
    background-color: yellowgreen;
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 30px;
        font-weight: bold;
    }
`;
 
const Button = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

export default Products;