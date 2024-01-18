import { createStore, action } from "easy-peasy";
import { cart, wishList, shop, subscribe, users } from "./models/model";

const store = createStore({
  cart,
  wishList,
  shop,
  subscribe,
  users
});

export default store;
