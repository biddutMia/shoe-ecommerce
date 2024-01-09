import { action } from "easy-peasy";
import shopListData from "../data/data";

const cart = {
  data: {},

  addToCart: action((state, payload) => {
    if (!state.data[payload]) {
      state.data[payload] = {
        item: 1,
      };
    }
  }),

  removeOneItem: action((state, payload) => {
    delete state.data[payload];
  }),

  removeAllCartItem: action((state) => (state = {})),

  incrementCartItem: action(
    (state, payload) => (state.data[payload].item += 1)
  ),

  decrementCartItem: action(
    (state, payload) => (state.data[payload].item -= 1)
  ),
};

const wishList = {
  data: [],

  toggleWishList: action((state, payload) => {
    if (!state.data.includes(payload)) {
      state.data.push(payload);
    } else {
      state.data = state.data.filter((item) => item !== payload);
    }
  }),

  removeAllItem: action((state) => (state = [])),
};

const shop = {
  shopItems: shopListData,
};

export { cart, wishList, shop };
