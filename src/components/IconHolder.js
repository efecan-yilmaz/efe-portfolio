import React, { useEffect, useState } from 'react';
import './IconHolder.css';

import { Cpu, Codesandbox, Sun, MessageSquare, Mic, 
    XCircle, Camera, Music, Headphones, TrendingUp, BookOpen } from 'react-feather';

export default function IconHolder(props) {
    const [icon, setIcon] = useState();

    useEffect(() => {
        let icon;
        switch (props.icon) {
            case 'cpu':
                icon = (<Cpu />);
                break;
            case 'codesandbox':
                icon = (<Codesandbox />);
                break;
            case 'sun':
                icon = (<Sun />);
                break;
            case 'message-square':
                icon = (<MessageSquare />);
                break;
            case 'mic':
                icon = (<Mic />);
                break;
            case 'camera':
                icon = (<Camera />);
                break;
            case 'music':
                icon = (<Music />);
                break;
            case 'headphones':
                icon = (<Headphones />);
                break;
            case 'trending':
                icon = (<TrendingUp />);
                break;
            case 'book':
                icon = (<BookOpen />);
                break;
            default:
                icon = (<XCircle />);
                break;
        }
        setIcon(icon);
    }, []);

    return (
        <div>
            {icon}
            <p>{props.text}</p>
        </div>
    )
}
