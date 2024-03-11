import React, { useState } from 'react';
import './Skills.css';
import { BsDatabaseFill } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const[skillOpen,setSkillOpen]=useState(false);
    const [id,setid]=useState(0);
    const handleArrowClick=(id)=>{
    
        console.log(id);
      if(skillOpen)
      {
        setSkillOpen(false);
        setid(id);
      }
      else{
        setSkillOpen(true);
        setid(id);
      }
    }
  return (

   <div id="skill">
       <h2 className="section__title">Skills</h2>
       <span className="section__subtitle"> Technical level</span>
       <div className='skills__container container grid '>
       {/* <BsDatabaseFill /> */}
      
        <div className={skillOpen && id==0 ?'skill__open':'skills__content skills__close'}>
              <div className='skills__header'>
              {/* <VscGlobe size={'30px'} /> */}
              <div>
                  <h1 className="skills__title">Frontend Development</h1>
                  <span className="skills__subtitle">More than 1 years</span>
            </div>
            <i className="uil uil-angle-down skills__arrow">
             <IoIosArrowDown onClick={()=>handleArrowClick(0)} />
            </i>
          
             </div>
             <div className="skills__list grid" id='list_grid'>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__number">90%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__html"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__css"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">JavaScript</h3>
                                        <span className="skills__number">60%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__javascript"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">React Js</h3>
                                        <span className="skills__number">75%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </div>
                                </div>
                            </div>
         </div>
         
         <div className={skillOpen && id==1 ?'skill__open':'skills__content skills__close'}>
                            <div className="skills__header">
                                <i className="uil uil-arrow skills__icon"></i>
                                <div>
                                    <h1 className="skills__title">Programming Languages</h1>
                                    <span className="skills__subtitle">More than 1 years</span>
                                </div>
    
                                <i className="uil uil-angle-down skills__arrow">
                                <IoIosArrowDown onClick={()=>handleArrowClick(1)}  />
                                </i>
                            </div>
    
                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Java</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__java"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">C#</h3>
                                        <span className="skills__number">70%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__python"></span>
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        <div className={skillOpen && id==2 ?'skill__open':'skills__content skills__close'}>
                        <div className="skills__header">
                            <i className="uil uil-database skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Database</h1>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow">
                             <IoIosArrowDown onClick={()=>handleArrowClick(2)} />
                            </i>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sql"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={skillOpen && id==3 ?'skill__open':'skills__content skills__close'}>
                        <div className="skills__header">
                            <i className="uil uil-code-branch skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Other Technologies</h1>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow">
                            <IoIosArrowDown onClick={()=>handleArrowClick(3)}  />
                            </i>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__git"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Docker</h3>
                                    <span className="skills__number">30%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__docker"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Django</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__django"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                          
        
       </div>
   </div>
  )
}

export default Skills
