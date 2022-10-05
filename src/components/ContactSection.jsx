import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

export const ContactSection = () => {
    return (
        <>
            <section id='contact'>
                <div className='contact-container'>
                    <div className='contact-text'>

                        <h1 className='contact-tittle'>Contactame</h1>
                        <p>Gracias por llegar hasta aquí! Si te
                            gustaron mis trabajos no dudes en contactarme, trabajemos juntos!
                        </p>
                    </div>

                    <div className='contact-display'>
                        <li><a href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank"><FaLinkedin className='contact-icons-link' /></a></li>
                        <li><a href="https://github.com/leasabus" target="_blank"><FaGithub className='contact-icons-git' /></a></li>
                        <li><a href="mailto:leandro.sabus@gmail.com"><FaMailBulk className='contact-icons-mail' /></a></li>
                    </div>
                </div>


            </section >
        </>
    )
}
