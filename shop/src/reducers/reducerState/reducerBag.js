export let initialObjectBag = {
    bag: []
}

export function reducerBag(state, action) {
    if (action.type === 'ADD TO BAG') {
        let bag = JSON.parse(localStorage.getItem('bag'))
        let product = {...action.payload}
        product.count = 1
        product.totalPrice = product.count * product.product_price
        if(!bag.some((item) => item.id === product.id)){
            bag.push(product)
            localStorage.setItem('bag', JSON.stringify(bag))
        }
                
        return { ...state, bag: bag }
    }else if(action.type === 'GET BAG'){
        let bag = JSON.parse(localStorage.getItem('bag'))
        return { ...state, bag: bag }
    }
    
    return state
}