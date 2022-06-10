import React from 'react';
import projectFlappy from '../images/flappy-sinatra.png';
import projectCork from '../images/cork-bored.png';

const ProjectList = () => {
    return ( 
        <section className="projects">
            <div className="content-wrap divider">
                <h2>Featured Projects</h2>
                <p>View selected projects below. More information can be found at <a href="https://github.com/AlejoOrtega">my github</a>.</p>

                {/* <!-- Project 1 --> */}
                <section className="project-item">
                    <img src={projectFlappy} alt="Flappy Bird Sinatra"/>
                    <h3>Flappy Bird Sinatra</h3>
                    <p>A Full Stack Project, work with React and Ruby. MVC pattern implemented using sinatra to connect Front and Back ends and Active-Record to handle the MC of the project. <br/> <br/>Soon will be available Online! </p>
                    <a className="btn" href="https://github.com/AlejoOrtega/flappy-bird-client">Client Repo</a>
                    <a className="btn" href="https://github.com/AlejoOrtega/flappy-bird-server">Server Repo</a>
                </section>

                {/* <!-- Project 2 --> */}
                <section className="project-item">
                    <img src={projectCork} alt="Cork-Bored"/>
                    <h3>Cork-Bored</h3>
                    <p>Full React project with Redux & Router 6 implemented. A personal space in the World Wide Web to publish memories and thoughts and have the possibility to come back and re live them any time you feel! A website that is for you only!</p>
                    <a className="btn" href="https://github.com/AlejoOrtega/corkbored">Repo of Cork-Bored</a>
                </section>

                {/* <!-- Project 3 --> */}
                {/* <section className="project-item">
                    <img src={projectWire} alt="The Wire Ipsum website"/>
                    <h3>The Wire Ipsum</h3>
                    <p>After coming back from teaching a JavaScript workshop, I felt inspired to create something just for fun. I realized that of all the content/lorem ipsum generators available, there was nothing for HBO’s The Wire fans. I searched for <a href="http://thewireipsum.com" target="_blank">thewireipsum.com</a> domain and it was available! Generate some content for your projects today.</p>
                    <a className="btn" href="http://thewireipsum.com" target="_blank">View live site</a>
                </section> */}
            </div>
        </section>
     );
}
 
export default ProjectList;