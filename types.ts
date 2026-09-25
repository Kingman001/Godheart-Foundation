
import React from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface ImpactData {
  year: string;
  scholarships: number;
  grants: number;
  skills: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}