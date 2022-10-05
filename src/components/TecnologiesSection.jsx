import React from 'react'
import { FaReact, FaJs, FaGithub, FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa'

export const TecnologiesSection = () => {
    return (
        <>
            <section id='skills'>
                <div className='skills'>
                    <h1 className='skills-tittle'>Mis Habilidades</h1>

                    <div className='skills-icons'>
                        <div>
                            <FaHtml5 className='html5' />

                            <FaCss3 className='css3' />
                        </div>
                        <div>
                            <FaBootstrap className='bootstrap' />
                            <FaGithub className='github' />
                        </div>
                        <div>
                            <FaJs className='javascript' />
                            <FaReact className='react' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
