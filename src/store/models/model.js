import { action } from "easy-peasy";
import shopListData from "../data/data";
import { v4 as generateId } from "uuid";

const cart = {
  data: {},

  addToCart: action((state, payload) => {
    if (!state.data[payload]) {
      state.data[payload] = {
        item: 1,
      };
      return;
    }
    alert("This item already added in cart");
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

const subscribe = {
  subscribers: [],
  addToSubscriber: action((state, payload) => {
    if (!state.subscribers.includes(payload)) {
      state.subscribers.push(payload);
    }
  }),
};

const users = {
  data: [],

  addUser: action((state, payload) => {
    state.data.push({
      id: generateId(),
      ...payload,
    });
  }),
};

const shop = {
  shopItems: shopListData,
};

export { cart, wishList, shop, subscribe, users };
