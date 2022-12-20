import React from 'react'

function Contact() {

    return (
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumbs mb-4">
                            <a href="index.html">Home</a>
                            <span class="mx-1">/</span>
                            <a href="#!">Contact</a>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="pr-0 pr-lg-4">
                            <div class="content">Feel free to contact me and I will get back to you as soon as possible.

                                <div class="mt-5">
                                    <p class="h3 font-weight-normal mb-3">
                                        <a class="text" href="mailto:jgabriel.professional@gmail.com">jgabriel.professional@gmail.com</a>
                                    </p>

                                    <p class="mb-3">
                                        <a class="text" href="tel:98981688750">&#43;55 (98) 98168-8750</a>
                                    </p>

                                    <p class="mb-2">Maranhão, Brazil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4 mt-lg-0">
                        <form method="POST" action="#!" class="row">
                            <div class="col-md-6">
                                <input class="form-control mb-4" placeholder="Name" name="name" type="text" id="name" />
                            </div>

                            <div class="col-md-6">
                                <input class="form-control mb-4" placeholder="Email" name="email" type="email" id="email" />
                            </div>

                            <div class="col-12">
                                <input class="form-control mb-4" placeholder="Subject" name="subject" type="text" id="subject" />
                            </div>

                            <div class="col-12">
                                <textarea class="form-control mb-4" placeholder="Type You Message Here" name="message" id="message" rows="5" />
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact