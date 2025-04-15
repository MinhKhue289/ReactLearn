import React, { useState } from 'react';
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const About = () => {
  const [playState, setPlayState] = useState(false); // Define playState and setPlayState

  const handlePlayVideo = () => {
    setPlayState(true); // Set playState to true to show the video player
  };

  return(
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={handlePlayVideo}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Embark on a transformative educational journey width
                our university's comperhensive education programs. Our
                cutting-edge curiculum is designed to empower students with the
                knowledge, skills, and confidence needed to excel in the dynamic
                field of technology.
            </p>
            <p>
                With a main focus on innovation, hand-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a meaningful
                impact in classrooms, schools, and comunities.
            </p>
            <p>
                Whether you aspire to be a teacher, administrator, or education leader, our university
                provides the tools and support you need to succeed. Join us in shaping the future of education
                and empowering the next generation of learners.
            </p>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default About