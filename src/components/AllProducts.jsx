import { useContext } from 'react'
import { CartIcon } from '../icons/Icons'
import { productsContext } from '../context/ProductsContext'
import { cartContext } from '../context/CartContext'

export default function AllProducts() {

    const {products} = useContext(productsContext)
    const {addToCart} = useContext(cartContext)

    return (
        <div className="row m-0 p-0">
            {
                products.map((product) => (
                    <div className="col col-sm-4 my-2 d-flex justify-content-center align-items-center" key={product.id}>
                        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                            <img src={product.thumbnail} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <span>
                                    <b>${product.price}</b>
                                </span>
                                <button className='btn btn-dark' onClick={()=>addToCart(product)}>
                                    <CartIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}