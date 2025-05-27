'use client';

import React from 'react';
import '../styles/components.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgColor?: 'gradient' | 'solid';
  textColor?: 'light' | 'dark';
  align?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large';
}

export default function HeroSection({
  title,
  subtitle,
  bgColor = 'gradient',
  textColor = 'dark',
  align = 'center',
  height = 'medium'
}: HeroSectionProps) {
  const bgColorClass = bgColor === 'gradient' 
    ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
    : 'bg-white';
  
  const textColorClass = textColor === 'light' 
    ? 'text-white' 
    : 'text-gray-900';
  
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align];

  const heightClass = {
    small: 'py-12',
    medium: 'py-24',
    large: 'py-32'
  }[height];

  return (
    <section className={`${bgColorClass} ${heightClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={alignClass}>
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl ${textColorClass}`}>
          {title}
        </h1>
          <p className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${textColorClass}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
} 