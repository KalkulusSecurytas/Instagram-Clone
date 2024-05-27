import React, { useEffect } from 'react';
import "./Profile.css";
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Profile = ({image}) => {

    useEffect(() => {
        document.title = "Avadhoot Savle (@avadhoot_savle)";
    }, []);


    return (
        <div className='profile'>
            <div className='profile__right'>
                <div className='account__data'>
                    <Avatar
                        className='photo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg'
                        sx={{ p: 0, border: '2px solid', borderColor: 'background.body', width: '160px', height: '160px' }}
                    />
                    <div className='data'>
                        <span>@avadhoot_savle</span>
                        <button className='editbtn' >Edit profile</button>
                        <SettingsIcon className='settings__icon' />
                        <div className='count'>
                            <p>0 post</p>
                            <p>156 followers</p>
                            <p>156 following</p>
                        </div>
                        <div className='ko__data'>
                            <p >Avadhoot Amol Savle</p>
                            <span>CEO / Founder of <span className='kal__white'>KALKULUS </span><span className='kal__red'>SECURYTAS</span></span>
                        </div>
                    </div>
                </div>
                <div className='stories'>
                    <AddIcon
                        sx={{ p: 0, width: '80px', height: '80px', border: '2px solid grey', borderRadius: "100%" }}
                    />
                    <p>new</p>
                </div>
                <hr className='end__line'/>
                <div className='info__profile'>
                    <GridOnIcon className='icons'/>
                    <p>POSTS</p>
                    <BookmarkBorderIcon className='icons'/>
                    <p>SAVED</p>
                </div>
                <div className='posts-grid'>
                    <div className='post-row1'>
                        {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px' }} className='post-img-b' />}
                    </div>
                    <div className='post-row1'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                            alt='vaibavi'
                            className='post-img-b'
                        />
                    </div>
                    <div className='post-row1'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                            alt='vaibavi'
                            className='post-img-b'
                        />
                    </div>
                </div>
                <div className='posts-grid2'>
                    <div className='post-row2'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg'
                            alt='vaibavi'
                            className='post-img-b'
                        />
                    </div>
                </div>
                <div className='bottom'>
                    <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
                    <span>© 2024 INSTAGRAM FROM META</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
