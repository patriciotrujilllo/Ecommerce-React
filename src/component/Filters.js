import { useId,useContext } from 'react'
import { FiltersContext } from '../context/filters'
import Accordion from 'react-bootstrap/Accordion';
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

        const checked  = e.target.checked 

        if(checked ){
            setFilters(prevState=>({
                ...prevState,
                category: e.target.value
            }))
        }else{
            setFilters(prevState=>({
                ...prevState,
                category: 'all'
            }))
        }

        
    }

    return (
        <>
        
        
        <section className='filter'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>
                <label htmlFor={idFilterCategory}>Categoria</label>
                <div className='category' id={idFilterCategory} onChange={handleChangeCategory}>

                    <input type="radio" id="all" value="all" name="category"/>
                    <label htmlFor="all">All</label><br />

                    <input type="radio" id="men's clothing" value="men's clothing" name="category"/>
                    <label htmlFor="men's clothing">men's</label><br />

                    <input type="radio" id="jewelery" value="jewelery" name="category"/>
                    <label htmlFor="jewelery">jewelery</label><br />



                </div>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </section>
        </>
    )
}