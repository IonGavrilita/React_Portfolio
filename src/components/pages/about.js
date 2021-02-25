import React from 'react'
import './style.css'

function About() {
    return (
      <div className="container mt-3 mt-3 pb-5 mb-5">
        <header className="row mx-1">         
            <div className="col-xs-10 col-md-8 bg-white">
                <h1 className="text-info pt-3 about">About Me</h1>
                <hr/>
            </div>
        </header>
        
        <div className="row mx-1">
            <div className="col-xs-10 col-md-8 bg-white">
              
                <img style={{width: '18rem', height: '18rem'}} id="about-image" className="float-left img-fluid p-2" src="./images/younger-me.jpg" alt="Ion Gavrilita" />
                <p>Born in Moldova, after University moved in US to develop and implement my engineer skills.</p>
                        <p>For a long time was exploring IT world and it fascinate me a lot, it becomes a hobby to explore and to learn new feautures that constantly changing and envolve in something bigger without any hesitation or boundaries. </p>
                        <p>I believe that IT it's the greatest thing that can change the world to better place and I definetly want to be a part of it for a better future for everybody.</p>
            </div>
        </div>
     </div>
    
    )
}
 export default About;