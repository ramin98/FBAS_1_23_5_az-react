export async function orderFetch(product){
    let res = await fetch('http://localhost:5000/add-orders', {
        method:'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body:JSON.stringify(product)
    })
    let data = await res.json()
    console.log(data)
}