
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <Link to="/" className="logo footer-logo">
                    Foodie<span>Hub.</span>
                </Link>
                <p>Good food, delivered with love.</p>
            </div>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
            </div>

            <p className="copyright">
                © {new Date().getFullYear()} Foodie Hub. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
