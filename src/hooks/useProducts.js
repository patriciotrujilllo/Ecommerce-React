import { useState,useEffect } from "react"
import { getAllProducts } from "../services/productServices"

export const useProducts = () =>{

    const [products,setProducts] = useState([])

    useEffect(()=>{

    getAllProducts()
    .then(res=>{
        setProducts(res)
    })

    },[])

    return products

}