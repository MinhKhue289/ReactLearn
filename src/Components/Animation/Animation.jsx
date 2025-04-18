import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Animation.css';
import Animation3 from '../../assets/Animation3.lottie'; // Import the animation file

const Animation = () => {
  return (
    <div className="animation-container">
      <div className="animation">
        <DotLottieReact
          src={Animation3} // Use the imported animation file
          loop
          autoplay
          style={{ width: '200px', height: '200px', zIndex: 100, position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  );
};

export default Animation;