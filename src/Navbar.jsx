import reactLogo from "./assets/icons8-react-native-96.svg"

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <img src={reactLogo} alt="react-logo" className="react-logo" />
                <h3>React Course - Project 1</h3>
            </nav>
        </div>
    )
}

export default Navbar

