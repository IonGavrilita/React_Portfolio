import React from 'react'
import './style.css'
import "./Assets/Resume.pdf"

function Resume() {
    return (
<main class="container mt-5 float-left">
    <div class="row">
      <div class="col-md-8">
        <section class="container-fluid mt-3">
          <div class="row">
            <div class="col">
              <h3 class="header">Resume</h3>
              <hr/>
            </div>
          </div>
              <div class="row resume-width">
                <div class="col  resume-width">
                    <iframe
                    src="./Assets/Resume.pdf"
                     dangerouslySetInnerHTML={{ __html: "<iframe src='./Assets/Resume.pdf' />"}} 
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></iframe>
                </div>
              </div>
        </section>
      </div>
    </div>
  </main>
    
    )
}
 export default Resume;