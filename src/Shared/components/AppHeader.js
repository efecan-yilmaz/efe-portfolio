import React, {useRef} from 'react';

import './AppHeader.css'

const AppHeader = ({headerType, children}) => {
    const header = useRef();
    const headerBtn = useRef();

    const onButtonClick = e => {
        headerBtn.current.classList.toggle('open');
        header.current.classList.toggle('open');
    }

    const onMenuClick = (key, hType) => {
        if (hType === 'samePage') {
            headerBtn.current.classList.remove('open');
            header.current.classList.remove('open');
            document.querySelector('.' + key).scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
        <button className="btn-app-header" onClick={onButtonClick} ref={headerBtn}>
            <span className="btn-app-header-icon"></span>
            <span className="btn-app-header-text">Menu</span>
        </button>
        <nav className="app-header-nav" ref={header}>
            <ul>
                {children.map(child => <li key={child.key} onClick={() => {onMenuClick(child.key, headerType)}}>{child}</li>)}
            </ul>
        </nav>
        </>
    )
}

export default AppHeader;