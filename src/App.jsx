
import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { createContext, useState } from "react"

export const productContext = createContext([])
export const cartContext = createContext([])
const App = () => {
  const { cart, products } = useLoaderData();
  const [cartItem, setCartItem] =useState(cart)
  console.log(cart)
  return (

    <productContext.Provider value={products}>
      <cartContext.Provider value ={[cartItem, setCartItem]}>
        <Header />
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
        <Footer />
      </cartContext.Provider>
    </productContext.Provider>

  )
}

export default App
