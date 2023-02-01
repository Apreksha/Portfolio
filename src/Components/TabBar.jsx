import React, { Component } from "react";
import './TabBar.css';
import About from './About';
import Portfolio from './Portfolio';
import am from 'D:/VSCodeProjects/portfolio/src/image/am.png';
import {Link, Route, Routes, useNavigate, withRouter, useHistory} from 'react-router-dom';
//import {Link} from 'react-scroll';

function TabBar(){
    const navigate = useNavigate();

    const aboutOnClick = () =>{ 
        navigate('/');

    }

    const portfolioOnClick = () =>{ 
        navigate('/Portfolio');
    }

    return(
        <div class="tabBar">
            <img src={am}></img>
            <div class="tabBarButton">
                <p onClick={aboutOnClick}>About</p>
                <p onClick={portfolioOnClick}>Portfolio</p>
            </div>
        </div>
    )
}

export default TabBar;