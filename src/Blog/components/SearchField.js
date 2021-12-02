import React from 'react';

import './SearchField.css';

import { Search } from 'react-feather';

const SearchField = () => {
    return (
        <div>
            <input className="search-field-input" placeholder="Add # to search for tags"></input><Search onClick={()=> alert('asd')} size="2rem" className="search-field-button"/>
        </div>
    )
}

export default SearchField;
