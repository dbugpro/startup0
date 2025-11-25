import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16 pb-32 lg:pt-32 lg:pb-40">
      {/* Abstract Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-32 -right-24 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800 mb-8">
            <Zap className="mr-2 h-4 w-4 text-indigo-600" />
            <span>v2.0 is now live! See what's new &rarr;</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Build modern web apps <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              at lightning speed
            </span>
          </h1>
          
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A powerful, clean, and flexible foundation for your next project. 
            Focus on your product logic while we handle the aesthetics and responsiveness.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="primary" rightIcon={<ArrowRight size={20} />}>
              Start Building Free
            </Button>
            <Button size="lg" variant="outline" leftIcon={<Globe size={20} />}>
              View Documentation
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/60 flex justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-500" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-amber-500" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;