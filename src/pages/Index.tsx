
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import ProjectGallery from '@/components/ProjectGallery';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductShowcase />
        <ProjectGallery />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
