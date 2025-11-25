import React from 'react';
import { Layers, Smartphone, Wind, Cpu, Lock, Maximize } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Modular Architecture',
    description: 'Built with reusability in mind. Components are self-contained and easy to maintain or replace.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile First',
    description: 'Every component is designed to look perfect on phones, tablets, and desktops out of the box.'
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: 'Tailwind CSS',
    description: 'Styled utility-first. No css files to manage, just pure, maintainable classes right in your markup.'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'High Performance',
    description: 'Optimized for speed. Minimal runtime overhead and efficient rendering patterns.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure by Design',
    description: 'Follows best security practices to keep your data and your users safe.'
  },
  {
    icon: <Maximize className="w-6 h-6" />,
    title: 'Scalable Layouts',
    description: 'Grid systems that expand and contract gracefully based on available screen real estate.'
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h3>
          <p className="max-w-2xl mx-auto text-xl text-slate-500">
            Our platform provides the essential building blocks to take your idea from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-indigo-100"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;