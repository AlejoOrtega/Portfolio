import React from 'react';
import projectCourses from '../images/project-courses.jpg';
import projectWomen from '../images/project-women-tech.jpg';
import projectWire from '../images/project-wire-ipsum.jpg';

const ProjectList = () => {
    return ( 
        <section className="projects">
            <div className="content-wrap divider">
                <h2>Featured Projects</h2>
                <p>View selected projects below. More information can be found at <a href="https://github.com/AlejoOrtega">my github</a>.</p>

                {/* <!-- Project 1 --> */}
                <section className="project-item">
                    <img src={projectCourses} alt="Lynda & LinkedIn Learning course list"/>
                    <h3>Lynda / LinkedIn Learning Courses</h3>
                    <p>Developed content and instruction for various CSS and front-end focused web development courses including CSS Essential Training, Getting Your Website Online, Design Systems & Architectures and more.</p>
                    <a className="btn" href="https://www.linkedin.com/learning/instructors/christina-truong?u=2125562" target="_blank">LinkedIn Learning</a>
                    <a className="btn" href="https://www.lynda.com/Christina-Truong/7842227-1.html">Lynda.com</a>
                </section>

                {/* <!-- Project 2 --> */}
                <section className="project-item">
                    <img src={projectWomen} alt="Women and Tech website"/>
                    <h3>Women&&Tech</h3>
                    <p>Women&&Tech was launched in 2012 to feature interviews with different women working in the tech industry. I became familiar with them when I was invited to be one of the interviewees! A few years later, I joined the team and helped with the relaunch of the site as the front-end architect.</p>
                    <a className="btn" href="http://christinatruong.com/projects/women-and-tech-redesign.html" target="_blank">View the case study</a>
                </section>

                {/* <!-- Project 3 --> */}
                <section className="project-item">
                    <img src={projectWire} alt="The Wire Ipsum website"/>
                    <h3>The Wire Ipsum</h3>
                    <p>After coming back from teaching a JavaScript workshop, I felt inspired to create something just for fun. I realized that of all the content/lorem ipsum generators available, there was nothing for HBO’s The Wire fans. I searched for <a href="http://thewireipsum.com" target="_blank">thewireipsum.com</a> domain and it was available! Generate some content for your projects today.</p>
                    <a className="btn" href="http://thewireipsum.com" target="_blank">View live site</a>
                </section>
            </div>
        </section>
     );
}
 
export default ProjectList;