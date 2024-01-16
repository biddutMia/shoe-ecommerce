import CartAndWishLists from "../../shared/cartAndWishLists/CartAndWishLists";
import { useStoreState } from "easy-peasy";

const Cart = () => {
  const { cart } = useStoreState((state) => state);

  return (
    <CartAndWishLists
      title="Your Cart Products"
      isCart={true}
      products={cart.data}
    />
  );
};

export default Cart;
