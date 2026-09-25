
import React from 'react';
import { ArrowRight, ShieldCheck, Users, GraduationCap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-rose-100 text-rose-700 mb-6">
              Empathy in Action
            </span>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Transforming lives</span>
              <span className="block text-rose-600">one heart at a time.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:max-w-xl md:mx-auto lg:mx-0">
              God-heart Foundation is dedicated to providing orphans, widows, and vulnerable youths with the tools they need to flourish—through scholarships, business grants, and life-changing skills.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#programs" 
                className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-rose-600 hover:bg-rose-700 md:text-lg transition-all shadow-xl shadow-rose-200"
              >
                Our Programs <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#/about" 
                className="flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-rose-600 font-bold text-xl">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  1.2k+
                </div>
                <div className="text-slate-500 text-sm">Scholarships</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-rose-600 font-bold text-xl">
                  <Users className="w-6 h-6 mr-2" />
                  500+
                </div>
                <div className="text-slate-500 text-sm">Widows Supported</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-rose-600 font-bold text-xl">
                  <ShieldCheck className="w-6 h-6 mr-2" />
                  $2M+
                </div>
                <div className="text-slate-500 text-sm">Grants Given</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
              <div className="relative">
                <img
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                  alt="Helping orphans"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">100% Impact</p>
                      <p className="text-xs text-slate-500">Every donation counts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
