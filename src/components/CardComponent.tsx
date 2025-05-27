'use client';

import { ReactNode } from 'react';
import '../styles/components.css';

interface CardComponentProps {
  icon?: string;
  title: string;
  description?: string;
  backgroundImageUrl?: string;
  className?: string;
  children?: ReactNode;
}

export default function CardComponent({
  icon,
    title,
    description,
    backgroundImageUrl,
    className = '',
  children
}: CardComponentProps) {
  const cardStyle = backgroundImageUrl
    ? {
    backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {
        background: 'linear-gradient(135deg, #fff 80%, #fbeaea 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(204,0,0,0.08)',
        padding: '2.2rem 1.7rem',
        transition: 'box-shadow 0.2s, transform 0.2s',
        minHeight: 260,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'flex-start',
      };

  return (
    <div 
      className={`card ${className} ${backgroundImageUrl ? 'text-white' : 'bg-white'}`}
      style={cardStyle}
    >
        {icon && (
        <span style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 56,
          height: 56,
          background: '#faeaea',
          borderRadius: '50%',
          color: '#cc0000',
          fontSize: '2.2rem',
          marginBottom: 18,
          boxShadow: '0 2px 8px rgba(204,0,0,0.08)'
        }}>
            <span className="material-symbols-outlined">{icon}</span>
        </span>
        )}
      <h3 className="card-title" style={{ fontWeight: 700, fontSize: '1.18rem', color: '#8b0000', marginBottom: 10 }}>{title}</h3>
      {description && <p className="card-description" style={{ color: '#444', fontSize: '1.01rem', marginBottom: 0, minHeight: 32 }}>{description}</p>}
          {children}
    </div>
  );
}