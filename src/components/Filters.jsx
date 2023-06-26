import { useState, useContext } from 'react'
import { productsContext } from '../context/ProductsContext'

import { getCategories, getPrices, handlerOrderByPrice, handlerOrderByCategory } from '../utils/utilities'

export default function Filters() {

	const { products, setLeakedProducts } = useContext(productsContext)

	const [selectedCategory, setSelectedCategory] = useState("")
	const [selectedPrice, setSelectedPrice] = useState("")

	const categories = getCategories(products)
	const prices = getPrices(products)

	const clearFilters = () => {
		setLeakedProducts(null)
		setSelectedCategory('')
		setSelectedPrice('')
	}

	return (
		<nav className="navbar navbar-expand-lg bg-dark container-fluid p-0">
			<div className="container">
				<a class="navbar-brand d-lg-none text-white" href="/">SHOPING</a>
				<button className="navbar-toggler my-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon bg-secondary rounded"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
						<li className='nav-item mx-5'>
							<div>
								<label htmlFor="categories" className='bg-dark text-white my-1 d-none d-lg-block'>Order by category</label>
								<select value={selectedCategory} className="form-select bg-dark text-white" id="categories" aria-label='Categories' onChange={(event) => handlerOrderByCategory(event, products, setLeakedProducts, setSelectedCategory, setSelectedPrice)}>
									<option value="Select an option">Select a category</option>
									{
										categories.map((category) => (
											<option key={category} value={category}>{category}</option>
										))
									}
								</select>
							</div>
						</li>
						<li className='nav-item mx-5 my-3'>
							<div>
								<label htmlFor="price" className='bg-dark text-white my-1 d-none d-lg-block'>Order by price</label>
								<select value={selectedPrice} className="form-select bg-dark text-white" id="price" aria-label="Price" onChange={(event) => handlerOrderByPrice(event, products, setLeakedProducts, setSelectedPrice, setSelectedCategory)}>
									<option value="Select an option">Select a price</option>
									{
										prices.map((price) => (
											<option key={price} value={price}>{price}</option>
										))
									}
								</select>
							</div>
						</li>
						<li className="nav-item mx-5 py-2">
							<button className='btn btn-secondary' onClick={clearFilters}>Clear Filters</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

