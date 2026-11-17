import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const[product,setProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
        .then((response)=>{
            console.log(response.data);
            setProduct(response.data);
        })
    }, [id])

return (
    <div>
        {product && <>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>
        <button>Add to Cart</button>
        </>}
    </div>
)
}

export default ProductDetails