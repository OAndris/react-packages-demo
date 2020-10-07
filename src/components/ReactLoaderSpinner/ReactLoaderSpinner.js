import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './ReactLoaderSpinner.css';

const LoaderWrapper = ({ type }) => {
    return (
        <div className="react-loader-spinner">
            <Loader
                type={type}
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={5000}
            />
            <p>{type}</p>
        </div>
    );
};

const ReactLoaderSpinner = () => {
    return (
        <React.Fragment>
            <h2>
                <a
                    href="https://www.npmjs.com/package/react-loader-spinner"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Loader Spinner
                </a>
            </h2>
            <div className="react-loader-spinner-row">
                <LoaderWrapper type="Audio" />
                <LoaderWrapper type="BallTriangle" />
                <LoaderWrapper type="Bars" />
                <LoaderWrapper type="Circles" />
                <LoaderWrapper type="Grid" />
                <LoaderWrapper type="Hearts" />
                <LoaderWrapper type="Oval" />
                <LoaderWrapper type="Puff" />
                <LoaderWrapper type="Rings" />
                <LoaderWrapper type="TailSpin" />
                <LoaderWrapper type="ThreeDots" />
            </div>
        </React.Fragment>
    );
};

export default ReactLoaderSpinner;
