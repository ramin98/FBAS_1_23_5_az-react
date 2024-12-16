import { useContext, useEffect } from "react";
import { getProducts } from "../../../reducers/reducerFetchs/productsFetchs";
import AdminEdiItem from "./AdminEditItem";
import { MyContext } from "../../../App";

function AdminEditList() {
  let {editAdminState, editAdminDispatch } = useContext(MyContext);

  useEffect(() => {
    getProducts(editAdminDispatch);
  }, []);

  return (
    <ul>
      {editAdminState.products.map((item) => (
        <AdminEdiItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default AdminEditList;
