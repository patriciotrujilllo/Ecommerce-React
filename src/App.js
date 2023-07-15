import { getAllProducts } from "./services/productServices"
import { useState,useEffect} from "react"
import { Mapeo } from "./component/products/Mapeo.js"
import { Header } from "./component/Header.js"
import './styles.css'
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./component/Cart"
import { CartProvider } from "./context/cart"

function App() {

  const [products,setProducts] = useState([])
  
  useEffect(()=>{

    getAllProducts()
    .then(res=>{
      setProducts(res)
    })

  },[])

  const {filterProducts} = useFilters(products)

  const filtrado = filterProducts(products)
  
  return (
    <CartProvider>
        <Cart/>
        <Header/>
        <Mapeo filtrado={filtrado}/>
    </CartProvider>
    
  )
  }

export default App
