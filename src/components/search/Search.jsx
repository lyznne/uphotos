import "./Search.css"
import { BiSearch } from "react-icons/bi";
import { FaBackspace } from "react-icons/fa";
import React, { useState } from 'react'

const Search = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value)
  }


  const deleteInputValue = () => {
    const value = ''
    setInputValue(value);
  }

  return (
    <div className="search">
      <div className="input">
        <BiSearch className="icon search-icon" />
        <input type="text" placeholder="unicorns"
          value={inputValue}
          onChange={handleInputChange}
        />
        {
          inputValue && (
            <FaBackspace onClick={deleteInputValue} className=" icon backspace-icon" />
          )
        }
        <button>search</button>
      </div>
    </div>
  )
}

export default Search;
