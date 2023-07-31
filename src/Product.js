import { getAllProducts } from "./services/productServices"
import { useState,useEffect} from "react"
import { Mapeo } from "./component/products/Mapeo.js"
import { Header } from "./component/Header.js"
import './styles.css'
import { useFilters } from "./hooks/useFilters"
import { Filters } from "./component/Filters"

export function Products() {

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

        <div className="container-main">
        <Header/>
        <Filters/>
        <Mapeo filtrado={filtrado}/>
        </div>
    
    )
    }
