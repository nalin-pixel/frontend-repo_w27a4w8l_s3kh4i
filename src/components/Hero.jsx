import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white" id="home">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] rounded-full bg-gradient-to-tr from-blue-100/70 via-indigo-100/50 to-teal-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32 relative">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 px-3 py-1 text-xs font-medium text-slate-600 mb-6">
            Clean Grip Socks • Trusted by athletes and studios
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Stay grounded with premium grip socks
          </h1>
          <p className="mt-6 max-w-2xl text-slate-600 text-base sm:text-lg">
            Breathable, antimicrobial, and engineered for traction. Designed for training, pilates, yoga, and everyday movement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-slate-800 transition">
              See pricing
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-slate-900 font-medium ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 transition">
              Wholesale & studios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
            <div className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-3">Antimicrobial fibers</div>
            <div className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-3">Non-slip micro grips</div>
            <div className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-3">Breathable mesh zones</div>
            <div className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-3">Reinforced heel & toe</div>
          </div>
        </div>
      </div>
    </section>
  );
}
