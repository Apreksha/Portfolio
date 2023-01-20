import React, { Component } from "react";
import './Footer.css';
import gmail from 'D:/VSCodeProjects/portfolio/src/image/gmail.png';
import linkedin from 'D:/VSCodeProjects/portfolio/src/image/linkedin.png';
import {Route, Routes, useNavigate, withRouter, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';

function Footer(){
    const onClickButton = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div class="footer">
            <h1 class="contactHeading">Contact Me</h1>
            <div class="contacts">
                <div onClick={() => window.location = 'mailto:aprekshamathur456@gmail.com'} class="contactBox">
                    <img src={gmail}></img>
                    <p>aprekshamathur456@gmail.com</p>
                </div>
                <div onClick={() => onClickButton('https://www.linkedin.com/in/apreksha-mathur/')} class="contactBox">
                    <img src={linkedin}></img>
                    <p>linkedin.com/in/apreksha-mathur/</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;