import Banner from './components/Banner.jsx'
import { useState } from 'react'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import ShoppingList from './components/ShoppingList.jsx'
//import Cart from './components/Cart.jsx'
//import ShoppingList from './components/ShoppingList.jsx'
//import './styles/App.css'

function App() {
  const [cart, updateCart] = useState ([])
  return <>
  <Banner />
  <Cart cart={cart} updateCart={updateCart} />
  <ShoppingList cart={cart} updateCart={updateCart}/>
  <Footer/>
  </>
}


export default App
