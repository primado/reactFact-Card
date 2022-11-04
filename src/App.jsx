import React from 'react'
import ReactDOM  from 'react-dom'
import Navbar from "./Navbar"
import Main from "./Main"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Navbar />
    <Main />
    </React.StrictMode>
)