import React, { Component } from "react";
import './TabBar.css';
import am from 'D:/VSCodeProjects/portfolio/src/image/am.png';
import {Route, Routes, useNavigate, withRouter, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';

function TabBar(){
    /* const navigate = useNavigate(); 
    const aboutOnClick = () =>{ 
        navigate('/About');
    }

    const portfolioOnClick = () =>{ 
        navigate('/Portfolio');
    } */

    return(
        <div class="tabBar">
            <img src={am}></img>
            <div class="tabBarButton">
                <p>About</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default TabBar;