import { useEffect } from "react"
import ProductsItem from "./ProductsItem"
import { useDispatch, useSelector } from "react-redux"
import {getProducts} from "../../store/reducers/reducerFetchs/productsFetchs"

function ProductsList() {

    let dispatch = useDispatch()
    let products = useSelector((state) => state.products.products)
    let state = useSelector((state) => state)
    console.log(state)

    useEffect(() => {
         dispatch(getProducts())
    },[])

    return (
        <ul>
            {products.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ProductsList