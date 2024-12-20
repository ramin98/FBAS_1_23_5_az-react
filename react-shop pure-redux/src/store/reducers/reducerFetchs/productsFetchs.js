export function getProducts() {
    return async function (dispatch){
        let response = await fetch('http://localhost:5000/goods')
        let data = await response.json()
        dispatch({type:'GET PRODUCTS', payload: data})
    }
}