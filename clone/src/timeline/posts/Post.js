import React , {useState} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';


const Post = ({user , postImage , likes , timestamp , profile}) => {
    const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__nametop'>
            <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>
             {user}  •  <span>{timestamp}</span>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className='post__image'>
            <img src={postImage} alt='Post' />
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
            <div className="post__iconsMain">
            <button className='like__button' onClick={handleLike}>
      {liked ? <FavoriteIcon className="postIcon , like__icon"  /> : <FavoriteBorderIcon className="postIcon" />}
    </button>
            
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
                <div className='post__iconsSave'>
                <BookmarkBorderIcon className="postIcon" />
                </div>
            </div>
            {likes} likes
            <div className='post__comments'>
                <input type='text' className='post__text' placeholder=' Add a comment.....'></input><span>Post</span>
                
            </div>
            <hr className='post__end'></hr>
        </div>
    </div>
  )
}

export default Post