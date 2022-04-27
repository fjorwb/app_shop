import React,{useState} from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import './App.css';

// import components from ./components using index.js
import {Home, Blog, Store, Cart, Error} from './components/index'
// import data from ./data using index.js
import {products, cartData} from './data/index'

function App() {

  const [cart, setCart] = useState([])

  const addCart = (id, name) => {
    if(cart.length === 0){
      setCart([{id: id, name:name, qty: 1}])
    }else {
      const newCart = [...cart]
      const inCart = newCart.filter((it) => { return it.id === id}).length > 0
      if(inCart) {
        newCart.forEach((it, index) => {
          if(it.id === id) {
            const qtty = newCart[index].qty + 1
            newCart[index] = {id:id, name:name, qty: qtty}
        }})
      } else {
        newCart.push({id:id, name:name, qty:1})
      }
      setCart(newCart)
    }  
  }


  return (
      <Container>
        <h2>App Store</h2>
        <Menu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/store'>Store</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/store' element={<Store products={products} addCart={addCart}/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </main>
        <aside>
          <Cart 
            cart={cart}
            
            />
        </aside>
      </Container>
  );
}

const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
