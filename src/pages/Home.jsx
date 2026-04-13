import React from 'react';
import Hero from '../components/layout/common/home/Hero';
import SearchBanner from '../components/layout/common/home/SerchBanner';
import FeaturesStrip from '../components/layout/common/home/FeaturesStrip';
import PartnersSection from '../components/layout/common/home/PartnersSection';
import ServicesPreview from '../components/layout/common/home/ServicesPreview';
import DestinationsPreview from '../components/layout/common/home/DestinationsPreview';
import MedicalSection from '../components/layout/common/home/MedicalSection';
import AISuite from '../components/layout/common/home/AISuite';
import RovaAI from '../components/layout/common/home/RovaAI';
import Testimonials from '../components/layout/common/home/Testimonials';
import VisaPlans from '../components/layout/common/home/VisaPlans'

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBanner />
      <FeaturesStrip />
      <PartnersSection />
      <ServicesPreview />
      {/* <DestinationsPreview /> */}
      <MedicalSection />
      <AISuite />
      <VisaPlans/>
      <RovaAI />
      <Testimonials />
    </>
  );
};

export default Home;