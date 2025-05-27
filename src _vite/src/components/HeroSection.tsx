import React from 'react';
import '../styles/components.css';

interface HeroSectionProps {
  title: string;
  subtitle?: string | string[];
  bgColor?: 'primary' | 'dark' | 'light' | 'gradient';
  textColor?: 'light' | 'dark';
  align?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgColor = 'dark',
  textColor = 'light',
  align = 'center',
  height = 'medium'
}) => {
  const getBgClass = () => {
    switch (bgColor) {
      case 'primary': return 'hero-bg-primary';
      case 'dark': return 'hero-bg-dark';
      case 'light': return 'hero-bg-light';
      case 'gradient': return 'hero-bg-gradient';
      default: return 'hero-bg-dark';
    }
  };

  const getTextClass = () => {
    return textColor === 'light' ? 'hero-text-light' : 'hero-text-dark';
  };

  const getAlignClass = () => {
    switch (align) {
      case 'left': return 'hero-align-left';
      case 'right': return 'hero-align-right';
      default: return 'hero-align-center';
    }
  };

  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'hero-height-small';
      case 'large': return 'hero-height-large';
      default: return 'hero-height-medium';
    }
  };

  const renderSubtitle = () => {
    if (!subtitle) return null;

    if (Array.isArray(subtitle)) {
      return subtitle.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < subtitle.length - 1 && <br />}
        </React.Fragment>
      ));
    } else {
      return subtitle;
    }
  };

  return (
    <div className={`hero-section ${getBgClass()} ${getTextClass()} ${getAlignClass()} ${getHeightClass()}`}>
      <div className="hero-container">
        <h1 className="hero-title">
          {title}
          <span className="hero-underline"></span>
        </h1>
        {subtitle && 
          <p className="hero-subtitle">
            {renderSubtitle()}
          </p>
        }
      </div>
    </div>
  );
};

export default HeroSection; 