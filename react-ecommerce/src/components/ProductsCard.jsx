import { Link } from "react-router-dom"
import "./ProductCard.css";
import {CartContext} from "../context/CartProvider";
import { useContext } from "react";
import LikeButton from "./LikeButton";
import Alert from '@mui/material/Alert';
import { useState } from "react";

const ProductsCard = ({product}) => {
  const {cart,setCart} = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const add = ()=>{
    setCart([...cart,product]);
      setShowAlert(true);

      setTimeout(()=>{
        setShowAlert(false);
      },1200);
  }
  return (
    <div className="Productcardcontainer">
        <img src={product.image} alt={product.title} className="productImage" />
        <h2>{product.name}</h2>
        <span id="likebt"><LikeButton/></span>
        <p id="pra">₹ {product.price}</p>
        <br />
        {showAlert && (
        <Alert severity="success">
          Product Added Successfully.
        </Alert>
      )}
        <Link to={`/products/${product.id}`} id="link">View Product</Link>
        <button id="btn" onClick={add}>Add to Cart</button>
    </div>
  )
}

export default ProductsCard