import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <a name='contact-me'></a>
            <div className='contactme-title'>
                <h1>Contact me</h1>

            </div>
            <div className='contact-me-container-box'>
                <div className="contact-me-container">
                    <h3>Call me</h3>
                    <div>
                        <i class="fa-solid fa-phone fa-6x"></i>
                        <div className='numbers-phone'>
                            <h5>+51 922 175 052</h5>
                            <h5>+51 982 813 009</h5>
                        </div>
                    </div>
                </div>
                <div className="contact-me-container-linkedin">
                    <h3>Follow me</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/phil-taboada-6b2a07174/"><i class="fa-brands fa-linkedin-in fa-8x"></i></a>
                    </div>
                </div>
                <div className="contact-me-container">
                    <h3>Write me</h3>
                    <div className='write-me-container'>
                        <a href="https://api.whatsapp.com/send?phone=51922175052"><i className="fa-brands fa-whatsapp fa-4x"></i></a>
                    </div>
                    <div className='contact-me-container-email'>
                        <i class="fa-solid fa-envelope fa-4x"></i>
                        <p>philtaboada1997 @gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs