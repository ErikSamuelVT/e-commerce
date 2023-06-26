import {useContext } from 'react'
import { AddToCartIcon } from '../icons/Icons'
import { cartContext } from '../context/CartContext'
import { productsContext } from '../context/ProductsContext'


export default function LeakedProducts() {

    const {leakedProducts} = useContext(productsContext)
    const {addToCart} = useContext(cartContext)


    return (
        <div className="row m-0 p-0">
            {
                leakedProducts.map((product) => (
                    <div className="col col-sm-4 my-2 d-flex justify-content-center align-items-center" key={product.id}>
                        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                            <img src={product.thumbnail} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className='d-flex justify-content-around align-items-center'>
                                    <span>
                                        <b>${product.price}</b>
                                    </span>
                                    <button className='btn btn-dark mx-3' onClick={()=>addToCart(product)}>
                                        <AddToCartIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}