import { FaWeixin, FaPlay } from 'react-icons/fa'
import './home.css' 
import PersonImg from '../assets/Rick.png'
import { cards } from '../utils/Data.js'
import Card from '../components/card/Card.jsx'
import { v4 as uuid } from 'uuid'
import { useEffect, useRef } from 'react'



const Home = () => {
  
  const skillRef = useRef(null)

  useEffect(()=> {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressbar()
            observer.disconnect()
          }
        })
      }, {threshold: 0.5}
    )
    observer.observe(skillRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll('.skill__progress-line')
    progressBars.forEach((progressBar)=>{
      const percent = progressBar.getAttribute('data-width')
      progressBar.style.width = `${percent}%`
    })
  }
  
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

      <section className="services" id="services">
        <h3 className='section__lable'>My Services</h3>
        <h2 className='section__title'>
          Services Provided to my clients.
        </h2>
        <div className="cards">
          {cards?.map((card)=>(
            <Card key={uuid()} icon={card?.icon} title={card?.title} features={card?.features}/>
          ))}
        </div>
      </section>

      <section className='skill' id='skills' ref={skillRef}>
          <div className="skill__left">
            <div className="section__lable">My Skills</div>
            <div className="section__title">My Specials skills are</div>
            <a href="/resume.pdf" download={'resume.pdf'} className='button'>Get Resume</a>
          </div>
          <div className="skill__right">
            <div className="skill__wrapper">
              <div className="skill__tag">Development</div>
              <div className="skill__box">
                <div className="skill__progress-line" data-width='75'></div>
                <div className="skill__percentage">75%</div>
              </div>
            </div>
              <div className="skill__wrapper">
              <div className="skill__tag">Design</div>
              <div className="skill__box">
                <div className="skill__progress-line" data-width='85'></div>
                <div className="skill__percentage">85%</div>
              </div>
            </div>
              <div className="skill__wrapper">
              <div className="skill__tag">Cloud</div>
              <div className="skill__box">
                <div className="skill__progress-line" data-width='95'></div>
                <div className="skill__percentage">95%</div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Home