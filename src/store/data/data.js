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
  {
    id: generateId(),
    name: "product j",
    imgURL: "/shop/man/man4.jpg",
    imgAlt: "product j",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "650",
  },
  {
    id: generateId(),
    name: "product k",
    imgURL: "/shop/man/man5.jpg",
    imgAlt: "product k",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "800",
  },

  {
    id: generateId(),
    name: "product L",
    imgURL: "/shop/man/man6.jpg",
    imgAlt: "product l",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "man",
    price: "600",
  },
  {
    id: generateId(),
    name: "product M",
    imgURL: "/shop/woman/woman4.jpg",
    imgAlt: "product M",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "860",
  },
  {
    id: generateId(),
    name: "product N",
    imgURL: "/shop/woman/woman5.jpg",
    imgAlt: "product N",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "900",
  },
  {
    id: generateId(),
    name: "product O",
    imgURL: "/shop/kid/kid4.jpg",
    imgAlt: "product o",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "400",
  },
  {
    id: generateId(),
    name: "product P",
    imgURL: "/shop/woman/woman6.jpg",
    imgAlt: "product p",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "900",
  },
  {
    id: generateId(),
    name: "product Q",
    imgURL: "/shop/kid/kid5.jpg",
    imgAlt: "product q",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "300",
  },
  {
    id: generateId(),
    name: "product R",
    imgURL: "/shop/kid/kid6.jpg",
    imgAlt: "product r",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "450",
  },

  {
    id: generateId(),
    name: "product S",
    imgURL: "/shop/woman/woman7.jpg",
    imgAlt: "product s",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "900",
  },
  {
    id: generateId(),
    name: "product T",
    imgURL: "/shop/woman/woman8.jpg",
    imgAlt: "product t",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "1000",
  },
  {
    id: generateId(),
    name: "product U",
    imgURL: "/shop/kid/kid6.jpg",
    imgAlt: "product u",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "350",
  },
  {
    id: generateId(),
    name: "product V",
    imgURL: "/shop/woman/woman7.jpg",
    imgAlt: "product v",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "850",
  },
  {
    id: generateId(),
    name: "product W",
    imgURL: "/shop/kid/kid8.jpg",
    imgAlt: "product W",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "kid",
    price: "250",
  },
  {
    id: generateId(),
    name: "product X",
    imgURL: "/shop/woman/woman8.jpg",
    imgAlt: "product x",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus quisquam accusantium corrupti.",
    type: "woman",
    price: "550",
  },
];

export default shopListData;
