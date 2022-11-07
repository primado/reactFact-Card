import React from 'react'
import Navbar from "./Navbar"
import Main from "./Main"

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//     <Navbar />
//     <Main />
//     </React.StrictMode>
// )

export default function App() {
    return (
        <div>
            <Navbar />
            <Main />
        </div>
    )
    
}