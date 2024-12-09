export let initialObjectBag = {
  bag: [],
};

export function reducerBag(state, action) {
    if (action.type === "ADD TO BAG") {
        return { ...state, bag: [...state.bag, action.payload] };
      }

  return state;
}
