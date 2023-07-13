import { getAllProducts } from "./services/productServices"
import { useState,useEffect } from "react"
import { Mapeo } from "./component/products/Mapeo.js"
import { Header } from "./component/Header.js"
import './styles.css'

function App() {

  const [products,setProducts] = useState([])
  const [filters,setFilters] = useState({
    category: 'all',
    price: 0
  })

  useEffect(()=>{

    getAllProducts()
    .then(res=>{
      setProducts(res)
    })

  },[])

  const filterProducts = (products) =>{

    return products.filter(producto=>(filters.category==='all' || producto.category===filters.category )).filter(producto=>(filters.price === 0 || producto.price>=filters.price ))
    

  }

  const filtrado = filterProducts(products)
  
  return (
    <div className="container-body">
      <Header setFilters={setFilters}/>
      <Mapeo filtrado={filtrado}/>
    </div>
    
      
    
  )
  }

export default App
