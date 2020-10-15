import React from 'react';
import './App.scss';
import ReactLoaderSpinner from './components/ReactLoaderSpinner/ReactLoaderSpinner';
import ReactAnimatedBurgers from './components/ReactAnimatedBurgers/ReactAnimatedBurgers';
import ReactResponsiveCarousel from './components/ReactResponsiveCarousel/ReactResponsiveCarousel';
import ReactCountUp from './components/ReactCountUp/ReactCountUp';
import ReactChartJs2 from './components/ReactChartJs2/ReactChartJs2';

const App = () => {
    return (
        <div className="App">
            <h1>Demo of some React packages</h1>
            <ReactLoaderSpinner />
            <ReactAnimatedBurgers />
            <ReactResponsiveCarousel />
            <ReactCountUp />
            <ReactChartJs2 />
        </div>
    );
};

export default App;
