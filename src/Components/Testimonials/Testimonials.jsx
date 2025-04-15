import React, {useRef}from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonialsData = [
  {
    name: 'William Jackson',
    location: 'Edusity, USA',
    image: user_1,
    testimonial:
      'Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The faculty is incredibly supportive and the curriculum is designed to prepare students for real-world challenges. The hands-on experience I gained during my time here has been invaluable.',
  },
  {
    name: 'Sophia Martinez',
    location: 'Edusity, Canada',
    image: user_2,
    testimonial:
      'Edusity provided me with the tools and knowledge I needed to excel in my career. The professors are experts in their fields, and the learning environment is both challenging and supportive.',
  },
  {
    name: 'Liam Johnson',
    location: 'Edusity, UK',
    image: user_3,
    testimonial:
      'The practical approach to learning at Edusity helped me gain real-world skills. The projects and internships were particularly valuable in preparing me for my current role.',
  },
  {
    name: 'Emma Brown',
    location: 'Edusity, Australia',
    image: user_4,
    testimonial:
      'I am so grateful for my time at Edusity. The friendships I made and the knowledge I gained have been life-changing. I highly recommend Edusity to anyone looking to further their education.',
  },
];

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25; // Move the slider forward
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25; // Move the slider backward
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} /> {/* Fixed onClick */}
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} /> {/* Fixed onClick */}
      <div className="slider">
        <ul ref={slider}>
          {testimonialsData.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial.image} alt={`${testimonial.name}'s profile`} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.testimonial}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;