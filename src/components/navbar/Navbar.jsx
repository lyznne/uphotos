import "./Navbar.css" 

import React from 'react'
import {BsGithub} from "react-icons/bs"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#">Uphotos</a>
        </div>
        <div className="github">
          <a target="_blank" href="https://github.com/lyznne">
            < BsGithub />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar