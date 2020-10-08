import React from 'react';
import './App.scss';
import ReactLoaderSpinner from './components/ReactLoaderSpinner/ReactLoaderSpinner';
import ReactAnimatedBurgers from './components/ReactAnimatedBurgers/ReactAnimatedBurgers';

const App = () => {
    return (
        <div className="App">
            <h1>Hello</h1>
            <ReactLoaderSpinner />
            <ReactAnimatedBurgers />
        </div>
    );
};

export default App;
