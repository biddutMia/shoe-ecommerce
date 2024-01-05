import { action } from "easy-peasy";

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

  addToCart: action((state, payload) => {
    if (!state.data[payload]) {
      state.data.push(payload);
    }
  }),

  removeOneItem: action((state, payload) => {
    const newWishList = state.filter((item) => item !== payload);
    state = newWishList;
  }),

  removeAllItem: action((state) => (state = [])),
};

export { cart, wishList };
