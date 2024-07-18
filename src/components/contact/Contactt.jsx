import React from 'react'
import "./contact.css"

const Contactt = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                {/* <h3 className="contact_title">Talk to me</h3> */}

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="uil uil-envelope-alt contact_card_icon"></i>
                        <h3 className="contact_card_title">Email</h3>
                        <span className="contact_card_data">amrpals143@gmail.com</span>
                        <a href="mailto:amrpals143@gmail.com" className="contact_button">Write me <i className="uil uil-arrow-right contact_button_icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="uil uil-whatsapp-alt contact_card_icon"></i>
                        <h3 className="contact_card_title">Whatsapp</h3>
                        <span className="contact_card_data">+91 7005070002</span>
                        <a href="https://api.whatsapp.com/send?phone=+917005070002&text=Hello Amarpal" className="contact_button" target='_blank'>Write me <i className="uil uil-arrow-right contact_button_icon"></i></a>
                    </div>

                    
                </div>
            </div>

            {/* <div className="contact_content">
                <h3 className="contact_title">Contact Me</h3>
            </div> */}
        </div>
    </section>
  )
}

export default Contactt
