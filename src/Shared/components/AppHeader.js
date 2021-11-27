import React, {useRef} from 'react';

import './AppHeader.css'

const AppHeader = ({sourceType, children}) => {
    const header = useRef();
    const headerBtn = useRef();

    const onButtonRequest = e => {
        headerBtn.current.classList.toggle('open');
        header.current.classList.toggle('open');
    }

    return (
        <>
        <button className="btn-app-header" onClick={onButtonRequest} ref={headerBtn}>
            <span className="btn-app-header-icon"></span>
            <span className="btn-app-header-text">Menu</span>
        </button>
        <nav className="app-header-nav" ref={header}>
            <ul>
                {children.map(child => {return (<li>{child}</li>)})}
            </ul>
        </nav>
        </>
    )
}

export default AppHeader;