import {Cart} from './Cart'
import {BiUserCircle} from 'react-icons/bi'
import Form from 'react-bootstrap/Form';
import {useFilters} from '../hooks/useFilters'


export const Header = () =>{

    const {setFilters} = useFilters()

    const handleClickSeach = e =>{
        e.preventDefault()
        setFilters(prevState=>({
            ...prevState,
            title: e.target.value
        }))
    }
    return (
        <header className='header'>
            <h1>Fake Store</h1>
            <nav className='nav'>
                <Form>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" onChange={handleClickSeach}/>
                </Form>
                <div className='icons'>
                    <BiUserCircle size='2rem'/>
                    <Cart />
                </div>
            </nav>
        </header>
    )
}