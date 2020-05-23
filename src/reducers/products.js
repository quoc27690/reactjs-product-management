var initialState = [
  {
    id: 1,
    name: "iphone",
    price: "400",
    status: true,
  },
  {
    id: 2,
    name: "samsung",
    price: "700",
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
