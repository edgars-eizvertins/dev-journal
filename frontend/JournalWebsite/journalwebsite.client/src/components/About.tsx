import React, { ReactNode } from 'react';
import './About.css';

interface AboutParams {
    title: string;
    children?: ReactNode;
}

const About: React.FC<AboutParams> = ({ title, children }) => {
    return (
        <section className = "about-section">
            <h2>{ title }</h2>
            <p>
                { children }
            </p>
        </section>
    );
};

export default About;