import React from 'react'

function About() {

    return (
        <section className="section">
            <div className="container px-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="breadcrumbs mb-4">
                            <a href="index.html">Home</a> <span className="mx-1"> / </span>
                            <a href="about.html">About</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 mb-5 mb-lg-0 mx-auto">
                    <img className="img-fluid mb-4 w-100" src={require('../util/profile.jpg')} alt="" />

                    <h1 className="mb-4">João Gabriel de Carvalho Santos</h1>

                    <div className="content mb-5">
                        <blockquote>
                            <p> printf("Hello World!!!"); </p>
                        </blockquote>

                        <p className="paragraph-info">
                            I'm a <b>Backend Web Developer</b> with more than 5 years of programming experience,
                            focused on APIs, backend logic, databases and servers who constantly seeks out work opportunities
                            where I can contribute, learn and grow.

                            My interest in development started in 2016 when I decided to join the Computer Technician course,
                            and now I am graduating in Computer Science.

                            I'm currently learning ReactJs, developing real world projects.
                            Check out some of my work in the <a href="#!">Projects</a> section.
                        </p>
                    </div>

                    <h2>Technologies I like</h2>

                    <div className="mb-4 row">
                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-javascript-96.png')} alt="" />
                            <p className={'skill-name'}>JavaScript</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-java-96.png')} alt="" />
                            <p className={'skill-name'}>Java</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-python-96.png')} alt="" />
                            <p className={'skill-name'}>Python</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-c-sharp-96.png')} alt="" />
                            <p className={'skill-name'}>C#</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-react-96.png')} alt="" />
                            <p className={'skill-name'}>ReactJS</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-node-js-96.png')} alt="" />
                            <p className={'skill-name'}>NodeJS</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-spring-96.png')} alt="" />
                            <p className={'skill-name'}>String Boot</p>
                        </div>

                        <div className="skill col-sm-3 col-6">
                            <img src={require('../util/icons/icons8-mongodb-96.png')} alt="" />
                            <p className={'skill-name'}>MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About