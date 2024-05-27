import React , {useEffect , useState }from 'react'
import "./Create.css"
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';


const Create = ({onCreateUpload}) => {
  useEffect(()=>{
    document.title = "Create new post • Instagram"
})

const [image, setImage] = useState(null);



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    onCreateUpload(image);
    alert("Image Is Uplodaed")
  };

 
  return (
    <div className='create__page'>
      <div className='create'>
      <p >Create new post</p>
      <hr/></div>
      <div className='main-box'>
      <div className='playicon'>
        <InsertPhotoOutlinedIcon className='icon1'
        sx={{ p: 0, width: '160px', height: '160px'}}/>
      <SlideshowOutlinedIcon className='icon2'
      sx={{ p: 0, width: '160px', height: '160px'}}/>
      </div>
      <br></br>
        <h3 className='bigtext'>Drag photos and videos here</h3>


        <div className='file-box'>
          
        <label htmlFor="file-upload" className="file-label">
    <span className="placeholder-text" >Choose a file</span>
    <input å
      type="file" 
      accept="image/*" 
      id="file-upload"
      onChange={handleImageChange} 
      style={{ display: 'none' }}
    />
  </label>
 
</div>


{image && <img src={image} alt="Uploaded" style={{ maxWidth: '0px', height: 'auto' }} />}
<br />

<button className='upload-btn' onClick={handleUpload} >Upload Image</button>


      </div>
        <div className='bottom__e'>
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <span>© 2024 INSTAGRAM FROM META</span>
        </div>

        
    </div>
  )
}

export default Create