import {Suspense} from "react"
import {Products} from './Product'
import { ProductDescription } from "./ProductDescription"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import { useProducts } from "./hooks/useProducts"

function App() {

  const products = useProducts()

  return(
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/product/:id" element={<ProductDescription products={products}/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
    
  )
  }

export default App
