import React from 'react';
import './App.scss';
import ReactLoaderSpinner from './components/ReactLoaderSpinner/ReactLoaderSpinner';

const App = () => {
    return (
        <div className="App">
            <h1>Hello</h1>
            <ReactLoaderSpinner />
        </div>
    );
};

export default App;
