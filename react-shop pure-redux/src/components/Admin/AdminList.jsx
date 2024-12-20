import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { getOrders } from "../../reducers/reducerFetchs/adminFetchs";
import AdminItem from "./AdminItem";

function AdminList() {
  let { adminState, adminDispatch } = useContext(MyContext);

  useEffect(() => {
    getOrders(adminDispatch);
  }, []);

  console.log(adminState)
  return (
    <ul>
      {adminState.orders.map((item) => (
        <AdminItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default AdminList;
