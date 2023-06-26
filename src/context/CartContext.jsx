import { createContext, useState } from 'react'

export const cartContext = createContext()

export default function CartContext({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = ({ id, title, price, thumbnail }) => {
       const indexProduct = cart.findIndex((product) => product.id === id)

       if (indexProduct >= 0) {
        const cpCart = structuredClone(cart)
        cpCart[indexProduct].qt += 1
        return setCart(cpCart)
       }
        setCart(prevState => ([...prevState,{
            ...{ id, title, price, thumbnail },
            qt: 1
        }]))
    }

    const clearCart = () => setCart([])

    const initialState = { cart, addToCart, clearCart }
    return (
        <cartContext.Provider value={initialState}>
            {children}
        </cartContext.Provider>
    )
}
