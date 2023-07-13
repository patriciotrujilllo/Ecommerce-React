import {Filters} from './Filters.js'

export const Header = ({setFilters}) =>{
    return (
        <header>
            <h1>React Fake Store</h1>
            <Filters setFilters={setFilters}/>
        </header>
    )
}