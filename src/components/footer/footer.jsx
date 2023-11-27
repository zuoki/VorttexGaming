import React from "react"
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
                        <h4> Lorem ipsum </h4>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" >
                    <h4> Lorem ipsum </h4>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" >
                    <h4> Lorem ipsum </h4>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                        <a href="/">
                            <p>Lorem</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" >
                        <h4>Proximamente en:</h4>

                    <div className="socialmedia" >
                        <p> <FaGithub /> </p>
                        <p> <FaInstagram /> </p>
                        <p> <FaFacebook /> </p>
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