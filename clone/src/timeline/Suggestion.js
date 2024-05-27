import React from 'react'
import "./Suggestion.css"
import { Avatar } from '@mui/material'
import {Link} from 'react-router-dom' 


const Suggestion = () => {

    
  return (
    
    <div className='suggestons'>
        {/* ====================================================================== */}
        <div className='suggestions__username'>
            <div className='username__left'></div>
            <span className='avatar'>
                <Avatar
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '50px', height: '50px'}}
                />
            </span>
            <div className='username__info'>
                <span className='username__me'>avadhoot_amol_savle </span>
                <span className='name__me'>Avadhoot Amol Savle</span>
            </div>
            <Link to='/logout' className='link'>
            <button className='switch__pro , follow__button'>Logout</button>
            </Link>
        </div>
         
            {/* ============================================ */}
        <div className='suggestions__title'>Suggestions for you
        <button className='seeall__button'>See All</button>
        
        </div>


        <div className='suggestions__usernames'>
        <div className='suggestions__username'>
            <div className='username__left'></div>
            <span className='avatar'>
            <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
            sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '50px', height: '50px'}}
          />
            </span>
            <div className='username__info'>
            <Link to='/profile/@aarohi_savle' className='link'>
                <span className='username'>Aarohi_savle </span></Link>
                <span className='relation'>New to Instagram</span>
            </div>     

            <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestions__username'>
            <div className='username__left'></div>
            <span className='avatar'>
                <Avatar 
                src="https://assets.telegraphindia.com/telegraph/2023/Sep/1694305276_salman.jpg"
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '50px', height: '50px'}}
                />
            </span>
            <div className='username__info'>
                <span className='username'>Amol_savle </span>
                <span className='relation'>New to Instagram</span>
            </div>

            <button className='follow__button' >Follow</button>
        </div>
        <div className='suggestions__username'>
            <div className='username__left'></div>
            <span className='avatar'>
                <Avatar
                src='https://i.pinimg.com/736x/e3/ed/46/e3ed46937c8f240f6729e6b5acafb744.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '50px', height: '50px'}}
                />
            </span>
            <div className='username__info'>
                <span className='username'>Vaibhavi_savle </span>
                <span className='relation'>New to Instagram</span>
            </div>

            <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestions__username'>
            <div className='username__left'></div>
            <span className='avatar'>
                <Avatar 
                src='https://static.toiimg.com/thumb/msid-74026740,width-400,resizemode-4/74026740.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '50px', height: '50px'}}
                />
            </span>
            <div className='username__info'>
                <span className='username'>Yash__ </span>
                <span className='relation'>Rocking Star__</span>
            </div>

            <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestion__end-text'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <p>© 2024 INSTAGRAM FROM META</p>
        </div>
        </div>
    </div>
  )
}

export default Suggestion