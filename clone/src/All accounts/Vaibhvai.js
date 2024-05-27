import React, { useEffect } from 'react'
import { Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';

import "./Accounts.css";



export const Vaibhvai = () => {
    useEffect(()=>{
        document.title="Vaibhvai Savle ({@vaibhavi_savle})"
    });
  return (
    <div className='profile'>
        
        <div className='profile__right'>
            <div className='account__data'>
                <Avatar className='photo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '160px', height: '160px'}} />
                <div className='data'>
                <span>@vaibhvai_savle</span>
                <button className='editbtn'>Follow profile</button>
                <SettingsIcon className='settings__icon'/>
                <div className='count'>
                <p>20 post</p>
                <p>16M followers</p>
                <p>299 following</p>
                </div>
                <div className='ko__data'>
                    <p>Vaibhvai Savle</p>
                    <span>my bio </span>

                </div>
                </div>
            </div>
            <div className='stories'>
                <Avatar
                sx={{ p: 0, width: '80px', height: '80px', border: '2px solid grey' , borderRadius: "100%"}}/>
                <p>Turky</p>
                
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
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                    {/* {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px' }} className='post-img' />} */}
                </div>

                <div className='post-row1'>
                    <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                </div>

                <div className='post-row1'>
                    <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                    alt='vaibavi'
                    className='post-img'/>
                </div>

                </div>
                <div className='posts-grid2'>
                <div className='post-row2'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
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
export default Vaibhvai;