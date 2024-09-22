import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';  // If you created a Navbar
import Footer from './components/Footer';  // If you created a Footer

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes like /blog or /cv later */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
