import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">Clean Grip</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
          <a href="#pricing" className="ml-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-slate-800 transition">
            Shop now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
