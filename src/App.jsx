import React from 'react';
import './App.css';
import profile from './images/profile.jpg';

function App() {

  return (
    <main className="page-dark p-5 overflow-hidden">
      <div className="flex items-start min-h-screen flex-col-reverse gap-4 lg:flex-row">
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
            <button className="flex-1 btn-primary rounded-xl px-5 py-2">Contact me</button>
          </div>
        </div>
        <div className="lg:flex-1 gap-2">
          <div className="flex flex-col gap-2">
            <nav className="flex text-nowrap gap-x-5 items-baseline bg-card rounded-xl py-3">
              <div className="text-grey-600 text-sm px-3 py-1 uppercase rounded-xl text-center">Projects</div>
              <div className="text-grey-600 text-sm px-3 py-1 uppercase rounded-xl text-center">Skills</div>
              <div className="text-grey-600 text-sm px-3 py-1 uppercase rounded-xl text-center">Education</div>
              <div className="text-grey-600 text-sm px-3 py-1 uppercase rounded-xl text-center">Hobbies</div>
            </nav>
            <div className="h-screen overflow-auto">
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
                    <div className="flex flex-col p-2 h-fit">
                      <h2 className="text-center text-2xl font-semibold leading-tight lg:text-3xl">Laravel</h2>
                      <div className="p-3 flex justify-center items-center leading-loose w-fit">
                        I have one year of experience in laravel PHP.
                        Worked on developing rest api's and
                        build an admin panel for an ecommerce application,
                        a single page application using laravel to monitor and manage workflow.
                        Capable of implementing SOLID principles in laravel and develop a more robust and modular.
                      </div>
                      <div className="w-full h-64 rounded-xl relative">
                        <img
                            src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/laravel-explained.svg?tr=w-190"
                            alt="bot" className="w-full absolute"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
                    <div className="flex flex-col p-2 h-fit">
                      <h2 className="text-center text-2xl font-semibold leading-tight lg:text-3xl">Postgres</h2>
                      <div className="p-3 flex justify-center items-center leading-loose w-fit">
                        I have one year of experience in postgres, with which
                        I can perform from the most basic to complex database queries.
                        Capable of working with multi-tenancy database, execute queries at an optimal time,
                        Capable of designing tables with appropriate constrains to ensure data consistency.
                      </div>
                      <div className="w-full h-64 rounded-xl relative">
                        <img
                            src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/mysql-database-design.svg?tr=w-190"
                            alt="bot" className="w-full"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
                    <div className="flex flex-col p-2 h-fit">
                      <h2 className="text-center text-2xl font-semibold leading-tight lg:text-3xl">HTML & Tailwind CSS</h2>
                      <div className="p-3 flex justify-center items-center leading-loose w-fit">
                        Besides being a backend developer, I have quite a few knowledge in both HTML and CSS,
                        with which I can build a fairly clean and simple frontend,
                        I have an experience of building an admin panel for an ecommerce application with HTML and CSS as frontend
                        and laravel as backend. Besides that the portfolio your looking now is an example of my proficiency.
                      </div>
                      <div className="w-full h-64 rounded-xl relative">
                        <img
                            src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/modern-css-workflow.svg?tr=w-190"
                            alt="bot" className="w-full absolute"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
                    <div className="flex flex-col p-2 h-fit">
                      <h2 className="text-center text-2xl font-semibold leading-tight lg:text-3xl">React</h2>
                      <div className="p-3 flex justify-center items-center leading-loose w-fit">
                        I'm a newbie to react, built a basic todo application which is used to manage your day to day tasks efficiently.
                        And one another thing would be this portfolio which uses react for its javascript functionalities.
                        I'm looking forward to learn and develop a highly modern, classic, super-fast and super catchy web app with react.
                      </div>
                      <div className="w-full h-64 rounded-xl relative">
                        <img
                            src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/beginning-react.svg?tr=w-190"
                            alt="bot" className="w-full absolute"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
