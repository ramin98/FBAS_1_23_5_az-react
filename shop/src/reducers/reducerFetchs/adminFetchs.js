export async function getOrders(dispatch) {
    let response = await fetch('http://localhost:5000/orders')
    let data = await response.json()
    dispatch({type:'GET ORDERS', payload: data})
}

export async function addProductFetch(product) {
    let res = await fetch("http://localhost:5000/add-admin", {
      method: "POST",
      body: product,
    });
  
    let data = await res.json();
    console.log(data);
  }
  