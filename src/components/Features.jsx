import React from 'react';
import { ShieldCheck, Footprints, Wind, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure Traction',
    desc: 'Precision-placed micro grips keep you planted through every movement.',
  },
  {
    icon: Wind,
    title: 'Breathable Comfort',
    desc: 'Engineered mesh zones and moisture-wicking fibers for all-day wear.',
  },
  {
    icon: Footprints,
    title: 'Anatomical Fit',
    desc: 'Left/right contouring with reinforced heel and toe for durability.',
  },
  {
    icon: Sparkles,
    title: 'Fresh Technology',
    desc: 'Antimicrobial treatment resists odor and keeps your socks fresher longer.',
  },
];

export default function Features() {
  return (
    <section className="bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Engineered for movement</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Every detail is designed to give you confidence—from studio floors to daily routines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-slate-50/60 ring-1 ring-slate-200 p-6 hover:shadow-md transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
                <Icon className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
