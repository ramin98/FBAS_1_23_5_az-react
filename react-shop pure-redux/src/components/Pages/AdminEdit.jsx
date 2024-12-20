import { useDispatch } from "react-redux";
import AddForm from "../Admin/AdminEdit/AddForm";
import AdminEditList from "../Admin/AdminEdit/AdminEditList";
import { Link } from "react-router-dom";

function AdminEdit() {
  let dispatch = useDispatch()
  return (
    <>
      <section className="products-page">
      <Link to='/admin'>Admin</Link>
      <button onClick={() => dispatch({type:'DELETE ALL'})}>DELETE ALL</button>

        <AddForm/>
        <AdminEditList />
      </section>
    </>
  );
}

export default AdminEdit;
