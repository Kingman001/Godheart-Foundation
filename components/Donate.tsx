
import React, { useState } from 'react';
import { CreditCard, Heart, ShieldCheck, Zap } from 'lucide-react';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  const presets = ['20', '50', '100', '250', '500'];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" aria-labelledby="donation-title">
          <h1 id="donation-title" className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Invest in Human Potential</h1>
          <p className="text-xl text-slate-600">Your contribution directly funds scholarships, grants, and skills training.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
              {/* Frequency Toggle */}
              <div className="flex p-1 bg-slate-100 rounded-2xl mb-10 w-fit mx-auto" role="radiogroup" aria-label="Donation frequency">
                <button
                  onClick={() => setFrequency('once')}
                  role="radio"
                  aria-checked={frequency === 'once'}
                  className={`px-8 py-2.5 rounded-xl font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${frequency === 'once' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Give Once
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  role="radio"
                  aria-checked={frequency === 'monthly'}
                  className={`px-8 py-2.5 rounded-xl font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${frequency === 'monthly' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Give Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-10">
                <p className="block text-slate-900 font-bold mb-4 text-lg" id="amount-label">Select Amount (USD)</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4" role="radiogroup" aria-labelledby="amount-label">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => { setAmount(p); setCustomAmount(''); }}
                      role="radio"
                      aria-checked={amount === p && !customAmount}
                      className={`py-4 rounded-2xl font-bold border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${amount === p && !customAmount ? 'border-rose-600 bg-rose-50 text-rose-600' : 'border-slate-100 text-slate-500 hover:border-rose-200'}`}
                    >
                      ${p}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <label htmlFor="custom-amount" className="sr-only">Enter custom donation amount in USD</label>
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold" aria-hidden="true">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                    className="w-full pl-10 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none font-bold text-slate-900 transition-all"
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 mb-10">
                <p className="block text-slate-900 font-bold text-lg">Personal Information</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input id="firstName" type="text" placeholder="First Name" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input id="lastName" type="text" placeholder="Last Name" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="donate-email" className="sr-only">Email Address</label>
                  <input id="donate-email" type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none transition-all" />
                </div>
              </div>

              {/* Payment Button */}
              <button className="w-full bg-rose-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-rose-200">
                <CreditCard className="mr-3 w-6 h-6" aria-hidden="true" /> Complete Donation
              </button>
              
              <div className="mt-6 flex items-center justify-center text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 mr-2" aria-hidden="true" /> Secured by 256-bit SSL encryption
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-6" aria-labelledby="why-give-title">
            <div className="bg-indigo-900 text-white p-8 rounded-[2.5rem] shadow-xl">
              <h3 id="why-give-title" className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-amber-400" aria-hidden="true" /> Why give?
              </h3>
              <ul className="space-y-4 text-indigo-100">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 text-rose-400 shrink-0 mt-1" aria-hidden="true" />
                  <span>$20 provides a school kit for an orphan for a whole year.</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 text-rose-400 shrink-0 mt-1" aria-hidden="true" />
                  <span>$100 empowers a widow with a micro-business grant.</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 text-rose-400 shrink-0 mt-1" aria-hidden="true" />
                  <span>$500 covers full university tuition for a semester.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Tax Deductible</h4>
              <p className="text-sm text-slate-500">
                God-heart Foundation is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the full extent of the law.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Donate;
