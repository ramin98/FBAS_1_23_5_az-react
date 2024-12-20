import { orderFetch } from "../reducerFetchs/bagFetchs";

export let initialObjectBag = {
  bag: [],
};

function handleLocalStorage(choice, bag) {
    if(choice === 'set'){
        localStorage.setItem("bag", JSON.stringify(bag));
    }else{
       return JSON.parse(localStorage.getItem("bag"));
    }
}

export function reducerBag(state = initialObjectBag, action) {
  if (action.type === "ADD TO BAG") {
    let bag = handleLocalStorage('get')
    let product = { ...action.payload };
    product.count = 1;
    product.totalPrice = product.count * product.product_price;
    if (!bag.some((item) => item.id === product.id)) {
      bag.push(product);
      handleLocalStorage('set', bag)
    }

    return { ...state, bag: bag };
  } else if (action.type === "GET BAG") {
    let bag = handleLocalStorage('get')
    return { ...state, bag: bag };
  } else if (action.type === "DELETE BAG") {
    let bag = handleLocalStorage('get')
    let index = bag.findIndex((item) => item.id === action.payload);
    bag.splice(index, 1);
    handleLocalStorage('set', bag)
    return { ...state, bag: bag };
  } else if (action.type === "MINUS BAG") {
    let bag = handleLocalStorage('get')

    let index = bag.findIndex((item) => item.id === action.payload);

    bag[index].count -= 1;

    if (bag[index].count < 1) {
      bag.splice(index, 1);
    } else {
      bag[index].totalPrice = bag[index].count * bag[index].product_price;
    }

    handleLocalStorage('set', bag)
    return { ...state, bag: bag };
  } else if (action.type === "PLUS BAG") {
    let bag = handleLocalStorage('get')

    let index = bag.findIndex((item) => item.id === action.payload);

    bag[index].count += 1;
    bag[index].totalPrice = bag[index].count * bag[index].product_price;

    handleLocalStorage('set', bag)
    return { ...state, bag: bag };
  } else if (action.type === "ORDER FORM") {
    action.payload.customer_bag = [...state.bag]
    orderFetch(action.payload)
    handleLocalStorage('set', [])
    return { ...state, bag: [] };
  }else if (action.type === "CLEAR BAG") {
    handleLocalStorage('set', [])
    return { ...state, bag: [] };
  }

  return state;
}
