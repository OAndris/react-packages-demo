import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Title from '../Title/Title';

const ReactResponsiveCarousel = () => {
    return (
        <section>
            <Title
                title="React Responsive Carousel"
                href="https://www.npmjs.com/package/react-responsive-carousel"
            />
            <Carousel>
                <div>
                    <img src="https://picsum.photos/1920/700?random=1" alt="" />
                    <p className="legend">This is the first random image.</p>
                </div>
                <div>
                    <img src="https://picsum.photos/1920/700?random=2" alt="" />
                    <p className="legend">This is the second random image.</p>
                </div>
                <div>
                    <img src="https://picsum.photos/1920/700?random=3" alt="" />
                    <p className="legend">This is the third random image.</p>
                </div>
                <div>
                    <img src="https://picsum.photos/1920/700?random=4" alt="" />
                    <p className="legend">This is the fourth random image.</p>
                </div>
                <div>
                    <img src="https://picsum.photos/1920/700?random=5" alt="" />
                    <p className="legend">This is the fifth random image.</p>
                </div>
            </Carousel>
        </section>
    );
};

export default ReactResponsiveCarousel;
