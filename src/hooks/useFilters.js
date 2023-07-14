import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export const useFilters = () =>{

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