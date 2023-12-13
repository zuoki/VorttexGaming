import React from "react"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return(
        <div className="footer" >
            <div className="sb_footer section_padding">
                <div className="sb_footer-links" >

                    <div className="sb_footer-links_div">
                        <h4> Devs </h4>
                        <a href="/about">
                            <p>Damian Diaz</p>
                        </a>
                        <a href="/about">
                            <p>Debora Rios</p>
                        </a>
                        <a href="/about">
                            <p>Pablo Vera</p>
                        </a>
                        <a href="/about" >
                            <p>Andres Castro</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" >
                    <h4> Devs </h4>
                        <a href="/about">
                            <p>Gabriel Juarez</p>
                        </a>
                        <a href="/about">
                            <p>Santiago Friedrich</p>
                        </a>
                        <a href="/about">
                            <p>Diego Martins</p>
                        </a>
                        <a href="/about">
                            <p>Christian Natale</p>
                        </a>
                    </div>

                    

                    <div className="sb_footer-links_div" >
                        <h4>Redes Sociales</h4>

                    <div className="socialmedia" >
                        
                        <a href="https://github.com"> <FaGithub /> </a>
                        
                        
                        <a href="https://www.instagram.com/vorttexgamingar/" target="_blank" > <FaInstagram /> </a>
                        <a href="https://www.facebook.com"> <FaFacebook /> </a>
                    </div>
                   
                    </div>
                    </div>

                    <hr />

                    <div className="sb_footer-below" >

                        <div className="sb_footer-copyright" >
                            <p>
                            ©{new Date().getFullYear()} Vortex. All rights reserved
                            </p>
                        </div>

                        <div className="sb_footer-below-links" >

                            <a href="/"><div><p>Terminos y Condiciones</p></div></a>
                            <a href="/"><div><p>Privacidad</p></div></a>
                            <a href="/"><div><p>Seguridad</p></div></a>

                        </div>

                    </div>

            </div>

        </div>
    )
}

export default Footer