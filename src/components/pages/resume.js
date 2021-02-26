import React from 'react'
import './style.css'
import ResumeImage from "../../images/About/resumephoto.png"
import Resumes from "../../images/About/Resume.pdf"

export default function Resume() {
  return (
      <div className="row d-flex justify-content-center mt-5">
          <div>
              <a href={Resumes} download>
                  <img src={ResumeImage} alt="resume" />
                  <br />
                  click to download
              </a>
          </div>
      </div >
  )
}