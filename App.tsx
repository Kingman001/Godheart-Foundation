
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import JoinUs from './components/JoinUs';
import Donate from './components/Donate';
import Contact from './components/Contact';
import ImpactStories from './components/ImpactStories';
import ProgramCard from './components/ProgramCard';
import GeminiAssistant from './components/GeminiAssistant';
import { GraduationCap, Briefcase, Hammer, Users, HeartHandshake, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Program, ImpactData, Testimonial } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Academic Scholarships',
    description: 'Providing full tuition, books, and uniforms for orphans and children of widows to ensure their education never stops.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    icon: <GraduationCap className="w-6 h-6 text-rose-600" aria-hidden="true" />
  },
  {
    id: '2',
    title: 'Business Empowerment Grants',
    description: 'Interest-free seed capital and scaling grants for widows to launch or grow micro-businesses for economic independence.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
    icon: <Briefcase className="w-6 h-6 text-rose-600" aria-hidden="true" />
  },
  {
    id: '3',
    title: 'Trade Skills Training',
    description: 'Intensive vocational training in tailoring, hairdressing, carpentry, and tech skills for youths and widows.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    icon: <Hammer className="w-6 h-6 text-rose-600" aria-hidden="true" />
  },
  {
    id: '4',
    title: 'Soft-Skills & Leadership',
    description: 'Workshops focused on emotional intelligence, communication, and leadership to prepare youths for the modern world.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
    icon: <TrendingUp className="w-6 h-6 text-rose-600" aria-hidden="true" />
  },
  {
    id: '5',
    title: 'Relief Materials Distribution',
    description: 'Quarterly outreach providing food, medical supplies, and essential kits to the most vulnerable communities.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" aria-hidden="true" />
  }
];

const IMPACT_DATA: ImpactData[] = [
  { year: '2020', scholarships: 150, grants: 40, skills: 80 },
  { year: '2021', scholarships: 320, grants: 110, skills: 150 },
  { year: '2022', scholarships: 580, grants: 240, skills: 320 },
  { year: '2023', scholarships: 890, grants: 450, skills: 560 },
  { year: '2024', scholarships: 1240, grants: 680, skills: 920 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Adebayo',
    role: 'Widow / Business Owner',
    content: 'After losing my husband, I didn\'t know how to feed my three kids. God-heart gave me a grant and training. Today, I own a flourishing tailoring shop.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'John Okafor',
    role: 'Scholarship Recipient',
    content: 'Education was a luxury I couldn\'t afford. Thanks to God-heart, I am now in my second year of Medical School on a full scholarship.',
    avatar: 'https://i.pravatar.cc/150?u=john'
  },
  {
    id: '3',
    name: 'Grace Enahoro',
    role: 'Trade Skills Beneficiary',
    content: 'The coding bootcamp opened doors I never thought possible. I am now a junior developer supporting my entire family.',
    avatar: 'https://i.pravatar.cc/150?u=grace'
  }
];

const Home: React.FC = () => (
  <>
    <Hero />
    
    <section className="py-24 bg-indigo-50" aria-labelledby="focus-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="focus-title" className="text-4xl font-extrabold text-slate-900 mb-6">Our Core Focus</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            God-heart Foundation bridges the gap between potential and opportunity for widows and orphans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Empowerment', text: 'Giving fish and teaching how to fish.' },
            { title: 'Education', text: 'Ensuring every child has a seat in the classroom.' },
            { title: 'Sustainability', text: 'Building self-reliant families and communities.' }
          ].map((item, idx) => (
            <article key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-indigo-100 text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-rose-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="programs" className="py-24 bg-white scroll-mt-24" aria-labelledby="programs-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 id="programs-title" className="text-4xl font-extrabold text-slate-900 mb-4">Empowerment Programs</h2>
            <p className="text-lg text-slate-600">
              Tailored initiatives designed to address the specific needs of our community members.
            </p>
          </div>
          <a href="#/contact" className="mt-6 md:mt-0 text-rose-600 font-bold flex items-center hover:translate-x-1 transition-transform focus-visible:outline-rose-600">
            Inquire about programs <TrendingUp className="ml-2 w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>

    <section id="impact" className="py-24 bg-slate-50 overflow-hidden" aria-labelledby="impact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <h2 id="impact-title" className="text-4xl font-extrabold text-slate-900 mb-6">Quantifying Our Impact</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe in transparency. Every donation translates directly into real-world change. Over the last five years, we have scaled our efforts significantly to reach thousands more.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Scholarship Success Rate', value: '98%' },
                { label: 'Business Grant ROI', value: '140%' },
                { label: 'Vocational Job Placement', value: '85%' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200" role="group" aria-label={stat.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">{stat.label}</span>
                    <span className="font-bold text-rose-600">{stat.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2" role="progressbar" aria-valuenow={parseInt(stat.value)} aria-valuemin={0} aria-valuemax={100}>
                    <div className="bg-rose-600 h-2 rounded-full" style={{ width: stat.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-indigo-600" aria-hidden="true" />
                Beneficiaries Trend
              </h3>
              <a href="#/impact-stories" className="text-indigo-600 text-sm font-bold flex items-center hover:underline focus-visible:outline-indigo-600">
                See Stories <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="h-[400px] w-full" aria-label="Impact growth chart showing scholarships, grants, and skills training from 2020 to 2024">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={IMPACT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="scholarships" name="Scholarships" fill="#e11d48" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="grants" name="Grants" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="skills" name="Skills Training" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-4xl font-extrabold text-slate-900 text-center mb-16">Voices of Hope</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <figure key={t.id} className="bg-slate-50 p-10 rounded-3xl relative">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-10">
                <Heart className="w-32 h-32 text-rose-600" aria-hidden="true" />
              </div>
              <blockquote className="text-xl text-slate-700 italic mb-8 relative z-10">
                "{t.content}"
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <img src={t.avatar} alt="" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24" aria-labelledby="cta-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-rose-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true"></div>
          
          <h2 id="cta-title" className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">
            Be the reason someone smiles today.
          </h2>
          <p className="text-rose-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Your support provides the foundation upon which dreams are built. Join us in our journey of radical compassion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
            <a href="#/join-us" className="bg-white text-rose-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl focus-visible:ring-4 focus-visible:ring-white/50 outline-none">
              Become a Volunteer
            </a>
            <a href="#/donate" className="bg-rose-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-rose-800 transition-all border border-rose-500 focus-visible:ring-4 focus-visible:ring-white/50 outline-none">
              Donate Funds
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-rose-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
          </Routes>
        </main>
        <Footer />
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;
