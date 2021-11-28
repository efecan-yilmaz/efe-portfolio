import React from 'react';

import './Main.css';
import AppHeader from '../../Shared/components/AppHeader';
import AppBar from './AppBar';
import IconHolder from './IconHolder';
import SlideButton from './SlideButton';
import Badge from './Badge';

import PPic from '../../assets/pp.jpg';
import FrontendPic from '../../assets/frontend.jpg';
import ConsultantPic from '../../assets/consultant.jpg';
import FullstackPic from '../../assets/fullstack.jpg';
import IotPic from '../../assets/iot.jpg';
import RomePic from '../../assets/rome.jpg';
import PigeonPic from '../../assets/pigeon.jpg';

export const Main = () => {
    const onLinkClick = (className) => {
        document.querySelector('.' + className).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
        <AppHeader headerType="samePage">
            <a key='welcome'>Welcome!</a>
            <a key='intro'>Intro</a>
            <a key='experience'>Experiences</a>
            <a key='contact'>Contact</a>
        </AppHeader>
            {/* <AppBar /> */}
        <div className="welcome">
            <div>
                <p>Welcome! I'm Efe.</p>
                <SlideButton selector=".intro" text="Click to learn more!" />
            </div>
        </div>
        <article className="intro">
            <h1>Who am I?</h1>
            <div className="intro-grid">
                <div>
                    <img className="ppic" src={PPic} />
                </div>
                <div className="value">
                    <IconHolder icon="cpu" text="High performance, responsive apps"/>
                    <IconHolder icon="sun" text="Clean and understandable code"/>
                    <IconHolder icon="codesandbox" text="Always progressive architecture"/>
                    <IconHolder icon="message-square" text="Communication with peers and customers"/>
                    <IconHolder icon="mic" text="Include every team member to create the best value"/>
                </div>
                <h2 className="intro-grid-full-row">Hi! I am Efe. I am a frontend developer who pursues the goal of creating high performance apps with clean codes. I am a strict believer in team-work and communication and I am a passionate JavaScript warrior. Want to know about my experiences?</h2>
                <div className="intro-grid-full-row">
                    <SlideButton selector=".experience" text="Yes!" />
                </div>
                <div className="intro-grid-full-row">
                    <h2>Or just contact me?</h2>
                </div>
                <div className="intro-grid-full-row">
                    <SlideButton selector=".contact" text="Why not!" />
                </div>
                <div className="intro-grid-full-row">
                    <h2>Or maybe about some social interests?</h2>
                </div>
                <div>
                    <img className="ppic" src={RomePic} />
                </div>
                <div className="value">
                    <IconHolder icon="music" text="Country Guitarist" />
                    <IconHolder icon="headphones" text="Jazz Enthusiast" />
                    <IconHolder icon="book" text="History Nerd *S.P.Q.R.*" />
                    <IconHolder icon="trending" text="Not so-pro Climber" />
                    <IconHolder icon="camera" text="Best Photographer in Qualityland" />
                    
                </div>
            </div>
        </article>
        <article className="experience">
            <h1>My Experience</h1>
            <div className="experiences-grid">
                <div className="experiences-grid-item">
                    <Badge pic={FrontendPic} text="Senior Frontend Developer" />
                </div>
                <div>
                    <Badge pic={ConsultantPic} text="Senior Development Consultant for SAP solutions" />
                </div>
                <div>
                    <Badge pic={IotPic} text="SAP IoT Solutions Developer" />
                </div>
                <div>
                    <Badge pic={FullstackPic} text="Fullstack Developer" />
                </div>
                <h2 className="experiences-grid-full-row">
                    My main focus for the last 4 years is on frontend development. I am fluent with cutting-edge frontend technologies like JavaScript, TypeScript, React.js, GraphQL... 
                </h2>
                <h2 className="experiences-grid-full-row">
                    I have 4 years of consultant experience as a fullstack Web Developer. This gives me unique communication skills. As a consultant, I had to work closely with customers and all shareholders in agile environments. I have a good understanding of what shareholders want and how I can achieve it with the most performant and clean development.
                </h2>
                <h2 className="experiences-grid-full-row">
                    I worked as a fullstack developer for most of my career. Therefore I have extensive knowledge about backend technologies and how to design smart MicroServices.
                </h2>
            </div>
        </article>
        <article className="contact">
            <h1>Contact Me!</h1>
                <Badge pic={PigeonPic} url="https://www.linkedin.com/in/efecan-yilmaz-077a8058/" linkText="Via LinkedIn"/>            
        </article>
        </>
    )
}
