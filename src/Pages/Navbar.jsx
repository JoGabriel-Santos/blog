import React from 'react'

function Navbar() {

    return (
        <header className="navigation">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a class="navbar-brand order-1 py-0" href="index.html">
                        <h2 className="logo">Gabriel Santos</h2>
                    </a>

                    <div className="ml-0 ml-md-4 navbar-actions order-3">
                        <button className="border-0 navbar-toggler"
                            aria-label="navbar toggler"
                            data-target="#navigation"
                            data-toggle="collapse"
                            type="button">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <form className="ml-auto order-3 order-lg-3 order-md-2 search" action="#!">
                        <input autocomplete="off" id="search-query" placeholder="Search..." type="search" />
                    </form>

                    <div className="collapse navbar-collapse order-4 order-lg-2 text-center" id="navigation">
                        <ul className="mt-3 mt-lg-0 mx-auto navbar-nav">
                            <li className="nav-item"> <a className="nav-link" href="about.html"> About Me </a> </li>

                            <li className="dropdown nav-item">
                                <a className="dropdown-toggle nav-link" href="index.html"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-toggle="dropdown"
                                    role="button">

                                    Articles
                                </a>

                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="routes.html">Learnings</a>
                                    <a className="dropdown-item" href="routes.html">Projects</a>
                                </div>
                            </li>

                            <li className="nav-item"> <a className="nav-link" href="contact.html"> Contact </a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar