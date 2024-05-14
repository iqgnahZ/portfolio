import { FaWeixin, FaPlay } from 'react-icons/fa'
import './home.css' 
import PersonImg from '../assets/Rick.png'

const Home = () => {
  return (
    <div className="container home">
      <section className='person-section' id='home'>
        <div className='person-section__left '>
          <div className='person-section__special-text'>
            Hello I am <br/> Rick
          </div>
          <div className='person-section__paragraph'>
            <h3>
              Fronted Developer specialised in HTML, CSS, JavaScript and React
            </h3>
          </div>
          <a href="resume.pdf" download='resume.pdf' className='button'>Get Resume</a>

          <div className='video-link'>
            <div className='link'>
              <a href="https://www.youtube.com/watch?v=GyN0KOxTwYM&t=4s">
                <FaPlay/>
              </a>
            </div>
            <span>Video Link</span>
          </div>
        </div>
        <div className='person-section__right'>
          <div className="person-section__image">
            <img src={PersonImg} alt="person_img" />
            <div className="person-section__image-half-round-shape"></div>
            <div className="social-links">
              <a href="">
                <FaWeixin/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home