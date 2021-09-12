import Cta from "./Cta"
import Link from "./Link"

const navLinks = ["Features", "Pricing", "Resources"]

export default function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__links">
                {navLinks.map(link => <li key={link}><Link name={link}  /></li>)}
            </ul>
            <ul className="nav__links nav__links-user">
                <li><Link name="Login"/></li>
                <li><Cta name="Sign Up" className="rounded"/></li>
            </ul>
        </nav>
    )
}
