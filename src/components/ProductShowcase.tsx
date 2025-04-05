
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Casement Windows",
    description: "Hinged windows that open outward, providing maximum ventilation and easy cleaning.",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    id: 2,
    name: "Sliding Windows",
    description: "Space-saving windows that slide horizontally, perfect for areas with external space constraints.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1200&q=80",
    popular: false
  },
  {
    id: 3,
    name: "Tilt and Turn Windows",
    description: "Versatile windows that can open inward like a door or tilt for ventilation while maintaining security.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },
  {
    id: 4,
    name: "Entry Doors",
    description: "Elegant and secure front doors with optional glass panels and multiple locking points.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1200&q=80",
    popular: false
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding bg-company-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality uPVC windows and doors, designed for 
            energy efficiency, security, and aesthetic appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-company-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular Choice
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="ghost" className="text-company-blue hover:text-company-lightblue hover:bg-company-gray">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
