export let initialObjectEditAdmin = {
    products: [],
  };
  
  export function reducerEditAdmin(state, action) {
    if (action.type === "GET PRODUCTS") {
      return { ...state, products: action.payload };
    }
  
    return state;
  }
  