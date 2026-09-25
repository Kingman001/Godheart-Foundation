
import React, { useState } from 'react';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8" aria-label="Global Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <section className="bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10 mb-20" aria-labelledby="footer-newsletter-title">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 id="footer-newsletter-title" className="text-2xl md:text-3xl font-bold text-white mb-2">Join our Newsletter</h3>
              <p className="text-slate-400">Receive impact stories and updates on our global initiatives.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-rose-500 transition-all text-white flex-grow"
                required
              />
              <button className="bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-rose-700 transition-all flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-rose-500/50">
                {subscribed ? 'Subscribed!' : 'Subscribe'} <Send className="ml-2 w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#/" className="flex items-center space-x-2 group w-fit focus-visible:outline-rose-500 rounded p-1" aria-label="God-heart Foundation Home">
              <Heart className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="text-2xl font-bold text-white">God-heart</span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Empowering the most vulnerable members of our society to build a brighter, more sustainable future.
            </p>
            <nav className="flex space-x-4" aria-label="Social Media">
              <a href="#/" className="hover:text-rose-500 transition-colors p-2 bg-white/5 rounded-lg focus-visible:bg-rose-600 outline-none" aria-label="Follow us on Facebook"><Facebook className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#/" className="hover:text-rose-500 transition-colors p-2 bg-white/5 rounded-lg focus-visible:bg-rose-600 outline-none" aria-label="Follow us on Twitter"><Twitter className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#/" className="hover:text-rose-500 transition-colors p-2 bg-white/5 rounded-lg focus-visible:bg-rose-600 outline-none" aria-label="Follow us on Instagram"><Instagram className="w-5 h-5" aria-hidden="true" /></a>
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-explore-title">
            <h4 id="footer-explore-title" className="text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#/about" className="hover:text-rose-500 transition-colors focus-visible:text-rose-500 outline-none">Our History</a></li>
              <li><a href="#/join-us" className="hover:text-rose-500 transition-colors focus-visible:text-rose-500 outline-none">Volunteer</a></li>
              <li><a href="#/impact-stories" className="hover:text-rose-500 transition-colors focus-visible:text-rose-500 outline-none">Impact Stories</a></li>
              <li><a href="#/donate" className="hover:text-rose-500 transition-colors font-bold text-rose-500 focus-visible:text-rose-400 outline-none">Make a Donation</a></li>
            </ul>
          </nav>

          {/* Work */}
          <nav aria-labelledby="footer-work-title">
            <h4 id="footer-work-title" className="text-lg font-bold text-white mb-6">Our Work</h4>
            <ul className="space-y-4">
              <li>Scholarships</li>
              <li>Business Grants</li>
              <li>Trade Skills</li>
              <li>Soft Skills</li>
              <li>Relief Materials</li>
            </ul>
          </nav>

          {/* Contact */}
          <div aria-labelledby="footer-contact-title">
            <h4 id="footer-contact-title" className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 shrink-0" aria-hidden="true" />
                <span className="text-sm">123 Foundation Way, <br />Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-500 shrink-0" aria-hidden="true" />
                <span className="text-sm"><a href="tel:+234800GODHEART" className="hover:text-rose-500 transition-colors">+234 800 GODHEART</a></span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-500 shrink-0" aria-hidden="true" />
                <span className="text-sm"><a href="mailto:info@godheart.org" className="hover:text-rose-500 transition-colors">info@godheart.org</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© {new Date().getFullYear()} God-heart Foundation. All rights reserved.</p>
          <nav className="flex space-x-6 text-sm" aria-label="Legal Navigation">
            <a href="#/" className="hover:text-rose-500 transition-colors focus-visible:text-rose-500 outline-none">Privacy Policy</a>
            <a href="#/" className="hover:text-rose-500 transition-colors focus-visible:text-rose-500 outline-none">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
