import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css";
import { grey } from '@mui/material/colors';

const Searchbar = ({setResults}) => {
    const [input , setInput] = useState("");
    
    const fetchdata = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchdata(value);
  };

  return (
    <div className=' input-wraper'>
        <SearchIcon  sx={{color : grey}} className='search-icon'/>
        <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default Searchbar