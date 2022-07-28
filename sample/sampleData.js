const orders = {
  1: {
    amount: 1000,
    currency: "TWD",
    packages: [
      {
        id: "products_1",
        amount: 1000,
        products: [
          {
            name: "好吃大肉棒",
            quantity: 1,
            price: 1000,
          },
        ],
      },
    ],
  },
  2: {
    amount: 2000,
    currency: "TWD",
    packages: [
      {
        id: "products_1",
        amount: 2000,
        products: [
          {
            name: "tibame棒棒",
            quantity: 2,
            price: 3000,
          },
        ],
      },
    ],
  },
  3: {
    amount: 3000,
    currency: "TWD",
    packages: [
      {
        id: "products_1",
        amount: 2000,
        products: [
          {
            name: "好吃大肉棒",
            quantity: 2,
            price: 1000,
          },
        ],
      },
    ],
  },
};

module.exports = orders;
