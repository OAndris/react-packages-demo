import React, { useState } from 'react';
import CountUp from 'react-countup';
import Title from '../Title/Title';
import './ReactCountUp.scss';

const ReactCountUp = () => {
    const [resetedCount, setResetedCount] = useState(0);

    return (
        <section>
            <Title
                title="React CountUp"
                href="https://www.npmjs.com/package/react-countup"
            />
            <div id="counters" key={resetedCount}>
                <div>
                    <p>end=100</p>
                    <CountUp end={100} />
                </div>
                <div>
                    <p>end=100; delay=2</p>
                    <CountUp end={100} delay={2} />
                </div>
                <div>
                    <p>end=100; duration=5</p>
                    <CountUp end={100} duration={5} />
                </div>
            </div>
            <button onClick={() => setResetedCount(resetedCount + 1)}>
                Reload
            </button>
        </section>
    );
};

export default ReactCountUp;
