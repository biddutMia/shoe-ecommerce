import { createStore, action } from "easy-peasy";
import { cart, wishList, shop, subscribe } from "./models/model";

const store = createStore({
  cart,
  wishList,
  shop,
  subscribe,
});

export default store;
