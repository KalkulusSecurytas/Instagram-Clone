import React, {useState} from 'react'
import "./Homepage.css"
import Sidnav from './navigation/Sidnav'
import Timeline from './timeline/Timeline'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Profile from './buttons/Profile'
import Userpage from './login/Userpage'
import Create from './buttons/Create'
import Pagenotfound from './Pagenotfound'
import Search from './buttons/Search'
import { Aarohi } from './All accounts/Aarohi'
import { Amol } from './All accounts/Amol'
import { Vaibhvai } from './All accounts/Vaibhvai'
import Forgotpass from './login/Forgotpass'
import Explore from './explore/Explore'
import Nosidnav from './Nosidnav'
function Homepage() {

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };
  return (
    
    <div className='homepage'>
        
            
            <BrowserRouter>
            <div className='homepage__nav'>
              <Nosidnav>
            <Sidnav/>
            </Nosidnav>

            </div>
            <div className='homepage__timeline'>
            <Routes>
              
              <Route path='/' element={<Timeline/>}/>
              <Route path='profile' element={<Profile image={uploadedImage}/>}/>
              <Route path='/logout' element={<Userpage/>}/>
              <Route path='/create' element={<Create onCreateUpload={handleImageUpload}/>}/>
              <Route path='/search' element={<Search/>} />
              <Route path='/profile/@avdhoot_savle' element={<Profile image={uploadedImage}/>} />
              <Route path='/profile/@aarohi_savle' element={<Aarohi/>} />
              <Route path='/profile/@amol_savle' element={<Amol/>} />
              <Route path='/profile/@vaibhavi_savle' element={<Vaibhvai image={uploadedImage}/>} />
              <Route path='/resetpassword' element={<Forgotpass/>} />
              <Route path='/explore' element={<Explore/>}/>
              <Route path='*' element={<Pagenotfound/>} />
              <Route/>
            </Routes>
            </div>
            </BrowserRouter>
            
      
    
    </div>

  )
}

export default Homepage