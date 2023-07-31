import {Cart} from './Cart'
import {BiUserCircle} from 'react-icons/bi'
import Form from 'react-bootstrap/Form';
import {useFilters} from '../hooks/useFilters'
import { Link,useNavigate  } from 'react-router-dom';
import './Header.css'

export const Header = () =>{

    const {filters ,setFilters} = useFilters()
    const navigate = useNavigate ()

    const handleKeyDown = e =>{
        if (e.key === 'Enter') {
            e.preventDefault()
            setFilters(prevState=>({
            ...prevState,
            title: e.target.value
        }))
        navigate('/')
        }
        
    }
        return (
        <header className='header'>
            <Link to='/'>
                <h1>Fake Store</h1>
            </Link>
            <nav className='nav'>
                <Form>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" defaultValue={filters?.title || ''}  onKeyDown={handleKeyDown}/>
                </Form>
                <div className='icons'>
                    <BiUserCircle size='2rem'/>
                    <Cart />
                </div>
            </nav>
        </header>
    )
}