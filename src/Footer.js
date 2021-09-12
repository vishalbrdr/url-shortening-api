import Link from "./components/Link"
import Logo from "./components/Logo"
import { FaTwitter, FaPinterest, FaInstagram, FaFacebookSquare } from "react-icons/fa"


function Footer() {

    const data = [
        {
            heading: "Features",
            links: ["Link Shortening", "Branded Links", "Analytics"]
        },
        {
            heading: "Resources",
            links: ["Blog", "Developers", "Support"]
        },
        {
            heading: "Company",
            links: ["About", "Our Team", "Careers", "Contact"]
        }
    ]



    return (
        <footer className="footer">
            <div className="container">
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="links-container">
                    {data.map((item, index) => (
                        <div key={index} className="footer__links-container">
                            <h3 className="heading-light">{item.heading}</h3>
                            <ul className="footer__links">
                                {item.links.map((link, i) => (
                                    <li key={i}> <Link name={link} /> </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer__links-container">
                        <ul className="footer__links icons">
                            <li><a href="#nowhere" className="link"><FaFacebookSquare /></a> </li>
                            <li><a href="#nowhere" className="link"><FaTwitter /></a> </li>
                            <li><a href="#nowhere" className="link"><FaPinterest /></a> </li>
                            <li><a href="#nowhere" className="link"><FaInstagram /></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
