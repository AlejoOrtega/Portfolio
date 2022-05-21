import React from 'react';


const WorkExperience = () => {
    return ( 
        <section className="work-experience">
            <div className="content-wrap item-details divider">
                <h2>Work Experience</h2>
                <p>See my complete work history on <a href="https://www.linkedin.com/in/xrevollo/">LinkedIn</a>.</p>

                {/* <!-- Job 1 --> */}
                <section className="job-item">
                    <div className="job-details">
                        <h3>Registrar</h3>
                        <p>New York Presbyterian</p>
                        <p>Sep 2021 - Mar 2022</p>
                        <p>New York, USA</p>
                    </div>
                    <div className="job-summary">
                        <p></p>
                        <p>Key contributions:</p>
                        <ul>
                            <li>Internally auditing admission and patient paperwork to ensure compliance with hospital policies and procedures, ethical practices and the guidelines of government and accrediting organizations</li>
                            <li>Monitoring, evaluating and revising admission and registration procedures to make maximum use of technology and to provide optimal service to patients.</li>
                        </ul>
                    </div>
                </section>

                {/* <!-- Job 2 --> */}
                <section className="job-item">
                    <div className="job-details">
                        <h3>Full-Stack Developer</h3>
                        <p>Diabetrics</p>
                        <p>Dec 2019 - Sep 2020</p>
                        <p>Barranquilla, Colombia</p>
                    </div>
                    <div className="job-summary">
                        <p>Only engineer on-site managing and developing new features for <a href={'https://zutrics.com/#/'}>Zutrics</a> infrastructure</p>
                        <p>Key contributions:</p>
                        <ul>
                            <li>Implemented capturing data from photos with artificial intelligence, using Microsoft Computer Vision API within React Native Framework using JavaScript.</li>
                            <li>Collaborated with a multidisciplinary group of 8 engineers to study and connect a medical device via Bluetooth to the software platform using React Native framework.</li>
                       </ul>
                    </div>
                </section>

                {/* <!-- Job 3 --> */}
                <section className="job-item">
                    <div className="job-details">
                        <h3>Internship System Engineer</h3>
                        <p>Diabetrics</p>
                        <p>Jun 2019 - Dec 2019</p>
                        <p>Barranquilla, Colombia</p>
                    </div>
                    <div className="job-summary">
                    <p> Part of the Analytics team to analyze data sources and proposing solutions to strategic planning problems on a one-time or periodic basis.</p>
                    <p>Key contributions:</p>
                        <ul>
                            <li>Automated budget calculations process using VBA which reduced process duration by 60%.</li>
                            <li>Translated requirements into polish, high-level project that contributed new
                                finished tools that satisfied the company needs using user feedback and project
                                management tools such as Jira.</li>
                            <li>Developed a Power BI Dashboard that was connected to SQL Server database
                                that gave real-time statics to a community of doctors about Colombia's
                                diabetes population.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
     );
}
 
export default WorkExperience;