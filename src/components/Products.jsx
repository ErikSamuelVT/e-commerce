import {useContext } from 'react'
import AllProducts from "./AllProducts";
import LeakedProducts from "./LeakedProducts";
import { productsContext } from '../context/ProductsContext'


function Products() {
    const {leakedProducts } = useContext(productsContext)

    if (leakedProducts) {
        return <LeakedProducts/>
    }else {
        return <AllProducts/>
    }
}

export default Products