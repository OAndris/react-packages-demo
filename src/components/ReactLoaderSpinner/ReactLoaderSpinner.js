import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './ReactLoaderSpinner.scss';
import Title from '../Title/Title';

const LoaderWrapper = ({ type }) => {
    return (
        <div className="react-loader-spinner">
            <Loader
                type={type}
                color="#00BFFF"
                height={80}
                width={80}
                // timeout={5000}
            />
            <p>{type}</p>
        </div>
    );
};

const ReactLoaderSpinner = () => {
    return (
        <section>
            <Title
                title="React Loader Spinner"
                href="https://www.npmjs.com/package/react-loader-spinner"
            />
            <div className="react-loader-spinner-row">
                {[
                    'Audio',
                    'BallTriangle',
                    'Bars',
                    'Circles',
                    'Grid',
                    'Hearts',
                    'Oval',
                    'Puff',
                    'Rings',
                    'TailSpin',
                    'ThreeDots',
                ].map((loaderType) => (
                    <LoaderWrapper type={loaderType} />
                ))}
            </div>
        </section>
    );
};

export default ReactLoaderSpinner;
