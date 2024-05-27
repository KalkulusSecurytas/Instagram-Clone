import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";
import { Avatar } from '@mui/material';

const Search = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);

    const data = [
        '@avdhoot_savle',
        '@aarohi_savle',
        '@amol_savle',
        '@vaibhavi_savle',
        
    ];

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        const filteredResults = data.filter((keyword) => keyword.includes(inputValue));
        setResult(filteredResults);
    }

    return (
        <div className='Search-Container'>
            <div className='search-box'>
                <SearchIcon className='search-icon'/>
                <input placeholder='Type to search...' id='input-box' value={input} onChange={handleInputChange} autoComplete='off'/>
            </div>

            <div className='result-box-list'>
                <ul className='main-data'>
                    {result.map((item, index) => (
                        <li key={index} className='data-type'>
                            <Link to={`/profile/${item}`} state={{ name: item }} className='link-acc'><Avatar sx={{ p: 0, borderRadius: "20px", borderColor: 'background.body'  , width: '30px', height: '30px' , marginRight: "15px" , background: 0 }}
                            />{item} </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='bottom-en'>
                <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
                <span>© 2024 INSTAGRAM FROM META</span>
            </div>
        </div>
    );
}

export default Search;
