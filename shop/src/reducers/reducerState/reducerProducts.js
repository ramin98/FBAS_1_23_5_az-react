export let initialObjectProducts = {
  products: [],
};

export function reducerProducts(state, action) {
  if (action.type === "GET PRODUCTS") {
    return { ...state, products: action.payload };
  }

  return state;
}
