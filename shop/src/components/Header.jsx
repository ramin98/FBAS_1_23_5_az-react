import { Link } from "react-router-dom"

function Header() {


    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">PRODUCTS</Link></li>
                    <li><Link to="/bag">BAG</Link></li>
                    <li><Link to="/admin">ADMIN</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header