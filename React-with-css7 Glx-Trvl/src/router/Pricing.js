import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingCarts from '../components/Pricing';
import HeroImage from '../components/HeroImage';

const Pricing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage heading='PRICING' text='Choose Your trip.'></HeroImage>
            <PricingCarts></PricingCarts>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;