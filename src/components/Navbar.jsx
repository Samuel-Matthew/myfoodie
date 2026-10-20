import { Link, NavLink } from "react-router"

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="logo">Foodie <span>Hub</span></Link>

            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

            <Link to="/menu" className="cart-button">Cart</Link>
        </header>
    )
}

export default Navbar