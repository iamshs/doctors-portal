import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinement from './MakeAppoinement';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
           <Banner />
           <Info />
           <Services />
           <Care />
           <MakeAppoinement />
           <Testimonial />
           <Contact />
           <Footer />
        </div>
    );
};

export default Home;