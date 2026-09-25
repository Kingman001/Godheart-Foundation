
import React, { useState } from 'react';
import { Target, Eye, History, Award, HelpCircle, ChevronDown, Heart, ShieldCheck, Star, Zap } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';
import { TESTIMONIALS } from '../App';

const FAQ_ITEMS = [
  {
    question: "How are my donations used?",
    answer: "100% of public donations go directly to our programs. Administrative costs are covered by separate private grants and our board of directors."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, God-heart Foundation is a registered 501(c)(3) non-profit organization. You will receive a tax receipt immediately after your donation."
  },
  {
    question: "Who is eligible for your scholarship program?",
    answer: "Our scholarships are primarily for orphans and children of widows who demonstrate academic potential but lack financial support."
  },
  {
    question: "How can I apply for a business grant?",
    answer: "Applications for business grants are opened quarterly. Widows can apply through our regional centers or via the 'Apply' button on our programs page."
  },
  {
    question: "Can I volunteer remotely?",
    answer: "Yes! While many roles are on-site, we have remote opportunities in administrative support, social media, and digital mentoring."
  }
];

const CORE_VALUES = [
  { 
    title: 'Compassion', 
    desc: 'Feeling the heartbeat of the hurting and responding with radical kindness.',
    icon: <Heart className="w-8 h-8 text-rose-600" aria-hidden="true" />,
    bgColor: 'bg-rose-50'
  },
  { 
    title: 'Integrity', 
    desc: 'Unwavering honesty in every transaction and transparency in every report.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" aria-hidden="true" />,
    bgColor: 'bg-emerald-50'
  },
  { 
    title: 'Excellence', 
    desc: 'Setting the gold standard in non-profit operations and service delivery.',
    icon: <Star className="w-8 h-8 text-amber-600" aria-hidden="true" />,
    bgColor: 'bg-amber-50'
  },
  { 
    title: 'Empowerment', 
    desc: 'Providing the keys for individuals to unlock their own sustainable future.',
    icon: <Zap className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
    bgColor: 'bg-indigo-50'
  }
];

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="about-hero-title" className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Story & Soul</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A journey of a thousand miles that began with a single heartbeat of compassion for the forgotten.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="mission-vision-title">
        <h2 id="mission-vision-title" className="sr-only">Mission and Vision</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article className="bg-rose-50 p-12 rounded-[3rem] border border-rose-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform" aria-hidden="true">
              <Target className="w-32 h-32 text-rose-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3 text-rose-600" aria-hidden="true" /> Our Mission
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              To empower the vulnerable—widows, orphans, and youths—by providing them with the necessary educational, financial, and vocational tools to transition from a life of lack to a life of sustainable abundance and purpose.
            </p>
          </article>

          <article className="bg-indigo-50 p-12 rounded-[3rem] border border-indigo-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform" aria-hidden="true">
              <Eye className="w-32 h-32 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-indigo-600" aria-hidden="true" /> Our Vision
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              We envision a world where widowhood is not a sentence to poverty, where orphancy is not a barrier to excellence, and where every youth is equipped with the skills to innovate and lead.
            </p>
          </article>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-slate-50" aria-labelledby="history-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-slate-200 text-slate-700 mb-6">
                Established 2015
              </div>
              <h2 id="history-title" className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
                <History className="w-10 h-10 mr-4 text-rose-600" aria-hidden="true" /> Our History
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  God-heart Foundation was born out of a personal encounter by our founder, Dr. Angela Mensah, who saw first-hand the devastating economic impact of sudden widowhood in local communities.
                </p>
                <p>
                  What started as a small weekly food drive for three widows has blossomed into a multi-national NGO. By 2018, we integrated vocational training into our relief efforts, recognizing that "relief is a bridge, but skills are the destination."
                </p>
                <p>
                  Today, we operate in 12 regions, having funded over 1,200 scholarships and helped establish 500+ micro-businesses managed by widows. Our story is still being written, with every life transformed adding a new chapter of hope.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" alt="Founder with community members" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80" alt="Students in a classroom" className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 overflow-hidden" aria-labelledby="values-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="values-title" className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center">
              <Award className="w-10 h-10 mr-4 text-rose-600" aria-hidden="true" /> Our Core Values
            </h2>
            <p className="text-xl text-slate-600">The unshakeable principles that guide every decision and action we take at God-heart.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((v, i) => (
              <article 
                key={i} 
                className="group p-10 rounded-[2.5rem] border border-slate-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className={`w-16 h-16 ${v.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform`} aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                <div className="absolute -bottom-2 -right-2 opacity-5 transform scale-150 group-hover:scale-110 transition-transform" aria-hidden="true">
                  {v.icon}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel testimonials={TESTIMONIALS} />

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center">
              <HelpCircle className="w-10 h-10 mr-4 text-rose-600" aria-hidden="true" /> Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">Everything you need to know about God-heart Foundation and how we operate.</p>
          </div>
          
          <div className="space-y-4" role="list">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow" role="listitem">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left group flex justify-between items-center focus-visible:bg-rose-50 outline-none transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {item.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-slate-400 group-hover:text-rose-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div 
                  id={`faq-answer-${i}`}
                  className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <div className="px-6 pb-6 text-slate-600 border-t border-slate-50 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500">Still have questions? <a href="#/contact" className="text-rose-600 font-bold hover:underline focus-visible:outline-rose-600 rounded">Contact our support team</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
