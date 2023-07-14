import { getAllProducts } from "./services/productServices"
import { useState,useEffect,useContext } from "react"
import { Mapeo } from "./component/products/Mapeo.js"
import { Header } from "./component/Header.js"
import { FiltersContext } from "./context/filters"
import './styles.css'

function App() {

  const [products,setProducts] = useState([])
  

  useEffect(()=>{

    getAllProducts()
    .then(res=>{
      setProducts(res)
    })

  },[])


  const useFilters = () =>{

    const {filters,setFilters} = useContext(FiltersContext)

    const filterProducts = (products) =>{

      return (
        
        products.filter(producto=>(
          filters.category==='all' || producto.category===filters.category ))
          .filter(producto=>(filters.price === 0 || producto.price>=filters.price ))
      ) 
      
    }
    return {
      filterProducts,
      setFilters

    }
  }

  const {filterProducts,setFilters} = useFilters(products)

  

  const filtrado = filterProducts(products)
  
  return (
    <div className="container-body">
      <Header setFilters={setFilters}/>
      <Mapeo filtrado={filtrado}/>
    </div>
    
      
    
  )
  }

export default App
