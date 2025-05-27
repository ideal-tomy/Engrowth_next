import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  variant = 'primary'
}) => {
  return (
    <div className={`feature-card ${variant}`}>
      {icon && <div className="feature-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard; 