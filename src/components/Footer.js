  
import React from 'react'
import './pages/style.css'

function Footer() {
    return (
        <footer className="page-footer font-small special-color-dark pt-2 fixed-bottom">
        <form className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/profile.php?id=100006711426762">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/ion-gavrilita-8167b61b0/">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="https://github.com/IonGavrilita">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </form>
        <small >© 2020 Copyright: Ion Gavrilita</small>
      </footer> 
    )
}

export default Footer;