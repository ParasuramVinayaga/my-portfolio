import React, { useState } from 'react';
import './App.css';
import profile from './images/profile.jpg';
import Skills from './pages/Skills';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Education from './pages/Education';

function App() {
  const [contactForm, setContactForm] = useState(false)

  return (
    <main className="page-dark p-5 h-screen overflow-hidden">
      <div className="flex items-start flex-col-reverse gap-4 lg:flex-row">
        <div className="lg:w-80 flex flex-col gap-2 items-center">
          <div className="w-full bg-card text-nowrap rounded-xl py-3 px-5">
            <h2 className="text-center text-2xl uppercase font-semibold leading-tight">Portfolio</h2>
          </div>
          <img src={profile} alt="profile" className="rounded-xl"/>
          <div className="w-full bg-card flex text-nowrap justify-between items-baseline rounded-xl py-3 px-5">
            <span className="text-grey-600 text-sm">Hi my name is</span>
            <h5 className="font-medium text-white text-lg text-right">Parasuram Vinayaga</h5>
          </div>
          <div className="bg-card rounded-xl p-3 w-full">
            <p>
              I work as a web developer, mainly focusing on Laravel.
              I like diving into other engineering aspects in my free time.
            </p>
          </div>
          <div className="w-full flex justify-center align-middle">
            <button className="flex-1 btn-primary rounded-xl px-5 py-2" onClick={() => setContactForm(!contactForm)}>Contact me</button>
          </div>
        </div>
        <div className="lg:flex-1 gap-2">
          <Router>
            <div className="flex flex-col gap-2">
              { contactForm && (
                <div className="absolute top-1/3 right-1/3 z-10 w-1/3">
                  <form className="bg-card flex flex-col gap-2 p-2 rounded">
                    <button className="flex justify-end" onClick={() => setContactForm(!contactForm)}>&times;</button>
                    <input type="text" placeholder="Name" className="bg-card-400 p-2 rounded text-grey-600" />
                    <input type="text" placeholder="Email" className="bg-card-400 p-2 rounded text-grey-600" />
                    <textarea placeholder="Message" rows="5" className="bg-card-400 p-2 rounded text-grey-600" />
                    <button className="flex-1 btn-primary rounded-xl px-5 py-2">Submit</button>
                  </form>
                </div>
              )}
              <NavBar />
              <div className="h-screen overflow-auto pb-24">
                <div className="w-full flex flex-col gap-2">
                  <Routes>
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </main>
  )
}

export default App
