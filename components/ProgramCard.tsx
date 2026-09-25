
import React from 'react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
      <div className="h-52 relative overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-md">
          {program.icon}
        </div>
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
          {program.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {program.description}
        </p>
      </div>
      <div className="p-8 pt-0 mt-auto">
        <a 
          href="#/contact" 
          className="block w-full text-center py-3.5 px-4 bg-slate-50 text-slate-900 rounded-xl font-bold hover:bg-rose-600 hover:text-white transition-all"
        >
          Apply / Learn More
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
