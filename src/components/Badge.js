import React from 'react';
import './Badge.css';

export default function Badge(props) {
    return (
        <div>
            <img className="pic" src={props.pic}/>
            <h3>{props.text}</h3>
        </div>
    )
}
