import Cart from './components/Cart'
import Filters from './components/Filters'
import Products from './components/Products'

import { useContext } from "react";
import { cartContext } from './context/CartContext'

export default function App() {

  const {cart} = useContext(cartContext)

  return (
      <>
      <header>
        <Filters/>
      </header>
      <main className="row m-0">
      {
          cart.length > 0 && 
          (
            <div className="col col-sm-3 p-0">
              <Cart/>
            </div>
          )
        }
        <div className={`${cart.length > 0 ? 'col-9 p-0 mx-auto' : 'col-12 p-0 mx-auto'}`}>
          <Products/>
        </div>
      </main>
      </>
  )
}