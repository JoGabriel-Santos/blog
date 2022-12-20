import React from 'react'

function Learnings() {

    return (
        <section className="section">
            <div className="container">
                <div className="no-gutters-lg row ">
                    <div className="col-12">
                        <h2 className="section-title">Latest Articles</h2>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-4">
                            <article className="card article-card">
                                <a href="article.html">
                                    <div className="card-image">
                                        <div className="post-info">
                                            <span className="text-uppercase">04 Jun 2021</span>
                                        </div>

                                        <img className="w-100" src={require('../../util/profile.jpg')} alt="" />
                                    </div>
                                </a>

                                <div className="card-body pb-1 px-0">
                                    <ul className="post-meta mb-2">
                                        <li>
                                            <a href="#!">Tag 1</a>
                                            <a href="#!">Tag 2</a>
                                        </li>
                                    </ul>

                                    <h2 className="h1">
                                        <a className="post-title" href="article.html">Post title</a>
                                    </h2>

                                    <p className="card-text">Post paragraph</p>

                                    <div className="content">
                                        <a className="read-more-btn" href="article.html">Read full article</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-md-6 mb-4">
                            <article className="card article-card">
                                <a href="article.html">
                                    <div className="card-image">
                                        <div className="post-info">
                                            <span className="text-uppercase">04 Jun 2021</span>
                                        </div>

                                        <img className="w-100" src={require('../../util/profile.jpg')} alt="" />
                                    </div>
                                </a>

                                <div className="card-body pb-1 px-0">
                                    <ul className="post-meta mb-2">
                                        <li>
                                            <a href="#!">Tag 1</a>
                                            <a href="#!">Tag 2</a>
                                        </li>
                                    </ul>

                                    <h2 className="h1">
                                        <a className="post-title" href="article.html">Post title</a>
                                    </h2>

                                    <p className="card-text">Post paragraph</p>

                                    <div className="content">
                                        <a className="read-more-btn" href="article.html">Read full article</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learnings