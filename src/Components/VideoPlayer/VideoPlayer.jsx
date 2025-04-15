import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../Assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {

const player = useRef(null);
const closePlayer =(e)=> {
    if (e.target === player.current) {
        setPlayState(false); // Close the video player when clicking outside the video element
    }
}
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      
      <video autoPlay muted controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;