import { createStore, action } from "easy-peasy";
import { cart, wishList } from "./models/model";

const store = createStore({
  cart,
  wishList,
});

export default store;
