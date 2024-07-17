import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">

        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                
                <div className={toggleState === 1 ? "qualification_button qualification_active button_flex" : "qualification_button button_flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button_flex" : "qualification_button button_flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>

            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content_active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">B.Tech Computer science and engineering</h3>
                            <span className="qualification_subtitle">Maharshi Dayanand University, Rohtak</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Senior Secondary</h3>
                            <span className="qualification_subtitle">International public school, Charkhi Dadri</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2019-2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">

                    <div>
                            <h3 className="qualification_title">Secondary</h3>
                            <span className="qualification_subtitle">Golden valley school, Charkhi Dadri</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2017-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div></div>
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content_active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Python development intern</h3>
                            <span className="qualification_subtitle">CodeClause</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Jul 2023 - Aug 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Growth manager intern</h3>
                            <span className="qualification_subtitle">Prepinsta</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Apr 2023 - Jun 2023
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
