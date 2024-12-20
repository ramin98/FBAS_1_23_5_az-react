import { useEffect } from "react";
import AdminItem from "./AdminItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/reducers/reducerFetchs/adminFetchs";

function AdminList() {
  let orders = useSelector((state) => state.admin.orders)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <ul>
      {orders.map((item) => (
        <AdminItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default AdminList;
