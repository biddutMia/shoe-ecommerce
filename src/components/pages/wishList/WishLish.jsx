import CartAndWishLists from "../../shared/cartAndWishLists/CartAndWishLists";
import { useStoreState, useStoreActions } from "easy-peasy";

const WishList = () => {
  const { wishList } = useStoreState((state) => state);
  const action = useStoreActions((actions) => actions);

  return (
    <CartAndWishLists
      title="Wish Lists Products"
      products={wishList.data}
      addToCart={action.cart.addToCart}
    />
  );
};

export default WishList;
