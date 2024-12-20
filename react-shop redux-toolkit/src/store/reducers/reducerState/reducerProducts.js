import { createSlice } from "@reduxjs/toolkit";
import { productsFetch } from "../reducerFetchs/productsFetchs";

let productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    productsSorting: (state, action) => {
      let sortedProducts = [...state.products];
      console.log(action)
      if (action.payload === "PRICE INCREASE") {
        sortedProducts.sort((a, b) => a.product_price - b.product_price);
      } else {
        sortedProducts.sort((a, b) => b.product_price - a.product_price);
      }

      return { ...state, products: sortedProducts };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(productsFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {productsSorting} = productsSlice.actions
export default productsSlice.reducer

// export let initialObjectProducts = {
//   products: [],
// };

// export function reducerProducts(state = initialObjectProducts, action) {
//   if (action.type === "GET PRODUCTS") {
//     return { ...state, products: action.payload };
//   }else if(action.type === "PRODUCTS SORTING"){
//     let sortedProducts = [...state.products]

//     if(action.payload === 'PRICE INCREASE'){
//       sortedProducts.sort((a,b) => a.product_price - b.product_price)
//     }else{
//       sortedProducts.sort((a,b) => b.product_price - a.product_price)
//     }

//     return { ...state, products: sortedProducts };
//   }

//   return state;
// }
