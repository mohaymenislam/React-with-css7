import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import TrainingSection from '../components/Training';

const Training = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage heading="TRAINING" text="Pre-Flight & in-Flight Training"></HeroImage>
             <TrainingSection></TrainingSection>
            <Footer></Footer>
        </div>
    );
};

export default Training;