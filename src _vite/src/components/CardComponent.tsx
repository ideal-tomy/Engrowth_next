import React, { forwardRef } from 'react';
import '../styles/components.css';

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
  backgroundImageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

const CardComponent = forwardRef<HTMLDivElement, CardProps>((
  {
    title,
    description,
    imageUrl,
    icon,
    backgroundImageUrl,
    className = '',
    children,
  },
  ref
) => {
  const cardStyle = backgroundImageUrl ? {
    backgroundImage: `url(${backgroundImageUrl})`,
  } : {};

  return (
    <div 
      ref={ref}
      className={`card ${backgroundImageUrl ? 'has-background-image' : ''} ${className}`}
      style={cardStyle}
    >
      {backgroundImageUrl && <div className="card-background-overlay"></div>}
      
      <div className="card-inner-content">
        {imageUrl && (
          <div className="card-image-container">
            <img src={imageUrl} alt={title} className="card-image" />
          </div>
        )}
        {icon && (
          <div className="card-icon">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        )}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-description">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
});

export default CardComponent;