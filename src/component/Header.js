import {Cart} from './Cart'
import {BiUserCircle} from 'react-icons/bi'
export const Header = () =>{
    return (
        <header class='header'>
            <h1>Fake Store</h1>
            <nav className='nav'>
                <input type="text" />
                <div className='icons'>
                    <BiUserCircle size='2rem'/>
                    <Cart />
                </div>
            </nav>
        </header>
    )
}