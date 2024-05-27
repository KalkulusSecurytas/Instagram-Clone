import React, { useEffect } from 'react'
import { Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import "./Accounts.css";

export const Amol = () => {
    useEffect(()=>{
        document.title="Amol Savle (@amol_savle)"
    });
  return (
    <div className='profile'>
        
        <div className='profile__right'>
            <div className='account__data'>
                <Avatar className='photo'
                src='https://upload.wikimedia.org/wikipedia/commons/8/8f/%E7%A6%8F%E5%B7%9E%E7%86%8A%E7%8C%AB%E4%B8%96%E7%95%8C-%E7%86%8A%E7%8C%AB%E5%B7%B4%E6%96%AF02.jpg'
                sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '160px', height: '160px'}} />
                <div className='data'>
                <span>@amol_savle</span>
                <button className='editbtn'>Follow </button>
                <SettingsIcon className='settings__icon'/>
                <div className='count'>
                <p>20 post</p>
                <p>16M followers</p>
                <p>299 following</p>
                </div>
                <div className='ko__data'>
                    <p>Amol Savle</p>
                    <span>my bios </span>
                </div>
                </div>
            </div>
            
            <hr className='end__line'/>
            <div className='info__profile'>
                <GridOnIcon className='icons'/>
                <p>POSTS</p>
                <BookmarkBorder className='icons'/>
                <p>SAVED</p>
            </div>
            <div className='no__photo__amol'>
                <CameraAltOutlinedIcon sx={{ p: 0, width: '80px', height: '80px' , border: '2px solid white', borderRadius: "50%", padding: "10px"}}/>
                <h3>No Post Yet</h3>
            </div>
            
            <div className='bottom'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <span>© 2024 INSTAGRAM FROM META</span>
        </div>
            </div>
    </div>
  )
}
