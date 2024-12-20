import { deleteProduct } from "../reducerFetchs/adminFetchs";

export let initialObjectEditAdmin = {
    products: [],
    idArray:[]
  };
  
  export function reducerEditAdmin(state = initialObjectEditAdmin, action) {
    if (action.type === "GET PRODUCTS") {
      return { ...state, products: action.payload };
    }
    else if (action.type === "ADD") {
      let newArr = [...state.products]
      newArr.push(action.payload)
      return { ...state, products: newArr };
    }

    else if (action.type === "EDIT") {
      let newArr = [...state.products]
      let index = newArr.findIndex((item) => item.id === action.payload.id)
      newArr[index] = {...action.payload.productObject, id: action.payload.id}
      return { ...state, products: newArr };
    }

    else if (action.type === "DELETE") {
      let newArr = [...state.products]
      let index = newArr.findIndex((item) => item.id === action.payload)
      deleteProduct(action.payload)
      newArr.splice(index, 1)
      return { ...state, products: newArr };
    }

    else if (action.type === "CHOOSE ALL") {
      let newArr = [...state.idArray]
      if(action.payload.id){
        newArr.push()
      }
      return { ...state, idArray: newArr };
    }

    else if (action.type === "DELETE ALL") {
      let newArr = [...state.products]
      let index = newArr.findIndex((item) => item.id === action.payload)
      deleteProduct(action.payload)
      newArr.splice(index, 1)
      return { ...state, products: newArr };
    }
  
    return state;
  }
  