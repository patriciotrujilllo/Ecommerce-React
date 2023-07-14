import { useId,useContext } from 'react'
import { FiltersContext } from '../context/filters'
import './Filters.css'

export const Filters = () =>{
    const idFilterPrice=useId()
    const idFilterCategory=useId()

    const {filters,setFilters} = useContext(FiltersContext)

    const handleChangePrice = (e) =>{

        setFilters(prevState=>({
            ...prevState,
            price: e.target.value
        }))
    }

    const handleChangeCategory = (e) =>{

        setFilters(prevState=>({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filter'>
            <div>
                <label htmlFor={idFilterPrice}>Precio</label>
                <input 
                    type='range'
                    id={idFilterPrice}
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                    value={filters.price}
                />
                <span>${filters.price}</span>
            </div>
            

            <div>
                <label htmlFor={idFilterCategory}>Categoria</label>
                <select id={idFilterCategory} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value="men's clothing">Ropa de Hombre</option>
                    <option value='jewelery'>jewelery</option>


                </select>
            </div>

        </section>
    )
}