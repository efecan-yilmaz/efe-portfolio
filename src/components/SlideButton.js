import React from 'react';
import './SlideButton.css';

import { ArrowRight } from 'react-feather';

export default function SlideButton(props) {
    return (
        <span onClick={() => { document.querySelector(props.selector).scrollIntoView({behavior: 'smooth'}); }} className="slide-button">{props.text}<ArrowRight className="button-icon"/></span>
    )
}
