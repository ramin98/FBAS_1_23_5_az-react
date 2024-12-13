import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import ProductsItem from "./ProductsItem"
import { getProducts } from "../../reducers/reducerFetchs/productsFetchs"

function ProductsList() {

    let {productsState, productsDispatch} = useContext(MyContext)

    useEffect(() => {
         getProducts(productsDispatch)
    },[])

    return (
        <ul>
            {productsState.products.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ProductsList