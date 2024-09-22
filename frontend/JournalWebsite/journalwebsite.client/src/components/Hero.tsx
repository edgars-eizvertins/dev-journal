import React, { ReactNode } from 'react';
import './Hero.css';

interface HeroParams {
    title: string;
    children?: ReactNode;
}

const Hero: React.FC<HeroParams> = ({ title, children }) => {
    return (
        <section className = "hero-section">
            <div className="hero-content">
                <h1>{ title }</h1>
                <p>{ children }</p>
                {/*<button className="cta-button">View My CV</button>*/}
                {/*<button className="cta-button">Read My Blog</button>*/}
            </div>
        </section>
    );
};

export default Hero;
