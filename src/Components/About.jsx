import React, { Component } from "react";
import './About.css';
import Typewriter from "typewriter-effect";
import TabBar from './TabBar';
import Footer from './Footer';
import {Route, Routes, useNavigate, withRouter, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';
import c from 'D:/VSCodeProjects/portfolio/src/image/c.png';
import cpp from 'D:/VSCodeProjects/portfolio/src/image/c++.png';
import flutter from 'D:/VSCodeProjects/portfolio/src/image/flutter.png';
import dart from 'D:/VSCodeProjects/portfolio/src/image/dart.png';
import python from 'D:/VSCodeProjects/portfolio/src/image/python.png';
import java from 'D:/VSCodeProjects/portfolio/src/image/java.png';
import html from 'D:/VSCodeProjects/portfolio/src/image/html.png';
import css from 'D:/VSCodeProjects/portfolio/src/image/css.png';
import js from 'D:/VSCodeProjects/portfolio/src/image/js.png';
import react from 'D:/VSCodeProjects/portfolio/src/image/react.png';
import git from 'D:/VSCodeProjects/portfolio/src/image/git.png';
import github from 'D:/VSCodeProjects/portfolio/src/image/github.png';
import githubWhite from 'D:/VSCodeProjects/portfolio/src/image/githubWhite.png';
import codechef from 'D:/VSCodeProjects/portfolio/src/image/codechef.png';
import andstu from 'D:/VSCodeProjects/portfolio/src/image/andstu.png';
import mysql from 'D:/VSCodeProjects/portfolio/src/image/mysql.png';
import firebase from 'D:/VSCodeProjects/portfolio/src/image/firebase.png';
import leetcode from 'D:/VSCodeProjects/portfolio/src/image/leetcode.png';
import hackerearth from 'D:/VSCodeProjects/portfolio/src/image/hackerearth.png';
import hackerrank from 'D:/VSCodeProjects/portfolio/src/image/hackerrank.png';
import gfg from 'D:/VSCodeProjects/portfolio/src/image/gfg.png';

function About(){
    const onClickButton = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const skillImg=[c, cpp, dart, flutter, java, python, html, css, js, react, firebase, mysql, andstu, git, githubWhite];
    const skillName=["C", "C++", "Dart", "Flutter", "Java","Python", "HTML", "CSS", "JavaScript", "React", "Firebase", "MySQL", "Android Studio", "Git", "GitHub"];
    const codingProfileImg = [github, leetcode, gfg, codechef, hackerearth, hackerrank];
    const codingProfileName = ["GitHub", "LeetCode", "GeeksforGeeks", "CodeChef", "HackerEarth", "HackerRank"];
    const codingProfileLinks = ['https://github.com/Apreksha', 'https://leetcode.com/aprekshamathur/', 'https://auth.geeksforgeeks.org/user/aprekshamathur', 'https://www.codechef.com/users/apreksha', 'https://www.hackerearth.com/@aprekshamathur456', 'https://www.hackerrank.com/aprekshamathur41']

    return(
        <div>
            <TabBar></TabBar>
            <div class="about">
                <div class="mynameis">
                    <p class="im">I'm</p>
                    <p class="name">Apreksha Mathur</p>
                </div>
                <div class="dev">
                    <Typewriter options={{
                    autoStart:true,
                    loop: true,
                    delay: 40,
                    strings:["I'm a Developer."]}}/>
                </div>
                <p class="aboutHeading">About</p>
                <div class="About">
                    <p>My name is Apreksha Mathur from Jaipur, India. I am a senior pursuing B.Tech in Computer Science.
                    <br></br>Apart from coding, some other activities that I love to do!</p>
                    <ul>
                        <li>Reading Books</li>
                        <li>Learning about new things</li>
                        <li>Content Writing</li>
                        <li>Singing</li>
                        <li>Dancing</li>
                    </ul>
                </div>

                <p class="codingProfileHeading">Coding Profiles</p>
                <div class="codingProfiles">{codingProfileImg.map((item, i) => (
                    <div class="codingProfileCard" onClick={() => onClickButton(codingProfileLinks.at(i))}><img src={item}></img>
                    <p>{codingProfileName.at(i)}</p>
                    </div>
                ))}
                </div>
                
                <p class="skillsHeading">My Skills</p>
                <div class="skills">{skillImg.map((item, i) => (
                    <div class="skillCard">
                        <img src={item}></img>
                        <p>{skillName.at(i)}</p>
                    </div>
                ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About;