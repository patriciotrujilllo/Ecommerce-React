import { Cards } from "./card.js"

export const Mapeo = ({filtrado}) =>{
    return (
        <div className="container">
            <div className="item-container">
                {filtrado.map(product => (
                    <Cards key={product.id} props={product}/>
                ))} 

            </div>
        </div>
    )
}