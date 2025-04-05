
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-company-gray">
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 z-10"></div>
      <div 
        className="h-[600px] bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2965&q=80)' }}
      >
        <div className="container-custom h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-company-blue mb-4">
              Premium uPVC Windows & Doors
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Enhance your property with our industry-leading uPVC solutions. 
              Energy efficient, durable, and custom-designed for homes, hospitals, 
              apartments and commercial buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center">
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
