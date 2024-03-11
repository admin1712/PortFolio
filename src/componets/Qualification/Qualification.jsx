import React, { useState } from 'react';
import './Qualification.css';
import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa6";
import { MdDesktopWindows } from "react-icons/md";

const Qualification = () => {
    const[active,setActive]=useState();
    const showActive=(id)=>{
        console.log(id);
        setActive(id);
    }
  return (
    <section className="qualification section" id="qualification">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personal journey</span>
    <div className="qualification__container container">
        <div className="qualification__tabs">

            <div className={active=="achievements"?"qualification__button button--flex  qualification__active"
            :"qualification__button button--flex "}
             data-target="#achievements">
                <i className="uil uil-trophy qualification__icon"  onClick={()=>showActive("achievements")}><GrCertificate /></i>
                <p className="qualification__header" onClick={()=>showActive("achievements")}>Certification</p>
            </div>
            <div className={active=="work"?"qualification__button button--flex qualification__active":
                         "qualification__button button--flex "} data-target="#work">
                <i className="uil uil-briefcase-alt qualification__icon" onClick={()=>showActive("work")}><MdDesktopWindows /></i>
                <p className="qualification__header" onClick={()=>showActive("work")}>Experience</p>
            </div>
            <div className={active=="education"?"qualification__button button--flex qualification__active":
                         "qualification__button button--flex "} data-target="#education">
                <i className="uil uil-graduation-cap qualification__icon" onClick={()=>showActive("education")}><FaGraduationCap /></i>
                <p className="qualification__header"onClick={()=>showActive("education")}>Education</p>
            </div>
        </div>
        <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 - ACHIEVEMENTS ====================--> */}
            <div className={active=="achievements"?"qualification__content qualification__active":"qualification__content "} data-content="" id="achievements">
                {/* <!--==================== achievements 1 ====================--> */}
                <div className="qualification__data">
                    <div style={{textAlign:'center'}}>
                        <h3 className="qualification__title">Post Graduate Diploma in Advance Computing</h3>
                        <span className="qualification__subtitle">Center for Development of Advanced Computing (C-DAC).
                        </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            March 2022
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                {/* <!--==================== achievements 2 ====================--> */}
                {/* <div className="qualification__data">
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Rasa Contributor</h3>
                        <span className="qualification__subtitle">A starter tag when I first contributed in
                            Rasa</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            June 2021 - Present
                        </div>
                    </div>
                </div> */}
                {/* <!--==================== achievements 3 ====================--> */}
                {/* <div className="qualification__data">
                   
                    <div>
                        <h3 className="qualification__title">Student Leader of the Year 2020</h3>
                        <span className="qualification__subtitle">Awarded by IIT Madras alumni for management and developing systems for student chapter</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            July 2020
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div> */}
            

                {/* <!--==================== achievements 4 ====================--> */}
            {/* <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Winner of TinkaThon - IIT Madras</h3>
                    <span className="qualification__subtitle">A DIY hackathon organised by IIT Madras Alumni Center</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        Nov 2019
                    </div>
                </div>

            </div> */}
        </div>
            {/* <!--==================== QUALIFICATION CONTENT 2 - WORK ====================--> */}
            <div className={active=="work"?"qualification__content qualification__active":"qualification__content "} data-content="" id="work">

                {/* <!--==================== Work 2- current ====================--> */}
                <div className="qualification__data">
                    <div style={{textAlign:'center'}}>
                        <h3 className="qualification__title">Graduate Trainee Engineer</h3>
                        <span className="qualification__subtitle">Emerson Electric & Co<br/>
                         I collaborate with a  highly skilled team of developers, assuming responsiblity for the development ,
                         unit testing and deployment of full-stack web application employing C# .Net and various other technologies,
                        </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            Nov 2022 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                {/* <!--==================== Work 1 ====================--> */}
                {/* <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Image Processing Internship</h3>
                        <span className="qualification__subtitle">CoreEl Technologies - Remote</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            Jun 2020 - Jul 2020
                        </div>
                    </div>
                </div> */}
                    {/* <!--==================== Work 0 ====================--> */}
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Website design Internship</h3>
                            <span className="qualification__subtitle">Kohinoor Group of Industries</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Apr 2020 - Jun 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                
            </div>
            {/* <!--==================== QUALIFICATION CONTENT 3 - EDUCATION ====================--> */}
            <div className={active=="education"?"qualification__content qualification__active":"qualification__content "}data-content="" id="education">
                {/* <!--==================== QUALIFICATION 1 ====================--> */}
                <div className="qualification__data">
                    <div style={{textAlign:'center'}}>
                        <h3 className="qualification__title">Bachelors of Engineering</h3>
                        <span className="qualification__subtitle">D Y Patil School Of Engineering</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2018 - 2021
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                {/* <!--==================== QUALIFICATION 2 ====================--> */}
                {/* <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        
                        <h3 className="qualification__title">Web GIS Technology
                            Certification</h3>
                        <a href="" className="qualification__subtitle">Indian Space Research Organisation</a>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            June 2021 - July 2021
                        </div>
                    </div>

                </div> */}

                {/* <!--==================== QUALIFICATION 3 ====================--> */}
                {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Machine Learning with Python</h3>
                        <a href="https://www.credly.com/badges/9b67ffcc-6c13-40a4-a695-2ef6a1d4fb23/print" target="_blank" className="qualification__subtitle">IBM Badges</a>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            Apr 2020 - May 2020
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div> */}
{/* 
                <!--==================== QUALIFICATION 4 ====================--> */}
                {/* <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Node-RED: basics to bots
                            Certification</h3>
                        <a href="https://www.credly.com/badges/79180d67-c44c-4dfb-8a78-d2234fe3c696/print" className="qualification__subtitle">IBM Badges</a>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            May 2020
                        </div>
                    </div>
                </div>
            */}
                {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">PHP and
                            MySQL Training</h3>
                        <span className="qualification__subtitle">Spoken Tutorials - IIT Bombay</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            Feb 2020
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div> */}

       {/* <!--==================== QUALIFICATION 6 ====================--> */}
       <div className="qualification__data">
        <div></div>

        {/* <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
        </div> */}
        {/* <div>
            <h3 className="qualification__title">Java and Python 3.4.3
                Certification</h3>
            <span className="qualification__subtitle">Spoken Tutorials - IIT Bombay</span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                Feb 2020
            </div>
        </div> */}



        </div>
    </div>

</div></div></section>
  )
}

export default Qualification
