import React , { useEffect }  from 'react'
import "./Pagenotfound.css"

const Pagenotfound = () => {
    useEffect(() => {
        document.title = 'Page not found • Instagram';
      }, []);
  return (
    <div className='pagenotfound'>
        <h1>Sorry, this page isn't available.</h1>
        <p className='para'>The link you followed may be broken, or the page may have been removed. Go back to Instagram.</p>

        <div className='bottom__end'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <span>© 2024 INSTAGRAM FROM META</span>
        </div>
    </div>
  )
}

export default Pagenotfound