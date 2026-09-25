
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-slate-900 overflow-hidden" aria-labelledby="carousel-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="carousel-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-4">Voices of Transformation</h2>
          <p className="text-slate-400 text-lg">Real stories from the people whose lives you've helped change.</p>
        </div>

        <div className="relative group">
          {/* Main Card Area */}
          <div className="relative overflow-hidden min-h-[400px]" aria-live="polite">
            <div 
              className="transition-opacity duration-500 ease-in-out"
              style={{ opacity: isAnimating ? 0.3 : 1 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-16 flex items-center">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white text-white hover:text-slate-900 p-4 rounded-full backdrop-blur-md border border-white/20 transition-all focus:ring-4 focus:ring-rose-500 outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-16 flex items-center">
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white text-white hover:text-slate-900 p-4 rounded-full backdrop-blur-md border border-white/20 transition-all focus:ring-4 focus:ring-rose-500 outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-12 space-x-3" role="tablist">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                role="tab"
                aria-selected={currentIndex === idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all outline-none focus:ring-2 focus:ring-rose-500 ${
                  currentIndex === idx ? 'w-12 bg-rose-600' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
