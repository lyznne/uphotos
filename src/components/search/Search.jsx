import "./Search.css"
import { BiSearch } from "react-icons/bi";
import { FaBackspace } from "react-icons/fa";
import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="input">
          <BiSearch className="icon search-icon" />
          <input type="text" placeholder="unicorns" />
          <FaBackspace className=" icon backspace-icon" />
          <button>search</button>
        </div>
    </div>
  )
}

export default Search;
