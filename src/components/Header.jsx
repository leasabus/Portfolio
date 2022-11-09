import React from 'react'
import { NavBar } from '../ui/NavBar'


export const Header = () => {
    return (
        <>
            <NavBar />
            <header id='home'>
                <div className='header-container'>
                    <div className='header-description'>
                        <h1>Hola!, soy Leandro Sabus</h1>
                        <h3>Y soy Front-end Developer</h3>
                        <p>Me especializo en crear sitios web con <span>ReactJS</span> y otras tecnologías. </p>
                        <a href="./assets/cvnuevo.pdf" target="_blank"><button className='header-btn'>Descargar CV</button></a>
                    </div>
                    <div className='header-img'>
                        <img src="../assets/Mi proyecto.png" alt="#" />
                    </div>


                </div>
            </header>
        </>
    )
}
