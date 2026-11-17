import useQuantity from "../hooks/useQuantity";

const CartItem = ({product}) => {

    const { quantity, increase, decrease } = useQuantity();
    const subtotal = (quantity * product.price).toFixed(2);
    return (
        <>
            <td>
                <div className="cout">
                <button onClick={decrease}>-</button>

                <span>{quantity}</span>

                <button onClick={increase}>+</button>
                </div>
            </td>
            <td className="subtotal">
        ${subtotal}
      </td>
        </>
    );
};

export default CartItem;