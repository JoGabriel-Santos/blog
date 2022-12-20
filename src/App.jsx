import React from 'react'

import About from './Pages/About'
import Navbar from './Pages/Navbar'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Learnings from './Pages/Articles/Learnings'



function App() {

    return (
        <>
            <Navbar />

            <main>
                <About/>
            </main>

            <Footer/>
        </>
    )
}

export default App