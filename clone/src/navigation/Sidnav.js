import React from 'react';
import "./Sidnav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


const Sidnav = () => {
 
  return (
    <div className='sidenav'>
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt='Insta logo'
      />

      <div className='sidenav__buttons'>
        <Link to="/" className='link'>
          <button  className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </button></Link>
         
        <Link to="/search" className='link'>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        </Link>
        <Link to="/explore" className='link'>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        </Link>
        <Link to="/reels" className='link'>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        </Link>
        <Link to="/messages" className='link'>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        </Link>

        <Link to="/notifications" className='link'>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        </Link>
        <Link  to="/create" className='link'>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button></Link>


        <Link to="profile" className='link'>
        <button className=" profile__button"  >
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg"
            sx={{ p: 0, border: '2px solid', borderColor: 'background.body'  , width: '30px', height: '30px'}}
          />
          <span>Profile</span>
        </button></Link>
        
      </div>
      

      <div className='sidenav__more'>
      {/* <button className='sidenav__button'>
          <MenuIcon/>
          <span>More</span>
        </button> */}
        <Link to="/logout" className='link'>
        <button className="sidenav__button" >
          <LogoutIcon/>
              <span>Logout</span>
            </button></Link>
      </div>
    </div>
  );
};

export default Sidnav;