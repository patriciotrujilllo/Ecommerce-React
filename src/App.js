import { getAllProducts } from "./services/productServices"
import { useState,useEffect } from "react"
import { Cards } from "./component/products/card"
import './styles.css'
function App() {

  const [products,setProducts] = useState([])

  useEffect(()=>{

    getAllProducts()
    .then(res=>{
      setProducts(res)
    })

  },[])
  
  return (
    <div className="container">
      <div className="item-container">
        {products.map(product => (
            <Cards key={product.id} props={product}/>
        ))} 

      </div>
    </div>
    
      
    
  )
  }

export default App
