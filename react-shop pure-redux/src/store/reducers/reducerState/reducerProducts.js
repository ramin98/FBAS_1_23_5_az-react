export let initialObjectProducts = {
  products: [],
};

export function reducerProducts(state = initialObjectProducts, action) {
  if (action.type === "GET PRODUCTS") {
    return { ...state, products: action.payload };
  }else if(action.type === "PRODUCTS SORTING"){
    let sortedProducts = [...state.products]

    if(action.payload === 'PRICE INCREASE'){
      sortedProducts.sort((a,b) => a.product_price - b.product_price)
    }else{
      sortedProducts.sort((a,b) => b.product_price - a.product_price)
    }
    
    return { ...state, products: sortedProducts };
  }

  return state;
}
