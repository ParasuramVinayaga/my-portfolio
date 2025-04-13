import React, { useState } from 'react';
import './App.css';
import profile from './images/profile.jpg';
import Skills from './pages/Skills';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Education from './pages/Education';
import emailjs from 'emailjs-com';

function App() {
  const [contactForm, setContactForm] = useState(false)

  // Send email
  function sendMail (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_y9kokdi",
      "template_re4g6y7",
      e.target, 
      "3GqCUmZ1VVpUqfP_y"
    ).then(res => {
      setContactForm(!contactForm);
    }).catch(err => {
      console.log("failed")
      console.log(err)
    })
  }

  return (
    <main className="page-dark p-5 h-screen overflow-hidden">
      <div className="flex items-start flex-col-reverse gap-4 lg:flex-row">
        <div className="lg:w-80 flex flex-col gap-2 items-center">
          <div className="w-full bg-card text-nowrap rounded-xl py-3 px-5">
            <h2 className="text-center text-2xl uppercase font-semibold leading-tight">Portfolio</h2>
          </div>
          <img src={profile} alt="profile" className="rounded-xl"/>
          { contactForm && (
              <div className="absolute bottom-0 left-[20px] z-10 w-1/4" onSubmit={sendMail}>
                <form className="bg-card flex flex-col gap-2 p-2 rounded w-[320px] h-[235px]">
                  <button className="flex justify-end" onClick={() => setContactForm(!contactForm)}>&times;</button>
                  <input type="text" name="name" placeholder="Name" className="bg-card-400 p-2 rounded text-grey-600" />
                  <input type="text" name="email" placeholder="Email" className="bg-card-400 p-2 rounded text-grey-600" />
                  <input type="text" name="message" placeholder="Message" className="bg-card-400 p-2 rounded text-grey-600" />
                  <button className="flex-1 btn-primary rounded-xl px-5 py-2">Submit</button>
                </form>
              </div>
          )}
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
              <NavBar />
              <div className="h-screen overflow-auto pb-24">
                <div className="w-full flex flex-col gap-2">
                  <Routes>
                    <Route path="/" element={<Skills />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="education" element={<Education />} />
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
