
import React from 'react';
import { Quote, Heart } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = "" }) => {
  return (
    <div className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group ${className}`}>
      {/* Background Icon Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
        <Heart className="w-32 h-32 text-rose-600" />
      </div>

      <Quote className="w-12 h-12 text-rose-600/20 mb-6" aria-hidden="true" />
      
      <blockquote className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center space-x-4 relative z-10">
        <img 
          src={testimonial.avatar} 
          alt="" 
          className="w-16 h-16 rounded-full border-4 border-slate-50 shadow-md object-cover" 
        />
        <div>
          <h4 className="text-lg font-bold text-slate-900 leading-tight">{testimonial.name}</h4>
          <p className="text-rose-600 font-semibold text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
