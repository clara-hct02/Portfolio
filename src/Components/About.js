import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Clara He</b> and I am from Vancouver, Canada.
            I am a 4th year undergraduate student pursuing a <b>Combined Major in Computer Science and Math</b>. <br/><br/>
            {/* I have done an internship as a <b>software developer</b> at GoalFi which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/devansh_sahni_/?hl=en" target='_blank'>Instagram.</a> */}
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Java'/>
        <Skills skill='Python'/>
        <Skills skill='C++' />
        <Skills skill='Javascript'/>
        <Skills skill='TypeScript'/>
        <Skills skill='HTML5'/>
        <Skills skill='SQL'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='React' />
        <Skills skill='Figma' />
        <Skills skill='Photoshop' />
        <Skills skill='Vercel' />

      </div>
    </>
  )
}

export default About