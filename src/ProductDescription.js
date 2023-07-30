import { useParams } from "react-router-dom"
import './productDescription.css'
import { Header } from "./component/Header"

export const ProductDescription = ({products}) =>{

    const {id} = useParams()
    const product = products? products.find(product=>product.id===parseInt(id)): false
    return(
        product? 
        <main className="main-description">
            <Header/>
            <figure className="figure-description">
                <img src={product.image} alt="" />
            </figure>
            <div className="price-description"></div>
            <div className="product-description"></div>
            <div className="product-add"></div>
        </main> : <div>Loading...</div>
    )
}