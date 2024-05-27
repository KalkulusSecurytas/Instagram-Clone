import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Nosidnav = ({ children }) => {
    const location = useLocation(); 

    const [showSidnav, setShowSidnav] = useState(true); 

    useEffect(() => {
        // console.log('this is location', location);
        if (location.pathname === '/logout' || location.pathname === '/resetpassword') 
        { 
            setShowSidnav(false);
        } else {
            setShowSidnav(true);
        }
    }, [location]);
    

    return (
        <div>
            {showSidnav && children} 
        </div>
    );
};

export default Nosidnav;
