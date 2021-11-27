import React from 'react';
import './Badge.css';

export default function Badge(props) {
    return (
        <div className="badge">
            <img className={props.type === 'rect' ? 'pic rect' : 'pic'} src={props.pic}/>
            {props.text ? <h3>{props.text}</h3> : ''}
            {props.url ? (<><a href={props.url} target="_blank">{props.linkText ? props.linkText : props.url}</a></>) : ''}
        </div>
    )
}
