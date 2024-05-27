import React, { useEffect , useState } from 'react'
import { Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import "./Accounts.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from '@mui/icons-material/Favorite';



export const Aarohi = () => {

    const [isVisible, setIsVisible] = useState(true);
      
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


    useEffect(()=>{
        document.title="Aarohi Savle (@aarohi_savle)"
    });


    
  return (
    <div className='profile'>
        
        <div className='profile__right'>
            <div className='account__data'>
                <Avatar className='photo'
                src='https://upload.wikimedia.org/wikipedia/commons/9/9c/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '160px', height: '160px'}} />
                <div className='data'>
                <span>@aarohi_savle</span>
                <button className='editbtn'>Follow profile</button>
                <SettingsIcon className='settings__icon'/>
                <div className='count'>
                <p>20 post</p>
                <p>16M followers</p>
                <p>299 following</p>
                </div>
                <div className='ko__data'>
                    <p>Aarohi Savle</p>
                    <span>my bios </span>
                </div>
                </div>
            </div>
            <div className='stories'>
                <Avatar
                sx={{ p: 0, width: '80px', height: '80px', border: '2px solid grey' , borderRadius: "100%"}}/>
                <p>Aarohi</p>
                
            </div>
            <hr className='end__line'/>
            <div className='info__profile'>
                <GridOnIcon className='icons'/>
                <p>POSTS</p>
                <BookmarkBorder className='icons'/>
                <p>SAVED</p>
            </div>
            <div className='posts-grid'>
                <div className='post-row1'>
                    <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/9/9c/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                    <div className='hd-text'>
                    <button onClick={toggleVisibility}>icon apper</button>
                    {isVisible && <FavoriteIcon className='pro-icon' />}
                    {isVisible && <ChatBubbleOutlineIcon className='pro-icon'/>}
                       {/* <p><FavoriteIcon className='pro-icon'/> 27 </p>  */}
                       {/* <p> <ChatBubbleOutlineIcon className='pro-icon'/> 0</p> */}
                    </div>
        
                </div>

                <div className='post-row1'>
                    <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/9/9c/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                </div>

                <div className='post-row1'>
                    <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/9/9c/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                </div>

                </div>
                <div className='posts-grid2'>
                <div className='post-row2'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/9/9c/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                </div>
                 </div>
            <div className='bottom'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <span>© 2024 INSTAGRAM FROM META</span>
        </div>
            </div>
    </div>
  )
}
export default Aarohi;