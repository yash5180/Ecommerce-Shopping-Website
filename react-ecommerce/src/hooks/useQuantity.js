import { useState } from 'react'

const useQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return { quantity, increase, decrease };
};

export default useQuantity