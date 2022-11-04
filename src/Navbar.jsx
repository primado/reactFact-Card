import reactLogo from "./assets/icons8-react-native-96.svg"
import "./css/style.css"



function Navbar() {
    return (
        <div>
            <div className="main-flex">
                <div className="container">
                    <nav className="nav">
                        <div className="brand">
                            <img  src={reactLogo} alt="react-logo" className="react-logo" />
                            <h1 className="nav-brand">ReactFacts</h1>
                        </div>
                        <h3 className="nav-text">React Course - Project 1</h3>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar

