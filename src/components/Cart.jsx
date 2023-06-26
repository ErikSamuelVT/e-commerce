import { useContext } from "react";
import { cartContext } from '../context/CartContext'
import { AddToCartIcon, RemoveFromCartIcon } from "../icons/Icons";

export default function Cart() {

    const { cart, addToCart, clearCart} = useContext(cartContext)

    return (
        <div className="text-center text-white sticky-top " style={{maxHeight: '100vh',overflowY: 'auto'}}>
            <h2>Shopping Cart</h2>
           
            <div className="d-flex justify-content-center flex-column align-items-center">
            {
                cart.map((product) => (
                    <div className="card bg-dark my-3" key={product.id}style={{ width: "18rem" }}>
                        <div className="card-body d-flex">
                            <div className="img">
                                <img src={product.thumbnail} className="img-fluid rounded" alt={product.title} width={120} loading="lazy" />
                            </div>
                            <div className="desc">
                                <div className="card-body">
                                    <h5 className="card-title text-white"> {product.title} </h5>
                                    <h6 className="card-title text-white">${product.price}</h6>
                                    <div className="addMore mt-3 d-flex justify-content-around align-items-center">
                                        <div className="group-1">
                                            <span className="px-2 py-1 mx-2 text-white border border-white rounded">{product.qt}</span>
                                            <button className="btn btn-dark" onClick={()=>addToCart(product)}>
                                                <AddToCartIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <button className="btn btn-dark" onClick={()=> clearCart()}>
                <RemoveFromCartIcon />
            </button>
        </div>
    )
}