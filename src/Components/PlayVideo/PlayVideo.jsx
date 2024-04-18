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
    </div>
  )
}    

export default PlayVideo