import { createStore, action } from "easy-peasy";
import { cart, wishList, shop } from "./models/model";

const store = createStore({
  cart,
  wishList,
  shop,
});

export default store;
