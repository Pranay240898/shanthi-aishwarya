
import React from 'react';
import { Shield, Thermometer, Lock, Paintbrush, BadgeCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-company-blue" />,
    title: "Long-Lasting Durability",
    description: "Our uPVC products resist weathering, corrosion, and fading for decades of performance."
  },
  {
    icon: <Thermometer className="h-12 w-12 text-company-blue" />,
    title: "Energy Efficient",
    description: "Superior thermal insulation saves on heating and cooling costs throughout the year."
  },
  {
    icon: <Lock className="h-12 w-12 text-company-blue" />,
    title: "Enhanced Security",
    description: "Multi-point locking systems and reinforced frames for your peace of mind."
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-company-blue" />,
    title: "Low Maintenance",
    description: "No painting or staining required - simply wipe clean for long-lasting appearance."
  },
  {
    icon: <BadgeCheck className="h-12 w-12 text-company-blue" />,
    title: "Custom Solutions",
    description: "Tailored designs to match any architectural style or specific requirements."
  },
  {
    icon: <Clock className="h-12 w-12 text-company-blue" />,
    title: "Professional Installation",
    description: "Expert fitting by our trained technicians ensures optimal performance."
  }
];

const Features = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Windows & Doors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine quality materials, expert craftsmanship, and innovative technology to deliver 
            windows and doors that exceed industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
