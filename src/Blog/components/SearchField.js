import React, {useRef} from 'react';

import './SearchField.css';

import { Key, Search } from 'react-feather';

const SearchField = ({onSearchRequest}) => {
    const searchField = useRef();

    return (
        <div>
            <span className="search-field-wrapper">
                <input ref={searchField} className="search-field-input" onKeyPress={(event) => { if (event.key === 'Enter') onSearchRequest(searchField.current.value); }} placeholder="Add # to search for tags"></input>
                <Search onClick={() => { onSearchRequest(searchField.current.value); }} size="2rem" className="search-field-button"/>
            </span>
        </div>
    )
}

export default SearchField;
