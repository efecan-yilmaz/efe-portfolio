import React from 'react';

import './ShellBar.css';
import SearchField from './SearchField';

const ShellBar = ({onSearchRequest}) => {
    return (
        <div className="shell-bar-main">
            <SearchField onSearchRequest={onSearchRequest}/>
        </div>
    )
}

export default ShellBar;