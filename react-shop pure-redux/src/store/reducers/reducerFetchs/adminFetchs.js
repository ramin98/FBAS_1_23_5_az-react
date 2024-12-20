export async function getOrders(dispatch) {
    let response = await fetch('http://localhost:5000/orders')
    let data = await response.json()
    dispatch({type:'GET ORDERS', payload: data})
}

export async function deleteProduct(id) {
  console.log(id)
  let response = await fetch('http://localhost:5000/delete-admin/' + id, {
    method:'DELETE'
  })
  let data = await response.json()
  console.log(data);
}

export async function addProductFetch(formData,product, dispatch) {
    let res = await fetch("http://localhost:5000/add-admin", {
      method: "POST",
      body: formData,
    });
  
    let data = await res.json();
    dispatch({type:'ADD', payload: {...product, id: data.id}})

    console.log(data);
  }

  export async function addAllProductFetch(idArray) {
    let res = await fetch("http://localhost:5000/delete-admin/multiple", {
      method: "POST",
      headers:{
        
      },
      body: idArray,
    });
  
    let data = await res.json();

    console.log(data);
  }
  
  export async function editProductFetch(formData, id) {
    let res = await fetch("http://localhost:5000/change-admin/" + id, {
      method: "PUT",
      body: formData,
    });
  
    let data = await res.json();

    console.log(data);
  }
  