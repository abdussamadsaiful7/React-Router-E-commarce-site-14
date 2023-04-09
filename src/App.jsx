
import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { createContext, useState } from "react"
import Modal from "./components/Modal/Modal"

export const productContext = createContext([])
export const cartContext = createContext([])
const App = () => {
  let [isOpen, setIsOpen] = useState(true)
  const { cart, products } = useLoaderData();
  const [cartItem, setCartItem] =useState(cart)
  //console.log(cartItem)

  const cartAlert = sessionStorage.getItem('alert')
  if(cartItem.length>0 && cartAlert !== 'true'){
    setIsOpen(true)
    alert('You have items in Cart!')
    sessionStorage.setItem('alert', true)
  }


  return (

    <productContext.Provider value={products}>
      <cartContext.Provider value ={[cartItem, setCartItem]}>
        <Header />
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
        <Footer />
        {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </cartContext.Provider>
    </productContext.Provider>

  )
}

export default App
