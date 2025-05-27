import React from 'react';
import '../styles/components.css';

interface StylishBannerProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  type?: 'primary' | 'gold' | 'dark';
}

const StylishBanner: React.FC<StylishBannerProps> = ({
  title, 
  subtitle,
  icon,
  type = 'primary'
}) => {
  // シンプルなスタイルで実装
  const bannerStyle: React.CSSProperties = {
    position: 'relative' as const,
    margin: '3rem 0',
    padding: '3rem 2rem',
    textAlign: 'center' as const,
    color: '#fff',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden' as const,
    background: type === 'gold' 
      ? 'linear-gradient(135deg, #8b0000, #d4af37)'
      : type === 'dark'
        ? 'linear-gradient(135deg, #000, #222)'
        : 'linear-gradient(135deg, #1a2a3a, #8b0000)'
  };

  const titleStyle: React.CSSProperties = {
    position: 'relative' as const,
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 700,
    color: '#fff',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  };

  const subtitleStyle: React.CSSProperties = {
    position: 'relative' as const,
    fontSize: '1.2rem',
    margin: '0 auto',
    maxWidth: '800px',
    opacity: 0.9
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  };

  const underlineStyle: React.CSSProperties = {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5px',
    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)'
  };

  return (
    <div style={bannerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      <div style={underlineStyle}></div>
    </div>
  );
};

export default StylishBanner; 