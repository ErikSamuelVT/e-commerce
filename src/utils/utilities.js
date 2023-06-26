export function getCategories(products){
    let arrCategories = []
    let categories = null
    products.forEach(product => {
        arrCategories.push(product.category)
          categories = new Set(arrCategories)
        });
    return [...categories]
}

export function getPrices(products){
  let arrPrice = []
  let price = null
  products.forEach(product => {
      arrPrice.push(product.price)
        price = new Set(arrPrice)
      });
  return [...price]
}

export const handlerOrderByPrice = (event, products ,setLeakedProducts, setSelectedPrice, setSelectedCategory) => {
  const priceSelected = event.target.value
  setSelectedPrice(priceSelected)
  const productsByPrice = products.filter((product) => product.price == priceSelected)
  setLeakedProducts(productsByPrice)
  setSelectedCategory("")
}  

export const handlerOrderByCategory = (event, products ,setLeakedProducts, setSelectedCategory, setSelectedPrice) => {
  const categorySelected = event.target.value
  setSelectedCategory(categorySelected)
  const productsByCategory= products.filter((product) => product.category == categorySelected)
  setLeakedProducts(productsByCategory)
  setSelectedPrice("")

}  
