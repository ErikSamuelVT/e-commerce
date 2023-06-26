import {createContext, useState} from 'react'
import { products } from '../data/Data.json'

export const productsContext =  createContext(null)

export default function ProductsContext({children}) {
  const [leakedProducts, setLeakedProducts] = useState(null)

  const initialState = {
    products,
    leakedProducts,
    setLeakedProducts
  }

  return (
    <productsContext.Provider value={initialState}>
      {children}
    </productsContext.Provider>
  )
}
