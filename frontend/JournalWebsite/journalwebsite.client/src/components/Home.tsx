import React from 'react';
import './Home.css';
import Hero from './Hero';
import About from './About';
import Links from './Links';

const Home: React.FC = () => { return (
    <div className="home-container" >

        <Hero title="Hello, I'm Edgar">
            A passionate software developer, traveler, and tech enthusiast.
        </Hero>

        <About title="About me">
            I am a software developer with a passion for technology and programming.I specialize in .NET, JavaScript, React, and more.I love creating efficient solutions and learning new things.
        </About>

        <Links title="Quick Links" />
    </div>
  );
};

export default Home;
