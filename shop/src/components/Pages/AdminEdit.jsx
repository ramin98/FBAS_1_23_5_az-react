import AddForm from "../Admin/AdminEdit/AddForm";
import AdminEditList from "../Admin/AdminEdit/AdminEditList";
import { Link } from "react-router-dom";

function AdminEdit() {
  return (
    <>
      <section className="products-page">
      <Link to='/admin'>Admin</Link>
        <AddForm/>
        <AdminEditList />
      </section>
    </>
  );
}

export default AdminEdit;
