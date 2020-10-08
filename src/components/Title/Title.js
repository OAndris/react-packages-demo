import React from 'react';
import './Title.scss';

const Title = ({ title, href }) => {
    return (
        <h2>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </h2>
    );
};

export default Title;
