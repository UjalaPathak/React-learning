import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.item);
  return (
    <div>
      {cartItems.map((food) => (
        <CartItems food={food} />
      ))}
    </div>
  );
};
export default Cart;
