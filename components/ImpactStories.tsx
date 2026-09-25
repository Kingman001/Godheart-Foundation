
import React from 'react';
import { Quote, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';

const STORIES = [
  {
    name: "Sarah Adebayo",
    role: "Widow & Small Business Owner",
    title: "From Grief to Financial Independence",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    summary: "After losing her husband, Sarah struggled to provide for her three children. With a business grant from God-heart, she started a tailoring shop that now employs two other widows.",
    fullStory: "Sarah's journey wasn't just about money; it was about dignity. When she first walked into our offices, she was on the verge of eviction. We didn't just give her cash; we gave her a mentor and a 6-week intensive tailoring course. Today, her shop is the most popular in her district, and all her children are in school."
  },
  {
    name: "John Okafor",
    role: "Scholarship Recipient",
    title: "A Future Surgeon in the Making",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
    summary: "John grew up in an orphanage with big dreams and zero funds. Our full scholarship covered his pre-med and medical school tuition.",
    fullStory: "John is currently in his fourth year of Medical School. He maintains a 4.8 GPA and spends his summers volunteering in our rural medical outreaches. 'God-heart didn't just pay my fees; they became the family I never had,' he says. He aims to return to his home village to build a clinic."
  },
  {
    name: "Amina Bello",
    role: "Youth Trainee",
    title: "Coding Her Way Out of Poverty",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80",
    summary: "Amina participated in our 2022 Soft-skills and Trade training where she learned web development.",
    fullStory: "Coming from a background where girls weren't encouraged to touch computers, Amina was a pioneer. She graduated top of her class in our Tech-Empowerment program. Within three months, she secured a remote job with a European tech firm. She now funds the education of her younger siblings."
  }
];

const ImpactStories: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-indigo-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Quote className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Impact Stories</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Witness the ripple effect of your generosity through the lives of those who turned adversity into triumph.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Lives Changed', val: '2,500+', icon: <Users className="text-rose-600" /> },
            { label: 'Business Starts', val: '640+', icon: <TrendingUp className="text-indigo-600" /> },
            { label: 'Communities Reached', val: '45', icon: <Heart className="text-rose-600" /> },
            { label: 'Scholarships Awarded', val: '1,200+', icon: <Users className="text-indigo-600" /> }
          ].map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center space-x-4">
              <div className="p-3 bg-slate-50 rounded-2xl">{m.icon}</div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{m.val}</p>
                <p className="text-sm text-slate-500 font-medium">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {STORIES.map((story, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 relative">
                <div className={`absolute inset-0 bg-gradient-to-tr ${i % 2 === 0 ? 'from-rose-500/20 to-indigo-500/0' : 'from-indigo-500/20 to-rose-500/0'} rounded-[3rem] blur-2xl`}></div>
                <img src={story.image} alt={story.name} className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" />
                <div className={`absolute bottom-6 ${i % 2 === 0 ? '-right-6' : '-left-6'} bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs border border-slate-100 hidden sm:block`}>
                  <Quote className="w-8 h-8 text-rose-600 mb-2" />
                  <p className="text-slate-700 italic font-medium leading-relaxed">
                    "{story.summary}"
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-rose-100 text-rose-700">
                  {story.role}
                </span>
                <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                  {story.title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {story.fullStory}
                </p>
                <div className="pt-6">
                  <button className="flex items-center text-rose-600 font-bold hover:translate-x-2 transition-transform group">
                    Watch Video Interview <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-rose-50 p-12 md:p-20 rounded-[4rem] border border-rose-100">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">Ready to write the next success story?</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Your monthly contribution can be the turning point for a child or a widow currently in waiting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#/donate" className="bg-rose-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-200">
              Start Your Monthly Gift
            </a>
            <a href="#/join-us" className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactStories;
