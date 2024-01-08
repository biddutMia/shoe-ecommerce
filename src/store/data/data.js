import { v4 as generateId } from "uuid";

const shopListData = [
  {
    id: generateId(),
    name: "product A",
    imgURL: "/shop/man/man1.jpg",
    imgAlt: "product a",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "500",
  },
  {
    id: generateId(),
    name: "product B",
    imgURL: "/shop/woman/woman1.jpg",
    imgAlt: "product b",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "700",
  },
  {
    id: generateId(),
    name: "product C",
    imgURL: "/shop/woman/woman2.jpg",
    imgAlt: "product c",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "1000",
  },

  {
    id: generateId(),
    name: "product D",
    imgURL: "/shop/kid/kid1.jpg",
    imgAlt: "product D",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "300",
  },

  {
    id: generateId(),
    name: "product E",
    imgURL: "/shop/man/man2.jpg",
    imgAlt: "product E",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "750",
  },
  {
    id: generateId(),
    name: "product F",
    imgURL: "/shop/man/man3.jpg",
    imgAlt: "product F",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "550",
  },
  {
    id: generateId(),
    name: "product G",
    imgURL: "/shop/kid/kid2.jpg",
    imgAlt: "product F",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "350",
  },

  {
    id: generateId(),
    name: "product H",
    imgURL: "/shop/kid/kid3.jpg",
    imgAlt: "product H",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "300",
  },

  {
    id: generateId(),
    name: "product I",
    imgURL: "/shop/woman/woman3.jpg",
    imgAlt: "product i",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "760",
  },
];

export default shopListData;
