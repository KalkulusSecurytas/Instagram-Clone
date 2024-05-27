import React from 'react'
import "./Searchresults.css";
import Searchlist from './Searchlist';

const Searchresult = ({results}) => {
  return (
    <div className='result-list'>
        {results.map((result, id) => {
        return <Searchlist result={result.name} key={id} />;
      })}
        
    </div>
  )
}

export default Searchresult