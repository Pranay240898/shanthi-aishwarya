
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Villa Renovation',
      category: 'Residential',
      location: 'Palm Beach, FL',
      description: 'Complete window and door replacement for a luxury beachfront villa, enhancing both aesthetics and energy efficiency.',
      features: ['Floor-to-ceiling sliding doors', 'Hurricane-resistant windows', 'Soundproof glazing', 'Minimalist frames'],
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'City Heights Apartment Complex',
      category: 'Apartment Building',
      location: 'Downtown Seattle, WA',
      description: 'Installation of over 500 windows and 200 doors for a new 30-story apartment building in the city center.',
      features: ['Tilt and turn windows', 'Acoustic insulation', 'Thermal efficiency', 'Unified aesthetic across all units'],
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Riverfront Medical Center',
      category: 'Hospital',
      location: 'Chicago, IL',
      description: 'Custom windows and doors solution for a state-of-the-art medical facility, prioritizing hygiene and patient comfort.',
      features: ['Easy-clean surfaces', 'UV-filtering glass', 'Automated door systems', 'Optimized natural light'],
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Highland Office Park',
      category: 'Commercial',
      location: 'Denver, CO',
      description: 'Energy-efficient window system for a LEED-certified office complex, reducing operating costs while enhancing workspace quality.',
      features: ['Triple glazing', 'Solar control coating', 'Integrated blinds', 'Custom corporate branding elements'],
      image: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Heritage Mansion Restoration',
      category: 'Historical',
      location: 'Savannah, GA',
      description: 'Careful restoration and replacement of period-appropriate windows and doors while improving energy performance.',
      features: ['Historically accurate designs', 'Modern thermal properties', 'Custom hardware finishes', 'Preserved original features where possible'],
      image: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Lakeside Resort & Spa',
      category: 'Hospitality',
      location: 'Lake Tahoe, NV',
      description: 'Floor-to-ceiling window walls and panoramic sliding doors to maximize spectacular views for hotel guests.',
      features: ['Panoramic sliding systems', 'Thermal break aluminum frames', 'Integrated screening', 'Sound reduction for guest comfort'],
      image: '/placeholder.svg',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="projects" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-company-blue">Our Featured Projects</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful installations across various property types, 
                showcasing the versatility and quality of our uPVC windows and doors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-company-gray rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-company-blue">{project.title}</h3>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="inline-block bg-company-blue/20 text-company-blue text-xs px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {project.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <h4 className="font-semibold mb-2 text-company-darkgray">Solutions Implemented:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/#contact">
                      <Button className="w-full">Request Similar Project</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
