import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientTicker from '../components/ClientTicker';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import About from '../components/About';
import Trust from '../components/Trust';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <main>
                <Hero />
                <ClientTicker />
                <Services />
                <WhyUs />
                <Process />
                <Trust />
                <About />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
