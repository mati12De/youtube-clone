import React from 'react'
import  './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import  save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>best  Youtube channel to learn web development</h3>
        <div className='play-video-info'>
          <p>1525 views &bull; 2days ago</p>
        <div>
        <span><img src={like} alt=''/>125</span>
        <span><img src={dislike} alt=''/>2</span>
        <span><img src={share } alt=''/>share </span>
        <span><img src={save} alt=''/>save</span>
        <span><img src={like}/>125</span>
       </div>
    </div>
    <hr/>
    <div className="publisher">
      <img src={jack} alt=''/>
      <div>
        <p> GreatStack</p>
        <span>1m subscribers</span>
      </div>
      <button> subscribe</button>
    </div>
    </div>
  )
}    

export default PlayVideo