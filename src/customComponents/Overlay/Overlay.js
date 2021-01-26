import React from 'react';
import './Overlay.scss';

const Overlay = ({ children, onClick }) => {
    return (
        <>
            <div className="overlay" onClick={onClick}></div>
            {children}
        </>
    );
};

export default Overlay;
