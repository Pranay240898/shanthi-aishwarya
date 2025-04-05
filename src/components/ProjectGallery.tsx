
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Home, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Modern Residence Renovation",
    location: "Beverly Hills, CA",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&q=80",
    icon: <Home className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Westfield Office Complex",
    location: "Chicago, IL",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    icon: <Building className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Oakwood Apartments",
    location: "Seattle, WA",
    type: "Multi-Family",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    icon: <Building className="h-5 w-5" />
  }
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of successful installations across residential, 
            commercial, and institutional properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-company-gray text-company-blue px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    {project.icon}
                    <span className="ml-1">{project.type}</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
                <Button variant="ghost" className="text-company-blue hover:text-company-lightblue hover:bg-company-gray w-full justify-center">
                  View Project Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
