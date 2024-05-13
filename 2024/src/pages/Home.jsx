import { FaWeixin, FaPlay } from 'react-icons/fa'
import './home.css' 
import HeroImg from '../assets/dev.png'

const Home = () => {
  return (
    <div className="container home">
      <section className='hero-section' id='home'>
        <div className='hero-section__left '>
          <div className='hero-section__special-text'>
            Hello I am <br/> Rick
          </div>
          <div className='hero-section__paragraph'>
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
        <div className='hero-section__right'>
          <div className="hero-section__image">
            <img src={HeroImg} alt="hero_img" />
            <div className="hero-section__image-half-round-shape"></div>
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