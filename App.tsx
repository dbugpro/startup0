import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
      
      {/* Sticky Mobile Call to Action - Visible only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden z-50">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-95">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default App;