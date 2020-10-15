import React, { useState, useCallback } from 'react';
import {
    HamburgerSpin,
    HamburgerArrow,
    HamburgerArrowAlt,
    HamburgerArrowAltReverse,
    HamburgerBoring,
    HamburgerCollapse,
    HamburgerElastic,
    HamburgerEmphatic,
    HamburgerMinus,
    HamburgerSlider,
    HamburgerSpring,
    HamburgerSqueeze,
    HamburgerStand,
} from 'react-animated-burgers';
import Title from '../Title/Title';
import './ReactAnimatedBurgers.scss';

const ReactAnimatedBurgers = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = useCallback(
        () => setIsActive((prevState) => !prevState),
        []
    );

    return (
        <section>
            <Title
                title="React Animated Burgers"
                href="https://www.npmjs.com/package/react-animated-burgers"
            />
            <div className="hamburger-row">
                <HamburgerSpin
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerArrow
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerArrowAlt
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerArrowAltReverse
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerBoring
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerCollapse
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerElastic
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerEmphatic
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerMinus
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerSlider
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerSpring
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerSqueeze
                    buttonColor="orange"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
                <HamburgerStand
                    buttonColor="gray"
                    barColor="#F5F5F5"
                    {...{ isActive, toggleButton }}
                />
            </div>
        </section>
    );
};

export default ReactAnimatedBurgers;
