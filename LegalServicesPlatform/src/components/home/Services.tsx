import React from 'react';
import { Scale, Briefcase, FileText, Users } from 'lucide-react';

const services = [
  {
    title: 'Corporate Law',
    description: 'Expert guidance on business law matters including contracts, mergers, and acquisitions.',
    icon: Briefcase
  },
  {
    title: 'Civil Litigation',
    description: 'Professional representation in civil disputes and litigation proceedings.',
    icon: Scale
  },
  {
    title: 'Family Law',
    description: 'Compassionate legal support for divorce, custody, and family-related matters.',
    icon: Users
  },
  {
    title: 'Documentation',
    description: 'Comprehensive legal documentation services for various requirements.',
    icon: FileText
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Legal Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive legal solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <Icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;