
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ThumbsUp, 
  Clock, 
  Shield, 
  Recycle, 
  HeartHandshake 
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <ThumbsUp className="h-10 w-10 text-company-blue" />,
      title: 'Quality Commitment',
      description: 'We never compromise on the quality of our materials, craftsmanship, or service delivery.'
    },
    {
      icon: <Clock className="h-10 w-10 text-company-blue" />,
      title: 'Timeliness',
      description: 'We respect your time and schedule, ensuring projects are completed within the agreed timeframe.'
    },
    {
      icon: <Shield className="h-10 w-10 text-company-blue" />,
      title: 'Integrity',
      description: 'We operate with complete transparency, honesty, and ethical business practices at all times.'
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-company-blue" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, with solutions tailored to meet your specific needs and preferences.'
    },
    {
      icon: <Award className="h-10 w-10 text-company-blue" />,
      title: 'Innovation',
      description: 'We continually explore new technologies and designs to offer the most advanced products.'
    },
    {
      icon: <Recycle className="h-10 w-10 text-company-blue" />,
      title: 'Sustainability',
      description: 'Our products and processes are designed with environmental responsibility in mind.'
    }
  ];
  
  const milestones = [
    {
      year: 2005,
      title: 'Company Founded',
      description: 'Established with a vision to provide high-quality, energy-efficient uPVC window and door solutions.'
    },
    {
      year: 2008,
      title: 'First Major Project',
      description: 'Completed installation for a 200-unit residential complex, establishing our reputation for quality at scale.'
    },
    {
      year: 2010,
      title: 'ISO 9001 Certification',
      description: 'Received ISO 9001 certification, validating our commitment to quality management systems.'
    },
    {
      year: 2013,
      title: 'Manufacturing Expansion',
      description: 'Expanded our production facility to 50,000 sq. ft. with state-of-the-art German machinery.'
    },
    {
      year: 2016,
      title: 'Energy Efficiency Award',
      description: 'Received national recognition for our energy-efficient window designs and installations.'
    },
    {
      year: 2020,
      title: 'International Expansion',
      description: 'Began exporting products to neighboring countries and established international partnerships.'
    },
    {
      year: 2023,
      title: 'Sustainability Initiative',
      description: 'Launched eco-friendly product line and achieved carbon-neutral manufacturing operations.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Company Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-company-blue">Our Story</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Shanthi Aishwarya uPVC Windows and Doors Ltd. was founded in 2005 with a simple mission: to provide 
                  high-quality, energy-efficient, and aesthetically pleasing window and door solutions for residential 
                  and commercial properties.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What began as a small workshop with five dedicated employees has now grown into a leading manufacturer 
                  with a state-of-the-art production facility spanning 50,000 square feet, employing over 200 skilled 
                  professionals.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for 
                  architects, builders, and homeowners across the region. We continue to invest in the latest technology 
                  and training to deliver products that exceed industry standards and customer expectations.
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Company headquarters" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-company-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-blue">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every product we create, ensuring we deliver 
                excellence in everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-company-blue">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-blue">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key milestones that have shaped our company's growth and success over the years.
              </p>
            </div>

            <div className="relative border-l-2 border-company-blue pl-8 ml-4 md:ml-8 space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-company-blue flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-company-gray p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-company-blue text-white text-sm font-semibold px-3 py-1 rounded mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-company-blue">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/#contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
