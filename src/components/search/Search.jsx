import "./Search.css"
import { BiSearch } from "react-icons/bi";
import { FaBackspace } from "react-icons/fa";
import React, { useState } from 'react'
import { useQuery } from "react-query";
import fetchPhotosData from "../../utils/query";

const Search = ({props}) => {
  const {inputValue,setInputValue} =props
console.log("passed props",inputValue)
  // const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    e.preventDefault()
    const value = e.target.value;
    setInputValue(value)
  }


  const deleteInputValue = () => {
    setInputValue("");
  }
//   const { data, error, isLoading } = useQuery('search', () => fetchPhotosData(`search/photos?query=${inputValue}`));
//   if(!data) return;
//   if(error){
//     console.log(error)
//   }
//  if(!isLoading && data){}




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
