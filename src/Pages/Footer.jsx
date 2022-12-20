import React from 'react'

import Logo from '../util/profile-logo.png'

function Footer() {
    return (
        <footer className="bg-dark mt-5">
            <div className="container section">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-center">
                        <a className="d-inline-block mb-4 pb-2" href="index.html">
                            <img className="img-logo" src={Logo} alt="" />
                            <h2 className="text-light">Gabriel Santos</h2>
                        </a>

                        <ul className="d-flex list-unstyled mb-0 navbar-footer p-0">
                            <li className="my-0 nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>

                            <li className="my-0 nav-item">
                                <a className="nav-link" href="about.html">Learnings</a>
                            </li>

                            <li className="my-0 nav-item">
                                <a className="nav-link" href="about.html">Projects</a>
                            </li>

                            <li className="my-0 nav-item">
                                <a className="nav-link" href="about.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bg-dark copyright content">
                Copyright &copy; 2022 by Gabriel Santos
            </div>
        </footer>
    )
}

export default Footer