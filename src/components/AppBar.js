import React from 'react';
import './AppBar.css';

export default function AppBar() {

    const onLinkClick = (className) => {
        document.querySelector('.' + className).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="app-bar">
            <a onClick={() => onLinkClick('welcome')}>Welcome!</a>
            <a onClick={() => onLinkClick('intro')}>Intro</a>
            <a onClick={() => onLinkClick('experience')}>Experiences</a>
            <a onClick={() => onLinkClick('contact')}>Contact</a>
        </div>
    )
}
