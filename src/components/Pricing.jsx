import React from 'react';

const tiers = [
  {
    name: 'Single Pair',
    price: '$14',
    period: 'per pair',
    features: ['Premium cotton blend', 'Micro-grip sole', 'Anti-odor finish', '30-day guarantee'],
    cta: 'Buy 1',
    highlight: false,
  },
  {
    name: '3-Pack',
    price: '$36',
    period: 'bundle',
    features: ['Save 14%', 'Mix colors and sizes', 'Antimicrobial fibers', 'Free returns'],
    cta: 'Buy 3-Pack',
    highlight: true,
  },
  {
    name: '6-Pack',
    price: '$66',
    period: 'bundle',
    features: ['Save 21%', 'Best for training', 'Reinforced heel & toe', 'Free shipping'],
    cta: 'Buy 6-Pack',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50" id="pricing">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, flexible pricing</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Choose a single pair or bundle and save. Wholesale pricing available for studios and retailers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-white ${tier.highlight ? 'shadow-xl border border-slate-200' : 'shadow-sm'}`}>
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-500 mb-1 text-sm">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-800 inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-lg px-4 py-2.5 font-medium transition ${tier.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
