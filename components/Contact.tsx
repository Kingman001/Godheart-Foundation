
import React, { useState } from 'react';
// Added ChevronDown to the imported icons
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('A valid email is required to send a message.');
      return;
    }

    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50" aria-labelledby="contact-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-header" className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our programs or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="contact-info-title">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 id="contact-info-title" className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="bg-rose-100 p-4 rounded-2xl" aria-hidden="true">
                  <MapPin className="w-8 h-8 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Visit Our Office</h3>
                  <p className="text-slate-600">123 Foundation Way, Victoria Island,<br />Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="bg-indigo-100 p-4 rounded-2xl" aria-hidden="true">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600"><a href="mailto:info@godheart.org" className="hover:text-rose-600 underline">info@godheart.org</a></p>
                  <p className="text-slate-600"><a href="mailto:partnerships@godheart.org" className="hover:text-rose-600 underline">partnerships@godheart.org</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="bg-emerald-100 p-4 rounded-2xl" aria-hidden="true">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Call Support</h3>
                  <p className="text-slate-600"><a href="tel:+234800GODHEART" className="hover:text-rose-600 underline">+234 800 GODHEART</a></p>
                  <p className="text-slate-600">Mon-Fri: 9am - 5pm</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-4">Emergency Support?</h3>
              <p className="text-slate-400 mb-6 italic">"No one has ever become poor by giving."</p>
              <p className="text-slate-300">If you are a widow in urgent need of relief materials, please visit our regional centers directly or call our emergency hotline.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 p-8 md:p-12 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <MessageSquare className="w-8 h-8 mr-3 text-rose-600" aria-hidden="true" /> Send a Message
            </h2>
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. Our team will get back to you within 24-48 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-rose-600 font-bold hover:underline focus-visible:outline-rose-600 rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      id="fullName"
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none transition-all" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:border-rose-500 outline-none transition-all ${emailError ? 'border-rose-300' : 'border-slate-100'}`} 
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "email-error" : undefined}
                      required
                    />
                    {emailError && (
                      <div id="email-error" className="flex items-center text-rose-600 text-xs mt-1 ml-1 animate-in fade-in slide-in-from-top-1" role="alert">
                        <AlertCircle className="w-3 h-3 mr-1" aria-hidden="true" /> {emailError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none appearance-none cursor-pointer pr-10"
                    >
                      <option>General Inquiry</option>
                      <option>Partnership Proposal</option>
                      <option>Volunteer Application</option>
                      <option>Donation Question</option>
                      <option>Grant/Scholarship Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none resize-none transition-all"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={!!emailError}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-slate-300 outline-none"
                >
                  Send Message <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
