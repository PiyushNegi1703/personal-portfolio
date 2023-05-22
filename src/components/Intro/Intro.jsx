import './Intro.scss'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span>
            <span>Piyush Singh Negi</span>
            <Typewriter
              options={{
                strings: ['Experienced full stack web developer.', 'Dedicated to creating robust, innovative digital solutions.', 'Strong foundation in front-end and back-end development.', 'Specializing in responsive websites and dynamic applications.'],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
        </div>

        <button className="i-button">Contact Me</button>

        <div className="social-wrapper">
          <span>Social Media</span>
          <div className='social-container space-around'>
            <a href="/" className='social-btn align-center'><BsGithub fill='#171515' /></a>
            <a href="/" className='social-btn align-center'><BsLinkedin fill='#0a66c2' /></a>
            <a href="/" className='social-btn align-center'><BsInstagram fill='#d62976' /></a>
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="img-container align-center">
          <div className="drop align-center" style={{'--cir': '#5D7BE9'}}>
            <div className="content">
              <img src="./profile.png" alt="" />
            </div>
          </div>

          <div className='box'>
            <span className='emo'>🏆</span><span> Full Stack Web Developer</span>
          </div>
          <div className='box design'>
            <span className='emo'>✨</span><span> Skilled Web Designer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
