export let initialObjectAdmin = {
    orders: [],
  };
  
  export function reducerAdmin(state, action) {
    if (action.type === "GET ORDERS") {
        console.log(action.payload)
      return { ...state, orders: action.payload };
    }
  
    return state;
  }
  