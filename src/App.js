import { getAllProducts } from "./services/productServices"
import { useState,useEffect} from "react"
import { Mapeo } from "./component/products/Mapeo.js"
import { Header } from "./component/Header.js"
import './styles.css'
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./component/Cart"

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
    <div className="container-body">
      <Cart />
      <Header/>
      <Mapeo filtrado={filtrado}/>
    </div>
    
      
    
  )
  }

export default App
