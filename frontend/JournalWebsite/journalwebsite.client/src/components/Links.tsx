import React from 'react';
import './Links.css';

interface LinksParams {
    title: string;
}

const Links: React.FC<LinksParams> = ({ title }) => {
    return (
        <section className = "highlights-section" >
            <h2>{ title }</h2>
            <div className = "highlights">
                <div className="highlight-item">
                    <h3>Blog</h3>
                    <p>Check out my latest blog posts.</p>
                </div>
                <div className = "highlight-item">
                    <h3>My Work </h3>
                    <p>Explore my projects and experience.</p>
                </div>
            </div>
        </section >
    );
};

export default Links;