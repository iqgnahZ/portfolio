import { FaWeixin, FaPlay } from 'react-icons/fa'
import './home.css' 
import PersonImg from '../assets/Rick.png'
import { cards } from '../utils/Data.js'
import Card from '../components/card/Card.jsx'
import { v4 as uuid } from 'uuid'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'


import Portfolio1 from '../assets/project-slider-img-1.webp'
import Portfolio2 from '../assets/project-slider-img-2.webp'
import Portfolio3 from '../assets/project-slider-img-3.webp'
import Portfolio4 from '../assets/project-slider-img-4.webp'


const Home = () => {
  
  const skillRef = useRef(null)
  const swiperRef = useRef(null)

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

  useEffect(() => {
    register()
    const params = {
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        allowTouchMove: true,
      },
    }

    Object.assign(swiperRef.current, params)
    swiperRef.current.initialize()
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
            <h3 className="section__lable">My Skills</h3>
            <h2 className="section__title">My Specials skills are</h2>
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

      <section className="portfolio" id='portfolio'>
        <h3 className="section__lable">My Portfolio</h3>
        <h2 className="section__title">My Complete Projects</h2>
        <div className="portfolio__grid">
          <div className="portfolio__card">
            <img src={Portfolio1} alt="portfolio 1" />
            <div className="portfolio__card-title">Portfilio 1</div>
          </div>
            <div className="portfolio__card">
            <img src={Portfolio2} alt="portfolio 2" />
            <div className="portfolio__card-title">Portfilio 2</div>
          </div>
            <div className="portfolio__card">
            <img src={Portfolio3} alt="portfolio 3" />
            <div className="portfolio__card-title">Portfilio 3</div>
          </div>
            <div className="portfolio__card">
            <img src={Portfolio4} alt="portfolio 4" />
            <div className="portfolio__card-title">Portfilio 4</div>
          </div>
        </div>
      </section>
      
			<section className='testimonials' id='testimonials'>
				<h3 className='section__label'>Testimonials</h3>
				<h2 className=' section__title'>Satisfied Clients Say</h2>
				<div className='testimonials__wrapper'>
					{/* <swiper-container speed='500' ref={swiperRef} css-mode='true'> */}
          <swiper-container speed='500' ref={swiperRef}>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptatibus, enim.
								</div>
								<div className='testimonials__author'>Blake</div>
								<div className='testimonials__author-title'>
									CEO Carrington Atlantic
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptatibus, enim.
								</div>
								<div className='testimonials__author'>Fallon</div>
								<div className='testimonials__author-title'>
									CEO Fallon Unlimited
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptatibus, enim.
								</div>
								<div className='testimonials__author'>Sam</div>
								<div className='testimonials__author-title'>CEO Van Kirk</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptatibus, enim.
								</div>
								<div className='testimonials__author'>Steven</div>
								<div className='testimonials__author-title'>
									CEO carrington foundation
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptatibus, enim.
								</div>
								<div className='testimonials__author'>Steve</div>
								<div className='testimonials__author-title'>CEO Dan Joe</div>
							</div>
						</swiper-slide>
					</swiper-container>
				</div>
			</section>
    </div>
  )
}

export default Home