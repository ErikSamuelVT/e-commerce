import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductsContext from './context/ProductsContext.jsx'
import CartContext from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContext>
    <CartContext>
      <App />
    </CartContext>
  </ProductsContext>
)
