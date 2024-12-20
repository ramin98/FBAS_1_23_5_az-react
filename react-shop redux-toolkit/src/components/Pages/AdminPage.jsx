import { Link } from "react-router-dom"
import AdminList from "../Admin/AdminList"

function AdminPage() {
    
    return (
        <section>
            <h1>Admin Page</h1>
            <Link to='/admin-edit'>Admin Edit</Link>
            <AdminList/>
        </section>
    )
}

export default AdminPage