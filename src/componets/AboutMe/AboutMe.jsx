import React from 'react'
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                {/* <img src="assets/img/about.jpg" alt="" className="about__img"/> */}
                <div className="about__data">
                    <p className="about__description">
                        My job entails creating and implementing User interfaces. I've primarily worked on Frontend and Software development
                        frameworks like React and .Net.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">01+</span>
                            <span className="about__info-name">Years  experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">04+</span>
                            <span className="about__info-name">Completed  project</span>
                        </div>
                        <div>
                            <span className="about__info-title">01+</span>
                            <span className="about__info-name">Companies  worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="../../assets/resume/Aishwarya__Resume.pdf" target="_blank" className="button button--flex">
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>

                    </div>
                </div>
            </div>

        </section>
  )
}

export default AboutMe
