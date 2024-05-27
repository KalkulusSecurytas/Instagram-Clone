import React from 'react';
import './ReloadLine.css'; 



function ReloadLine({ loading }) {
  return  loading ? 
    <div className="reload-line"></div> : null;
  
}

export default ReloadLine;
