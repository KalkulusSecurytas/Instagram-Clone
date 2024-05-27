import React from 'react'
import "./Searchlist.css"

const Searchlist = ({result}) => {
  return (
    <div className='search-result'
    onClick={(e) => alert(`You will be rediting to  ${result}!`)} >
        
        {result}
        
        </div>
  )
}

export default Searchlist