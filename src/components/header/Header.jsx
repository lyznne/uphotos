import Search from "../search/Search"
import "./Header.css"
import React from 'react'

const Header = () => {
  return (
    <header className="main_padding">
      <div className="header">
        <div className="text">
          <h1>Meet Uphotos: Crafting Memories One Click at a Time</h1>
          <p>Turning Moments into Timeless Keepsakes</p>
        </div>
        <Search />
      </div>
    </header>
  )
}

export default Header