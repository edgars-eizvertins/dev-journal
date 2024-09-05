import React from 'react';
import './Home.css';  // We will style this page later

const Home: React.FC = () => {
    return (
        <div className= "home-container" >
        {/* Hero Section */ }
        < section className = "hero-section" >
            <div className="hero-content" >
                <h1>Hello, I’m Edgar </h1>
                    < p > A passionate software developer, traveler, and tech enthusiast.</p>
                        < button className = "cta-button" > View My CV </button>
                            < button className = "cta-button" > Read My Blog </button>
                                </div>
                                </section>

    {/* About Section */ }
    <section className="about-section" >
        <h2>About Me </h2>
            <p>
          I am a software developer with a passion for technology and programming.I specialize in .NET, JavaScript, React, and more.I love creating efficient solutions and learning new things.
        </p>
        </section>

    {/* Quick Links or Highlights */ }
    <section className="highlights-section" >
        <h2>Quick Links </h2>
            < div className = "highlights" >
                <div className="highlight-item" >
                    <h3>Blog </h3>
                    < p > Check out my latest blog posts.</p>
                        </div>
                        < div className = "highlight-item" >
                            <h3>My Work </h3>
                                < p > Explore my projects and experience.</p>
                                    </div>
                                    </div>
                                    </section>
                                    </div>
  );
};

export default Home;
