import React from 'react'

function Navbar() {

    return (
        <header class="navigation">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light px-0">
                    <a class="navbar-brand order-1 py-0" href="index.html">
                        <h2>Gabriel Santos</h2>
                    </a>

                    <div class="ml-0 ml-md-4 navbar-actions order-3">
                        <button class="border-0 navbar-toggler"
                            aria-label="navbar toggler"
                            data-target="#navigation"
                            data-toggle="collapse"
                            type="button">

                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <form class="ml-auto order-3 order-lg-3 order-md-2 search" action="#!">
                        <input autocomplete="off" id="search-query" placeholder="Search..." type="search" />
                    </form>

                    <div class="collapse navbar-collapse order-4 order-lg-2 text-center" id="navigation">
                        <ul class="mt-3 mt-lg-0 mx-auto navbar-nav">
                            <li class="nav-item"> <a class="nav-link" href="about.html"> About Me </a> </li>

                            <li class="dropdown nav-item">
                                <a class="dropdown-toggle nav-link" href="index.html"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-toggle="dropdown"
                                    role="button">

                                    Articles
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="routes.html">Learnings</a>
                                    <a class="dropdown-item" href="routes.html">Projects</a>
                                </div>
                            </li>

                            <li class="nav-item"> <a class="nav-link" href="contact.html"> Contact </a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar