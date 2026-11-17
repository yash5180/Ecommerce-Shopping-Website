import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import "./Cart.css"
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart,setCart } = useContext(CartContext);

  const del = (id)=>{
    setCart(cart.filter((item) => item.id !== id));
  }
  if (cart.length === 0) {
    return <h1 id="empt">Add Items In the Cart :)</h1>;
  }
  return (
    <div className="shop">
      <h1 id="top">My Cart</h1>
      <hr id="line" />
      <table>
        <caption id="capt">Shopping Cart</caption>
          <thead>
          <tr>
          <th id="pthead">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          </tr>
          </thead>
          <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
        <td className="details">
          <img src={product.image}/>
          <span>{product.name}</span>
          </td>

          <td className="price">${product.price}</td>
            <CartItem product={product}/>

          <td>
          <button id="del-btn" onClick={()=> del(product.id)}><i className="fa-solid fa-trash"></i></button>
          </td>
          </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
};

export default Cart;