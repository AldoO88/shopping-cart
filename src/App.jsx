import { useState } from 'react'
import { Products } from './components/Products'
import { products as initalProducts } from './mocks/products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initalProducts) 

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
    
  )
}

export default App
