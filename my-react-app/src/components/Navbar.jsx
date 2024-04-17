import { FaGithub } from "react-icons/fa"
import React from "react"

function Navbar() {
    return (
        <div className="navbar">
            <FaGithub className="github-icon"/>
            <h1>Timineri GitHub.</h1>
        </div>
    )
}

export default Navbar