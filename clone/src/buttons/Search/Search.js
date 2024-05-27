import React ,{useEffect, useState} from 'react'
import Searchbar from './Searchbar';
import "./Search.css"
import Searchresult from './Searchresult';


const Search = () => {
  useEffect(()=>{
    document.title = "Instagram"
})

const [results ,setResults] = useState([]);
  return (
    <div className='Search'>
      <div className='input__box'>
        <Searchbar setResults={setResults}/>
      </div>
      <div>
        <Searchresult results={results}/>
      </div>
      <div className='bottom-end'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <span>© 2024 INSTAGRAM FROM META</span>
        </div>
    </div>
  )
}

export default Search