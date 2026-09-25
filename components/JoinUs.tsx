
import React from 'react';
import { Users, Handshake, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const JoinUs: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Volunteer Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-12 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd937c9be54a?auto=format&fit=crop&q=80" 
                alt="Volunteers" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <p className="text-rose-600 font-bold text-3xl mb-1">500+</p>
                <p className="text-slate-600 font-medium leading-tight">Active volunteers worldwide changing lives monthly.</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 flex items-center">
                <Users className="w-10 h-10 mr-4 text-rose-600" /> Volunteer With Us
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Your time and skills are more valuable than you think. Whether you are a teacher, a builder, a tech expert, or simply have a heart for people, we need you.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Mentor orphans in leadership and career skills.',
                  'Teach trade skills (tailoring, baking, coding).',
                  'Assist in relief material distribution.',
                  'Help with administrative and social media support.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-700 transition-all shadow-xl shadow-rose-100">
                Apply to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Handshake className="w-[30rem] h-[30rem]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Corporate & Community Partnership</h2>
            <p className="text-xl text-indigo-100">
              Scale your Corporate Social Responsibility (CSR) by partnering with an organization that values transparency and high-impact results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Program Sponsorship', desc: 'Sponsor an entire vocational training cohort or a scholarship fund for a district.' },
              { title: 'Employee Giving', desc: 'Implement automated payroll giving programs with corporate matching.' },
              { title: 'Project Partnerships', desc: 'Collaborate on infrastructure projects like building skills centers or orphanages.' }
            ].map((p, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-indigo-100 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 text-slate-900 lg:flex items-center justify-between">
            <div className="lg:max-w-xl mb-10 lg:mb-0">
              <h3 className="text-3xl font-bold mb-4">Start a Conversation</h3>
              <p className="text-slate-600 text-lg">
                Let's discuss how your organization can leave a lasting legacy. Our partnership team is ready to craft a bespoke collaboration strategy with you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                <Mail className="w-6 h-6 text-rose-600" />
                <span className="font-bold">partnerships@godheart.org</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                <Handshake className="w-6 h-6 text-indigo-600" />
                <span className="font-bold">Contact Partnership Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
