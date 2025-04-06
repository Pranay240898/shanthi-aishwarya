
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Sliding Windows',
      description: 'Space-saving windows that slide horizontally, perfect for areas with limited space and for modern aesthetic designs.',
      features: ['Smooth sliding mechanism', 'Space-saving design', 'Weather-resistant seals', 'Multi-point locking system', 'Double or triple glazing options'],
      image: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Casement Windows',
      description: 'Side-hinged windows that open outward, providing maximum ventilation and unobstructed views with excellent security features.',
      features: ['Full opening for maximum ventilation', 'Easy to clean from inside', 'Multi-point locking system', 'Advanced weather sealing', 'Energy-efficient designs'],
      image: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Tilt and Turn Windows',
      description: 'Versatile windows that can tilt inward at the top for ventilation or turn inward fully for easy cleaning and emergency exits.',
      features: ['Dual-function opening', 'Enhanced security', 'Superior insulation', 'Easy cleaning from inside', 'Child safety features available'],
      image: '/placeholder.svg',
    },
    {
      id: 4,
      name: 'Fixed Windows',
      description: 'Non-opening windows designed to maximize natural light and provide uninterrupted views while maintaining excellent insulation.',
      features: ['Maximum light transmission', 'Superior energy efficiency', 'Seamless designs', 'Highly secure', 'Various shapes available'],
      image: '/placeholder.svg',
    },
    {
      id: 5,
      name: 'Sliding Doors',
      description: 'Space-efficient doors that slide horizontally, connecting indoor spaces to patios, gardens, or balconies with minimal intrusion.',
      features: ['Smooth sliding mechanism', 'Space-saving operation', 'Large glass panels for maximum light', 'Multi-point locking for security', 'Low threshold options available'],
      image: '/placeholder.svg',
    },
    {
      id: 6,
      name: 'French Doors',
      description: 'Classic double doors that open outward, ideal for creating a seamless transition between indoor and outdoor spaces with timeless elegance.',
      features: ['Elegant design', 'Full opening for unrestricted access', 'Advanced security features', 'Energy-efficient glazing options', 'Customizable designs'],
      image: '/placeholder.svg',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="products" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-company-blue">Our Premium Windows & Doors</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our extensive range of high-quality uPVC windows and doors, designed for durability, 
                energy efficiency, and aesthetic appeal for any property type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-company-gray rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-56 bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-company-blue">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h4 className="font-semibold mb-2 text-company-darkgray">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/#contact">
                      <Button className="w-full">Request Quote</Button>
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

export default Products;
