import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'react-feather';

import './NotFound.css';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <h1>Oops! Nothing to see here!</h1>
            <h2>Except that cute cat!</h2>
            <h3>Look at the cat! Look at it!</h3>

            <span onClick={() => navigate('/')}>Or not. OK. Go back then.<ArrowLeft className="button-icon"/></span>
        </div>
    )
}
