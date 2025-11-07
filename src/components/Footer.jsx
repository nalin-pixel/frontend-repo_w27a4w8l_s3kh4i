import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Clean Grip</h3>
            <p className="mt-2 text-sm text-slate-600">Premium grip socks for training, pilates, yoga, and everyday movement.</p>
          </div>
          <div className="md:col-span-2">
            <form className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="Your email for offers" className="col-span-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-300" />
              <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-800 transition">Get updates</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We respect your inbox. Unsubscribe anytime.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Clean Grip Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-800" href="#features">Features</a>
            <a className="hover:text-slate-800" href="#pricing">Pricing</a>
            <a className="hover:text-slate-800" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
