import React from "react"
// import Icon from "./assets/icons8-react-native-96.svg";
import reactLogo from "./assets/icons8-react-native-96.svg";
import "./css/style.css"

// ReactDOM.create1Root(document.getElementById('root')).render(
//     <Navbar />
// )

function Main() {
    return (
        <div>
            <div className="main-flex">
                <main>
                    <div className="container">
                        <div className="main-content">
                            <h1>Fun facts about React</h1>
                            <div className="content-flex">
                                <ul>
                                    <li>Was first released in 2013.</li>
                                    <li>Was originally created by Jordan Walke.</li>
                                    <li>Has well over 100K stars on GitHub.</li>
                                    <li>Is maintained by Facebook.</li>
                                    <li>Powers thousands of enterprise apps, including mobile apps.</li>
                                </ul>

                                <div className="content-logo">
                                    <img src={reactLogo}   alt="react-logo" className="react-logo-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Main