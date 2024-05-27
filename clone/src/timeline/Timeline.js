import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Post from './posts/Post'



function Timeline() {
    useEffect(()=>{
        document.title = "Instagram"
    })
    const [posts] = useState([
        {
        profile : "https://static.toiimg.com/thumb/msid-74026740,width-400,resizemode-4/74026740.jpg",
        user: "avadhoot_amol_savle " ,
        postImage: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        likes: 120,
        timestamp: "2d",
    },
    {
        user: "aarohi_amol_savle " ,
        postImage: "https://wallpapers.com/images/featured/image-79gc4p3mqu7an848.jpg",
        likes: "12k",
        timestamp: "2h",
    },
    {
        user: "vaibahvi_amol_savle " ,
        postImage: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
        likes: 322,
        timestamp: "12d",
    },
    {
        user: "komal_Kalbande",
        postImage: "https://images.pexels.com/photos/2649841/pexels-photo-2649841.jpeg",
        likes: 215,
        timestamp: "3h",
    },
    {
        user: "sara_smith",
        postImage: "https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg?cs=srgb&dl=pexels-sara-smith-987654.jpg&fm=jpg",
        likes: 532,
        timestamp: "1w",
    },
    {
        user: "alex_wong",
        postImage: "https://images.squarespace-cdn.com/content/v1/646f9750a4580541bb72e146/867de25e-1fd5-4753-895d-c35e6cc65e9d/mexicano_68.jpg",
        likes: 123,
        timestamp: "2d",
    },
    {
        user: "emily_jones",
        postImage: "https://www.pocruises.com/content/dam/po/inventory-assets/ports/OL1/OL1.jpg.1649931652781.image.1536.1048.low.jpg",
        likes: 876,
        timestamp: "1m",
    },
    {
        user: "michael_choi",
        postImage: "https://www.pocruises.com/content/dam/po/inventory-assets/ports/ATH/ATH.jpg.1649931467592.image.1536.1048.low.jpg",
        likes: 431,
        timestamp: "5h",
    },
    {
        user: "laura_garcia",
        postImage: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRyZWUlMjBzcGFsaW5nfGVufDB8fHx8MTY5MjI3NjIxMHww&ixlib=rb-4.0.3&fm=jpg&w=4928&h=3264&fit=max",
        likes: 732,
        timestamp: "2w",
    },
    {
        user: "chris_evans",
        postImage: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
        likes: 620,
        timestamp: "4d",
    },
    {
        user: "sophia_leo",
        postImage: "https://images.pexels.com/photos/987123/pexels-photo-987123.jpeg?cs=srgb&dl=pexels-sophia-li-987123.jpg&fm=jpg",
        likes: 287,
        timestamp: "1h",
    },
    {
        user: "david_smith",
        postImage: "https://fileinfo.com/img/ss/xl/jpg_44-2.jpg",
        likes: 943,
        timestamp: "3w",
    },
    {
        user: "amanda_brown",
        postImage: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Junonia_lemonias_DSF_upper_by_Kadavoor.JPG",
        likes: 514,
        timestamp: "6d",
    },
    {
        user: "nature_lover123",
        postImage: "https://upload.wikimedia.org/wikipedia/commons/8/8f/%E7%A6%8F%E5%B7%9E%E7%86%8A%E7%8C%AB%E4%B8%96%E7%95%8C-%E7%86%8A%E7%8C%AB%E5%B7%B4%E6%96%AF02.jpg",
        likes: 789,
        timestamp: "1d",
        }
        ,
        {
        user: "travel_adventurer",
        postImage: "https://png.pngtree.com/thumb_back/fh260/background/20240107/pngtree-water-snow-hd-jpg-image_13132957.png",
        likes: 632,
        timestamp: "2d",
        }
        ,
        {
        user: "foodie_explore",
        postImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1679313708/fom-website/2018-redesign-assets/Tag%20collections/Other/NetZero_Car_i4_i3_0004.jpg.transform/9col/image.jpg",
        likes: 921,
        timestamp: "3d",
        }
        ,
        {
        user: "fitness_journey",
        postImage: "https://www.verywellfit.com/thmb/1fIJ6N0NZihSzfJ_mD6zVA0i9kQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3498487-GettyImages-1294920516-603154e9c7a14fcc8ecb5dd94e7ab508.jpg",
        likes: 745,
        timestamp: "5d",
        }
        ,
        {
        user: "art_enthusiast",
        postImage: "https://www.dhs.gov/sites/default/files/styles/large_card/public/2024-02/24_0206_opa_faith-based-resources-worship-large-card.jpg.webp?itok=VDHAJ8zo",
        likes: 876,
        timestamp: "1w",
        }
        ,
        {
        user: "pet_lover",
        postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1024px-Cute_dog.jpg",
        likes: 1023,
        timestamp: "4h",
        }
        ,
        {
        user: "music_addict",
        postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        likes: 567,
        timestamp: "2w",
        }
        ,
        {
        user: "fashionista",
        postImage: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
        likes: 654,
        timestamp: "6h",
        }
        ,
        {
        user: "bookworm_reads",
        postImage: "https://www.befunky.com/images/prismic/b60244c7-087b-409a-961b-831999aa5085_llama.jpg?auto=avif,webp&format=jpg&width=1920&height=1920&fit=bounds",
        likes: 823,
        timestamp: "3w",
        },
        
        {
        user: "DIY_crafts",
        postImage: "https://images.squarespace-cdn.com/content/v1/61afda8749a97e6db2e64ae0/1648253869084-7TB2S9ASUG7DS6VCB131/Brasa_0437.jpg",
        likes: 789,
        timestamp: "1d",
        }
        
        
        
        
        
        
]);
  return (
    <div className='timeline'>
        
        <div className='timeline__left'>
            <div className='timeline__posts'>
              {posts.map((post)=> (
                <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
              ))}
              
            </div>
        </div>
        
        <div className='timeline__right'>
       
            <Suggestion/>
        </div>
    </div>
    
  )
  
}

export default Timeline