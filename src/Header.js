import Cta from "./components/Cta"
import Logo from "./components/Logo"
import Nav from "./components/Nav"


function Header() {

    const toggleNav = () => {
        // alert("hello")
        document.querySelector(".nav").classList.toggle("scale")
    }

    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                    <Logo className="header__logo" />
                    <div className="menu" onClick={toggleNav} ><div className="menu-btn"></div></div>
                    <Nav />
                </div>
                <div className="heading-container">
                    <h1 className="heading-dark">
                        More than just shorter links
                    </h1>
                    <p> Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>
                    <div className="cta-container">
                        <Cta className="rounded" name="Get Started" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
