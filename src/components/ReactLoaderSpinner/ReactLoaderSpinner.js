import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './ReactLoaderSpinner.css';

const LoaderWrapper = ({ type }) => {
    return (
        <Loader
            type={type}
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={5000}
        />
    );
};

const ReactLoaderSpinner = () => {
    return (
        <React.Fragment>
            <h2>React Loader Spinner</h2>
            <div className="react-loader-spinner">
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
