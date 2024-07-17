import React from 'react'

const Information = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="uil uil-award-alt about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">Fresher</span>
      </div>

      <div className="about_box">
        <i class="uil uil-check-circle about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">10+ Projects</span>
      </div>

      <div className="about_box">
        <i class="uil uil-comment-alt-question about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Information
