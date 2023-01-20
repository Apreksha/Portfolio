import React, { Component } from "react";
import './Portfolio.css';
import Typewriter from "typewriter-effect";
import TabBar from './TabBar';
import Footer from './Footer';
import {Route, Routes, useNavigate, withRouter, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';
import gfg from 'D:/VSCodeProjects/portfolio/src/image/30GFG.png';
import codekaze from 'D:/VSCodeProjects/portfolio/src/image/CodeKaze.png';
import flipkart from 'D:/VSCodeProjects/portfolio/src/image/flipkart.png';
import xiaomi from 'D:/VSCodeProjects/portfolio/src/image/xiaomi.png';
import tcs from 'D:/VSCodeProjects/portfolio/src/image/tcs.png';
import ctrlaltdebt from 'D:/VSCodeProjects/portfolio/src/image/Ctrl Alt Debt.png';
import lapron from 'D:/VSCodeProjects/portfolio/src/image/lapron.png';
import book from 'D:/VSCodeProjects/portfolio/src/image/book.jpg';
import dbms from 'D:/VSCodeProjects/portfolio/src/image/dbms.jpg';
import mi from 'D:/VSCodeProjects/portfolio/src/image/mi.jpg';
import gyandaan from 'D:/VSCodeProjects/portfolio/src/image/gyandaan.jpeg';
import github from 'D:/VSCodeProjects/portfolio/src/image/github.png';
import headingFont from 'D:/VSCodeProjects/portfolio/src/image/blackchancery.ttf';

function Portfolio(){
    const onClickButton = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const projectGithubLinks = ['https://github.com/Apreksha/DBMS_Point', 'https://github.com/Apreksha/Book-House', 'https://github.com/Apreksha/xiaomi_hackathon', 'https://github.com/Apreksha/GyanDaan'];
    const projectDemoLinks = ['https://play.google.com/store/apps/details?id=com.apreksha.dbms', 'https://youtu.be/zO49uUdWtms', 'https://www.youtube.com/watch?v=cxNJow3WYjg', 'https://www.youtube.com/watch?v=MR58_YDDRjw'];
    const projectInfo = [
        'Android DBMS learning app published on Google Play Store. It provides concepts of DBMS with detailed explanation and online links. Users can mark favourites and search topics.',
        'Android Book Reading app with features like login authentication, downloading books from web using Dio dependency, reading books in epub mode, creating library and favorites with internet connection.',
        'Android billing app for operators at Mi Store. Operators can buy products on behalf of customers, ask their preferred mode of communication (either Whatsapp or Email) and customers can pay either online or cash. Customers will receive receipt on their preferred mode of communication. Searching of products with barcode. Payment gateway implemented using RazorPay.',
        'Android app that provides education with one-to-one mentoring live video sessions. It uses an algorithm which automatically initialize mentor to student according to his/her day and time preference.'];
    const projectImg = [dbms, book, mi, gyandaan];
    const projectTitle = ['DBMS Point', 'Book House', 'Mi Store', 'Gyandaan'];
    const projectTechUsed = [['Dart', 'Flutter', 'Firebase', 'Android Studio'], ['Dart', 'Flutter', 'Firebase', 'Android Studio'], ['Dart', 'Flutter', 'Firebase','Android Studio'], ['Dart', 'Flutter', 'Firebase', 'Android Studio']];

    const achievementImgs = [xiaomi, ctrlaltdebt, gfg, flipkart, codekaze, tcs];
    const achievementInfo=['AIR 5 out of 8450 teams', 'Top 25 out of 2628 teams', 'AIR 30 out of 960+ students in GFG Weekly Interview Series - 65', 
    'Top 154 out of 14500 students', 'AIR 1268 out of 15000 students', 'AIR 3425'];
    const achievementLinks=['https://www.hackerearth.com/challenges/hackathon/ode2code-20/#overview', 
    'https://drive.google.com/file/d/1bOcW4daD3tGTC9Zzr8Q46r1PJLbV6Yqv/view?usp=share_link', 
    'https://practice.geeksforgeeks.org/contest/interview-series-65/leaderboard/', 
    'https://drive.google.com/file/d/15ND3ns02K8ZwxlTUb4UU_pLTnWDWrXEO/view?usp=share_link', 
    'https://drive.google.com/file/d/1em2nhvnAgdxdDgAzBfXI-Lmfs_7eicsr/view?usp=share_link', 
    'https://drive.google.com/file/d/1nNj_HvvCvWbM6X-I2Z1wEAXkYw2G78q2/view?usp=share_link'];

    return(
        <div>
            <TabBar/>
            <div class="portfolio">
                <p class="portfolioHeading">PORTFOLIO</p>
                <p class="topicHeading">Education</p>
                <div class="education">
                    <div class="schools">
                        <p class="schoolname">Poornima College of Engineering</p>
                        <p>B.Tech in Computer Engineering</p>
                        <p>2019 - 2023</p>
                        <p>CGPA : 9.16</p>
                    </div>
                    <div class="schools">
                        <p class="schoolname">Seedling Public School</p>
                        <p>12th in PCM</p>
                        <p>2018 - 2019</p>
                        <p>Percentage : 86.4 %</p>
                    </div>
                </div>
                <p class="topicHeading">Experience</p>
                <div class="experiences">
                    <div class="experience">
                        <div class="timeline">
                            <div class="wrapperCircle"></div>
                            <div class="wrapper"></div>
                        </div>
                        <div class="experienceCard">
                            <p class="companyName">Lapron Technology</p>
                            <div class="positionAndTime">
                                <p class="position">Flutter Developer Intern</p>
                                <p class="time">July 2021 - Jan 2022</p>
                            </div>
                            <p class="companyInfo">Worked on a Multivendor application. Worked on frontend and backend of pages like Product Description, Buying Preferences, Mode of Payment, a module of Home Page. Fixed a few bugs.</p>
                            <p class="experienceTech">Dart, Flutter, Git, GitHub, Android Studio, API</p>
                        </div>
                    </div>
                </div>
                {/* <div class="experiences">
                    <div class="experience">
                        <p>Flutter Developer Intern
                        <br></br>
                        Jul 2021 - Jan 2022
                        </p>
                    </div>
                    <p class="description">
                    Worked on a Multivendor application.<br></br>
                    Worked on frontend and backend of pages like Product Description, Buying Preferences, Mode of Payment, a module of Home Page.<br></br>
                    Fixed a few bugs.<br></br>
                    <p class="tech">Dart, Flutter, Git, GitHub, Android Studio, API</p></p>
                </div> */}

                <p class="topicHeading">Projects</p>
                <div class="projects">{projectTechUsed.map((item, i) => (
                    <div onClick={() => onClickButton(projectDemoLinks.at(i))} class="project">
                        <div class="headingGithub">
                                <p onClick={() => onClickButton(projectDemoLinks.at(i))} class="heading">{projectTitle.at(i)}</p>
                                <img class="links" onClick={() => onClickButton(projectGithubLinks.at(i))} src={github}></img>
                            </div>
                        <img onClick={() => onClickButton(projectDemoLinks.at(i))} class="projectImg" src={projectImg.at(i)}></img>
                        <div class="projectInfo">
                            
                            <div class="desc">{projectInfo.at(i)}</div>
                            <p class="tech">{projectTechUsed.at(i).map((text) => (
                                <p>{text}</p>
                            ))}</p>
                        </div>        
                    </div>
                ))}
                </div>

                <p class="topicHeading">Achievements</p>
                <div class="achievementCard">
                    {achievementImgs.map((item, i) => (
                        <div onClick={() => onClickButton(achievementLinks.at(i))} >
                            <img src={item}></img>
                            <p>{achievementInfo.at(i)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio;