import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Amarpal</h1>
            
            <ul className="footer_list">
            <li>
                    <a href="#home" className="footer_link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#qualification" className="footer_link">Qualifications</a>
                </li>
                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.linkedin.com/in/amarpal-sangwan-34a521230/" className="footer_social_link" target="_blank"><i class="uil uil-linkedin"></i></a>
            <a href="https://github.com/amarpalsangwan" className="footer_social_link" target="_blank"><i class="uil uil-github"></i></a>
            </div>

            <span className="footer_copy">&#169; Amarpal. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
